import global from './global';

function handleHover() {
  var pos = global.input.getPos();
  var cell = global.map.getCellByPos(pos);
  if (cell !== null && cell.walkable) {
    global.map.setEndPosition(cell);
  }
}

function handleClick() {
  if (global.input.hasClicked()) {
    var pos = global.input.getPos();
    var cell = global.map.getCellByPos(pos);
    if (cell !== null && cell.walkable) {
      global.map.setStartPosition(cell); 
    }
  }
}

export default {
  step (dt) {
    handleClick();
    handleHover();
    global.input.newFrame();
  }
};