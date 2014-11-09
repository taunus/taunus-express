'use strict';

var pkg = require('./package.json');

function factory (taunus, app, options) {
  var render = taunus.render;

  taunus.mount(addRoute, options);

  function addRoute (d) {
    app.get.apply(app, parseMiddleware(d));
  }

  function parseMiddleware (d) {
    var flat = [d.route].concat(d.middleware);
    if (d.actionFn) {
      flat.push(d.actionFn);
    }
    flat.push(renderFactory(d.action));
    return flat;
  }

  function renderFactory (defaultAction) {
    return function renderMiddleware (req, res, next) {
      render(defaultAction, res.viewModel, req, res, next);
    };
  }
}

module.exports = factory;
