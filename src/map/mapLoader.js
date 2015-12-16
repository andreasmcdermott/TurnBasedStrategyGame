var entityManagers = require('../entityManager');
var components = require('../components');
var util = require('../utils/util');
var config = require('../config');

var defaultOptions = {
  size: config.CELL_SIZE,
  startX: 16,
  startY: 16
};

function getColorByType(type) {
  switch(type) {
    case '0': return '#ff0000';
    default: return '#00ff00';
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
    
    var entities = {};
    for (var r = 0; r < map.cells.length; ++r) {
      var row = map.cells[r];
      for (var q = 0; q < row.length; ++q) {
        var cell = row[q];
        if (cell === null) {
          continue;
        }
        
        var isOddColumn = q % 2;
        var entity = entityManager.add();
        entity.cell = components.cell.create(q, r, size, getColorByType(cell.type));
        entity.pos = components.pos.create(startX + q * offsetX, startY + r * offsetY + isOddColumn * oddColumnExtraOffset);
        entities[q + '-' + r] = entity;
      }
    }
    
    var neighborsByOddAndEvenColumn = [
      [{ q: 1, r: 0 }, { q: 1, r: -1 }, { q: 0, r: -1 }, { q: -1, r: -1 }, { q: -1, r: 0 }, { q: 0, r: 1 }],
      [{ q: 1, r: 1 }, { q: 1, r: 0 }, { q: 0, r: -1 }, { q: -1, r: 0 }, { q: -1, r: 1 }, { q: 0, r: 1 }]
    ];
    
    for (var key in entities) {
      var entity = entities[key];
      var isOddColumn = entity.cell.q % 2;
      var neighbors = neighborsByOddAndEvenColumn[isOddColumn];
      for (var i = 0; i < neighbors.length; ++i) {
        var neighbor = neighbors[i];
        var neighborEntity = entities[(entity.cell.q + neighbor.q) + '-' + (entity.cell.r + neighbor.r)];
        if (neighborEntity) {
          entity.cell.addNeighbor(neighborEntity);
        }
      }
    }
  }
};

module.exports = mapLoader;