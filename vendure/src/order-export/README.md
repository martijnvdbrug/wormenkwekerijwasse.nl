# Order export plugin

## Compile admin UI
```js
compileUiExtensions({
    outputPath: path.join(__dirname, '__admin-ui'),
    extensions: [OrderExportPlugin.ui]
});
```

## Vendure config
```js
plugins: [
        OrderExportPlugin,
        ...
```
Or write your own CSV strategy (must adhere to `OrderExportStrategy` interface):
```js
plugins: [
        OrderExportPlugin.init(myCustomCsvStrategy),
        ...
```