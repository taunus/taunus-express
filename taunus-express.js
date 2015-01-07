'use strict';

function factory (taunus, app, options) {
  var _render = taunus.render.bind(taunus);

  taunus.render = taunusRender;
  taunus.mount(addRoute, options);

  function addRoute (d) {
    app.get.apply(app, flatten(d));
  }

  function flatten (d) {
    var flat = [d.route, mangle].concat(d.middleware);
    if (d.actionFn) {
      flat.push(d.actionFn);
    }
    flat.push(renderResponse);
    return flat;

    function renderResponse (req, res, next) {
      taunus.render(d, res.viewModel, req, res, next);
    }
  }

  function mangle (req, res, next) {
    res.__redirect = res.redirect;
    res.redirect = redirect;
    next();

    function redirect (status, url) {
      if (arguments.length === 1) {
        url = status;
      }
      taunus.redirect(req, res, url);
    }
  }

  function unmangle (res) {
    if (res && res.__redirect) {
      res.redirect = res.__redirect;
      res.__redirect = void 0;
    }
  }

  function taunusRender (route, vm, req, res, next) {
    unmangle(res);
    return _render.apply(null, arguments);
  }
}

module.exports = factory;
