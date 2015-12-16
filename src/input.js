var Point = require('./utils/point');

var MOUSE_ID = 255;

function Input(app) {
  this.app = app;  
}

function getActivePointer() {
  for (var key in this.app.pointers) {
    return this.app.pointers[key];
  }
}

Input.prototype = {
  getPosition: function () {
    var pointer = getActivePointer.call(this);
    return pointer ? new Point(pointer.x, pointer.y) : null;
  }
}

module.exports = Input;