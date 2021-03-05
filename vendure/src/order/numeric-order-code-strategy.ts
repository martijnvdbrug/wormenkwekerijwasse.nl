import {OrderCodeStrategy, RequestContext} from '@vendure/core';


/**
 * Generates id's like 6149-2990-78
 * Safe untill 1 tenth of a second. Collisions possible,
 * but we take the gamble for the sake of readability
 */
export class NumericOrderCodeStrategy implements OrderCodeStrategy {
    generate(ctx: RequestContext): string {
        return String(Date.now()).slice(1, 11).match(/.{1,4}/g).join('-');
    }
}