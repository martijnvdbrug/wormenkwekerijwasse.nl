# Vendure SendCloud plugin
This plugins creates orders in SendCloud as soon as a Vendure Order transitions to `PaymentSettled`. 
The plugin uses `product.customFields.weight` to sync weight to SendCloud. It will divide the weight by 1000, because Sendcloud expects kilograms instead of grams.
 If you don't have this field, no problem, a weight of `0` will be synced to SendCloud.

Add this to your `vendure-config.ts` to get the plugin up and running:
```js
Plugins: [
  SendcloudPlugin.init({
     publicKey: process.env.SENDCLOUD_API_PUBLIC,
     secret: process.env.SENDCLOUD_API_SECRET
  }),
  ...
]
```
You need both your SendCloud public key and secret key.

If you want orders to be updated in Vendure, set up a webhook in your SendCloud account pointing to `https://your-vendure-domain.io/sendcloud/webhook`
