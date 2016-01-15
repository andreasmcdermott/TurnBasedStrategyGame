var global = require('./global');
var config = require('./config');
var Map = require('./map');
var Point = require('./utils/point');
var testMap = require('../maps/test_0');

var setup = {
  preload: function () {
    
  },
  create: function () {
    global.canvasOffset = new Point((global.app.width - (testMap[0].length - 1) * config.CELL_SIZE * 0.75) * 0.5, 32);
    global.map = new Map(testMap);
  },    
  resize: function () {
    
  },    
  ready: function () {

  }
};

module.exports = setup;