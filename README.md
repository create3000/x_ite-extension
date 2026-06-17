# x_ite-extension

Helper Functions for X_ITE Extension

## Usage

Include the extension before the x_ite script, so it is available when X_ITE starts.

```js
import register from "node_modules/x_ite-extension/dist/x_ite-extension.js";

register (X3D =>
{
   // .. your extension code comes here.
});
```

## License

x_ite-extension is free software and licensed under the [MIT License](LICENSE.md).
