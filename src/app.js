var map = {
  types: {
    '0': { color: '#0000ff' },
    '1': { color: '#ff0000' }
  },
  data: [
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1
  ],
  columns: 20,
  rows: 10
};

var entityManagers = require('./entityManager');
var mapLoader = require('./mapLoader');
var processors = require('./processors');

playground({
  width: 640,
  height: 320,
  scale: 2,
  
  preload: function () {
    
  },
  create: function () {
    this.loadData('test');
  },    
  resize: function () {
    
  },    
  ready: function () {
    entityManagers.create('main', true);
    mapLoader.load(this.data.test)
  },
  step: function (dt) {

  },
  render: function () {
    this.layer.clear('#000000');
    processors.render.shapes(this);
  }
});