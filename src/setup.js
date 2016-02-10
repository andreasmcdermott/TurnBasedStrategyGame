import global from './global';
import config from './config';
import Map from './map';
import Point from './utils/point';
import testMap from '../maps/test_0';

export default {
  preload () {
    
  },
  create () {
    global.canvasOffset = new Point((global.app.width - (testMap[0].length - 1) * config.CELL_SIZE * 0.75) * 0.5, 32);
    global.map = new Map(testMap);
  },    
  resize () {
    
  },    
  ready () {

  }
};