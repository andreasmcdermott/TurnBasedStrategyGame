var entityManagers = require('./entityManager');
var mapLoader = require('./map/mapLoader');
var mapGenerators = require('./map/mapGenerators');
var processors = require('./processors');

playground({
  width: 640,
  height: 320,
  scale: 2,
  
  preload: function () {
    
  },
  create: function () {
    //this.loadData('test');
  },    
  resize: function () {
    
  },    
  ready: function () {
    var mapGenerator = new mapGenerators.HouseMapGenerator();
    var map = mapGenerator.create();
    //var map = this.data.test;
    entityManagers.create('main', true);
    mapLoader.load(map);
  },
  step: function (dt) {

  },
  render: function () {
    this.layer.clear('#000000');
    processors.render.shapes(this);
  }
});