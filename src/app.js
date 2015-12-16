var entityManagers = require('./entityManager');
var mapLoader = require('./map/mapLoader');
var mapGenerators = require('./map/mapGenerators');
var processors = require('./processors');
var Input = require('./input');
var config = require('./config');

playground({
  width: 240,
  height: 360,
  scale: 1.5,
  
  preload: function () {
    
  },
  create: function () {
    this.input = new Input(this);
  },    
  resize: function () {
    
  },    
  ready: function () {
    var m = entityManagers.create('main', true);
    var map = mapGenerators.basic.generate();
    mapLoader.load(map, {
      width: this.width,
      offsetY: config.SCREEN_OFFSET_Y
    });
  },
  step: function (dt) {
    if (entityManagers.get() === null) {
      return;
    }
    processors.update.cells(this, dt);
  },
  render: function () {
    this.layer.clear('#000000');
    processors.render.cells(this);
  }
});