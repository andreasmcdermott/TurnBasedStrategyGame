var entityManagers = require('./entityManager');
var mapLoader = require('./map/mapLoader');
var mapGenerator = require('./map/mapGenerator');
var processors = require('./processors');
var Input = require('./input');
var config = require('./config');

playground({
  width: config.CANVAS_WIDTH,
  height: config.CANVAS_HEIGHT,
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
    var map = mapGenerators.generate();
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