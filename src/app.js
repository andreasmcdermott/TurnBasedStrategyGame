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
var rectComponent = require('./components/rectComponent');
var posComponent = require('./components/posComponent');
var renderer = require('./processors/renderer');

playground({
  width: 640,
  height: 320,
  scale: 2,
  
  preload: function () {
    
  },
  create: function () {
    var entityManager = entityManagers.create('main', true);
    
    for (var y = 0; y < map.rows; ++y) {
      for (var x = 0; x < map.columns; ++x) {
        var id = x + y * map.columns;
        var e = entityManager.add({
          pos: posComponent.create(x * 32, y * 32),
          rect: rectComponent.create(map.types[map.data[id]].color, 32, 32)
        });
      }
    }
  },    
  resize: function () {
    
  },    
  ready: function () {

  },
  step: function (dt) {

  },
  render: function () {
    this.layer.clear('#000000');
    renderer(this);
  }
});