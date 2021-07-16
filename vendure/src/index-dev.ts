require('dotenv').config();
import {bootstrap, DefaultLogger, LogLevel} from '@vendure/core';
import {config} from './vendure-config';
import localtunnel from 'localtunnel';

/**
 * Dev env settings
 */
(async () => {
/*    const tunnel = await localtunnel({port: 3000});
    // the assigned public url for your tunnel
    process.env.VENDURE_HOST = tunnel.url;
    console.log('Localtunnel set up', tunnel.url);
    tunnel.on('close', () => {
        console.error('tunnel closed');
    });*/
})();

bootstrap({
    ...config,
    workerOptions: {
        runInMainProcess: false,
    },
    dbConnectionOptions: {
        ...config.dbConnectionOptions,
        logging: 'all'
    },
    // logger: new DefaultLogger({ level: LogLevel.Debug }),
})
    .then((app) => {
        console.log(`\x1b[46mUsing database ${process.env.DATABASE_NAME} \x1b[0m`);
    })
    .catch(err => console.error(err));

