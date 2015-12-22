var global = require('./global');
var Map = require('./map');
var testMap = require('../maps/test_0');

var setup = {
  preload: function () {
    
  },
  create: function () {
    global.map = new Map(testMap);
  },    
  resize: function () {
    
  },    
  ready: function () {

  }
};

module.exports = setup;