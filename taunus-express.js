'use strict';

function factory (taunus, app, options) {
  taunus.mount(addRoute, options);

  function addRoute (d) {
    app.get.apply(app, flatten(d));
  }

  function flatten (d) {
    var flat = [d.route].concat(d.middleware);
    if (d.actionFn) {
      flat.push(d.actionFn);
    }
    flat.push(render);
    return flat;

    function render (req, res, next) {
      taunus.render(d, res.viewModel, req, res, next);
    }
  }
}

module.exports = factory;
