import {Controller, Get} from '@nestjs/common';
import {LanguageCode} from '@vendure/core';

/**
 * Dirty hack to keep Cloud Run container alive for X seconds
 */
@Controller('keep-alive')
export class KeepAliveController {

    @Get('/')
    async keepAlive(): Promise<void> {
        await new Promise(function(resolve) {
            setTimeout(resolve, 10000)
        });
    }

}
