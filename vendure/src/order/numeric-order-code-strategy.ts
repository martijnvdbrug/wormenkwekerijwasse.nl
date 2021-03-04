import {OrderCodeStrategy, RequestContext} from '@vendure/core';
import generate = require('nanoid/generate');

/**
 * Generates id's like 20210304-01234567
 */
export class NumericOrderCodeStrategy implements OrderCodeStrategy {
    generate(ctx: RequestContext): string {
        const date = new Date();
        const suffix = generate('1234567890', 8);
        const dateString = date.getFullYear() + ('0' + (date.getMonth()+1)).slice(-2) + ('0' + date.getDate()).slice(-2);
        return `${dateString}-${suffix}`;
    }
}