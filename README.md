# zap-to-tap

> Convert [ZAP](https://github.com/zaptst/zap) to TAP

## Install

```sh
yarn add [--global] zap-to-tap
```

## Example

```sh
... | zap-to-tap
```

```js
const zapToTap = require('zap-to-tap');

process.stdin
  .pipe(zapToTap.stream())
  .pipe(process.stdout);

zapToTap('zap output'); // "tap output"
```
