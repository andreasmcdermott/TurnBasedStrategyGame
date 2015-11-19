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

var entityManager = require('./entityManager');
var rectComponent = require('./components/rectComponent');
var posComponent = require('./components/posComponent');
var renderProcessors = [
  require('./processors/renderer')
];
var updateProcessors = [];

playground({
  width: 640,
  height: 320,
  scale: 2,
  
  preload: function () {
    
  },
  create: function () {
    for (var y = 0; y < map.rows; ++y) {
      for (var x = 0; x < map.columns; ++x) {
        var id = x + y * map.columns;
        var e = entityManager.addEntity({
          pos: posComponent.create(x * 32, y * 32),
          rect: rectComponent.create(map.types[map.data[id]].color, 32, 32)
        });
        console.log(e);
      }
    }
  },    
  resize: function () {
    
  },    
  ready: function () {

  },
  step: function (dt) {
    for(var i = 0; i < updateProcessors.length; ++i) {
      var processor = updateProcessors[i];
      processor(dt);
    }
  },
  render: function () {
    this.layer.clear('#000000');
    for(var i = 0; i < renderProcessors.length; ++i) {
      var processor = renderProcessors[i];
      processor(this);
    }
  }
});