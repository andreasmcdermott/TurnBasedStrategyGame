import debug from './utils/debug';
import global from './global';
import Point from './utils/point';

var MOUSE_ID = 255;

var pos = new Point(0, 0);
var clicked = false;
var down = false;

export default {
  newFrame () {
    clicked = false;
  },
  getPos () {
    return pos;
  },
  isClicking () {
    return down;
  },
  hasClicked () {
    return clicked;
  },
  pointermove (e) {
    pos.set(e.x - global.canvasOffset.x, e.y - global.canvasOffset.y);
  },
  pointerdown (e) {
    down = true;
  },
  pointerup (e) {
    down = false;
    clicked = true;
  },
  pointerwheel (e) {
    
  }
};