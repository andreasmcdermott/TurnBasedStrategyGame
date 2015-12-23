var global = require('./global');

function handleHover() {
  var pos = global.input.getPos();
  var cell = global.map.getCellByPos(pos);
}

function handleClick() {
  if (global.input.hasClicked()) {
    var pos = global.input.getPos();
    var cell = global.map.getCellByPos(pos);
  }
}

var logic = {
  step: function (dt) {
    handleClick();
    handleHover();
    global.input.newFrame();
  }
};

module.exports = logic;