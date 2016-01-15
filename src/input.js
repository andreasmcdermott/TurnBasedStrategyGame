var debug = require('./utils/debug');
var global = require('./global');
var Point = require('./utils/point');

var MOUSE_ID = 255;

var pos = new Point(0, 0);
var clicked = false;
var down = false;

var input = {
  newFrame: function () {
    clicked = false;
  },
  getPos: function () {
    return pos;
  },
  isClicking: function () {
    return down;
  },
  hasClicked: function () {
    return clicked;
  },
  pointermove: function (e) {
    pos.set(e.x - global.canvasOffset.x, e.y - global.canvasOffset.y);
  },
  pointerdown: function (e) {
    down = true;
  },
  pointerup: function (e) {
    down = false;
    clicked = true;
  },
  pointerwheel: function (e) {
    
  }
};

module.exports = input;