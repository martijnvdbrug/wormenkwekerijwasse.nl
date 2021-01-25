import {AssetStorageStrategy} from '@vendure/core';
import {Storage} from '@google-cloud/storage';
import {Request} from 'express';
import {Stream} from 'stream';
import * as tmp from 'tmp';
import * as fs from 'fs';

export class GoogleStorageStrategy implements AssetStorageStrategy {

    storage: Storage;
    urlPrefix = 'https://storage.googleapis.com';

    constructor(public bucketName: string) {
        this.storage = new Storage();
    }

    toAbsoluteUrl(request: Request, identifier: string): string {
        if ((request as any).vendureRequestContext?._apiType === 'admin') { // go via assetServer if admin
            return `${request.protocol}://${request.get('host')}/assets/${identifier}`;
        }
        return `${this.urlPrefix}/${this.bucketName}/${identifier}`;
    }

    async deleteFile(identifier: string): Promise<void> {
        await this.storage.bucket(this.bucketName).file(identifier).delete();
    }

    async fileExists(fileName: string): Promise<boolean> {
        const [exists] = await this.storage.bucket(this.bucketName).file(fileName).exists();
        return exists;
    }

    async readFileToBuffer(identifier: string): Promise<Buffer> {
        if (identifier?.startsWith('/')) {
            identifier = identifier.replace('/', '');
        }
        const tmpFile = tmp.fileSync();
        await this.storage.bucket(this.bucketName).file(identifier).download({destination: tmpFile.name});
        return fs.readFileSync(tmpFile.name);
    }

    async readFileToStream(identifier: string): Promise<Stream> {
        if (identifier?.startsWith('/')) {
            identifier = identifier.replace('/', '');
        }
        return this.storage.bucket(this.bucketName).file(identifier).createReadStream();
    }

    async writeFileFromBuffer(fileName: string, data: Buffer): Promise<string> {
        const tmpFile = tmp.fileSync();
        fs.writeFileSync(tmpFile.name, data);
        await this.storage.bucket(this.bucketName).upload(tmpFile.name, {
            destination: fileName
        });
        return fileName;
    }

    async writeFileFromStream(fileName: string, data: Stream): Promise<string> {
        const blob = this.storage.bucket(this.bucketName).file(fileName);
        const uploadStream = blob.createWriteStream()
        await Promise.all([this.streamToPromise(data.pipe(uploadStream)), this.streamToPromise(uploadStream)]);
        return fileName;
    }

    streamToPromise(stream: Stream): Promise<void> {
        return new Promise(function (resolve, reject) {
            stream.on('end', resolve);
            stream.on('finish', resolve);
            stream.on('close', resolve);
            stream.on('error', reject);
        })
    }
}
