import {EmailEventListener} from "@vendure/email-plugin";
import {OrderStateTransitionEvent, PasswordResetEvent} from "@vendure/core";

export const orderConfirmationHandler = new EmailEventListener('order-confirmation')
    .on(OrderStateTransitionEvent)
    .filter(event => event.toState === 'PaymentSettled' && event.fromState !== 'Modifying' && !!event.order.customer)
    .setRecipient(event => `${event.order.customer!.emailAddress},${process.env.SUPPORT_EMAIL}`)
    .setFrom(`{{ fromAddress }}`)
    .setSubject(`Bedankt voor je bestelling bij Wormenkwekerij met nr. {{ order.code }}`)
    .setTemplateVars(event => {
        return {
            order: event.order,
            taxes: {
                21: (event.order.totalWithTax - event.order.total)
            }
        };
    });

export const passwordResetHandler = new EmailEventListener('password-reset')
    .on(PasswordResetEvent)
    .setRecipient(event => event.user.identifier)
    .setFrom(`{{ fromAddress }}`)
    .setSubject(`Wachtwoord opnieuw instellen`)
    .setTemplateVars(event => ({
        passwordResetToken: event.user.getNativeAuthenticationMethod().passwordResetToken,
    }));
