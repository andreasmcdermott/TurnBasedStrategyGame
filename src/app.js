var entityManagers = require('./entityManager');
var mapLoader = require('./map/mapLoader');
var mapGenerators = require('./map/mapGenerators');
var processors = require('./processors');

playground({
  width: 240,
  height: 360,
  scale: 1.5,
  
  preload: function () {
    
  },
  create: function () {
    
  },    
  resize: function () {
    
  },    
  ready: function () {
    var m = entityManagers.create('main', true);
    var map = mapGenerators.basic.generate();
    mapLoader.load(map, {
      width: this.width,
      offsetY: 32
    });
  },
  step: function (dt) {

  },
  render: function () {
    this.layer.clear('#000000');
    processors.render.shapes(this);
  }
});