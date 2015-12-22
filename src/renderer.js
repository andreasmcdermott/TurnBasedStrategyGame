var global = require('./global');

var renderer = {
  render: function () {
    global.app.layer.clear('#000000');
    global.map.render();
  }
};

module.exports = renderer;