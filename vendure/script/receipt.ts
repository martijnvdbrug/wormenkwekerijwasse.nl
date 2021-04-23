import pdf = require("pdf-creator-node");
import fs = require('fs');
import Handlebars from 'handlebars'

(async () => {
    Handlebars.registerHelper('formatMoney', (amount?: number) => {
        if (amount == null) {
            return amount;
        }
        return (amount / 100).toFixed(2);
    });



    const html = fs.readFileSync(`${__dirname}/pdf-receipt.html`, "utf8");
    const options = {
        format: "A2",
        orientation: "portrait",
        border: "10mm"
    };

    const document = {
        html: html,
        data: {
            btwId: 'Dit is een BTW id',
            orderDate: 'testdatum'
        },
        path: "/tmp/receipt.pdf",
        type: "",
    };
    await pdf.create(document, options);


})();