var entityManagers = require('../entityManager');
var components = require('../components');
var util = require('../util');

var defaultOptions = {
  size: 32,
  startX: 16,
  startY: 16
};

function getColorByType(type) {
  switch(type) {
    case '0': return '#ff0000';
    default: return '#ffffff';
  };
}

var mapLoader = {
  load: function (map, options) {
    options = util.extend(options, defaultOptions);
    var entityManager = entityManagers.get();
    
    var width = options.size;
    var height = Math.sqrt(3) * 0.5 * width;
    var offsetX = width * 0.75;
    var offsetY = height;
    var oddColumnExtraOffset = height * 0.5;
    var startX = (options.width - (map.columns() - 1) * options.size * 0.75) * 0.5;
    var startY = options.offsetY;
    var size = width * 0.5;
    
    for (var r = 0; r < map.cells.length; ++r) {
      var row = map.cells[r];
      for (var q = 0; q < row.length; ++q) {
        var cell = row[q];
        if (cell === null) {
          continue;
        }
        
        var isOddColumn = q % 2;
        var entity = entityManager.add();
        entity.pos = components.pos.create(startX + q * offsetX, startY + r * offsetY + isOddColumn * oddColumnExtraOffset);
        entity.hex = components.hex.create(getColorByType(cell.type), size);
      }
    }
  }
};

module.exports = mapLoader;