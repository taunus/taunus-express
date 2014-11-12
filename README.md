# taunus-express

> Taunus plugin for Express

# Install

```shell
npm install taunus-express --save
```

# Use

```js
var taunus = require('taunus');
var taunusExpress = require('taunus-express');
var express = require('express');
var app = express();
var options = {
  // ...
};

taunusExpress(taunus, app, options);
```

Note that the `options` object is configured as documented by the Taunus API documentation.

# License

MIT
