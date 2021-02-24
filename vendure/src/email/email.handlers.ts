import {EmailEventListener} from "@vendure/email-plugin";
import {OrderStateTransitionEvent} from "@vendure/core";

export const orderConfirmationHandler = new EmailEventListener('order-confirmation')
    .on(OrderStateTransitionEvent)
    .filter(event => event.toState === 'PaymentSettled' && event.fromState !== 'Modifying' && !!event.order.customer)
    .setRecipient(event => `${event.order.customer!.emailAddress},${process.env.SUPPORT_EMAIL}`)
    .setFrom(`{{ fromAddress }}`)
    .setSubject(`Bedankt voor je bestelling bij {{ channelName }} met nr. {{ order.code }}`)
    .setTemplateVars(event => {
        return {
            order: event.order,
            taxes: {
                21: (event.order.totalWithTax - event.order.total)
            }
        };
    });