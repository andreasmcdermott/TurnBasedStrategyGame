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

playground({
  width: 640,
  height: 320,
  scale: 2,
  
  preload: function () {
    
  },
  create: function () {
    
  },    
  resize: function () {
    
  },    
  ready: function () {
    
  },
  render: function () {
    this.layer.clear('#000000');
    for (var y = 0; y < map.rows; ++y) {
      for (var x = 0; x < map.columns; ++x) {
        var cell = map.data[y * map.columns + x];
        var cellType = map.types[cell];
        
        this.layer.fillStyle(cellType.color);
        this.layer.fillRect(x * 32, y * 32, 32, 32);
      }
    }
  }
});