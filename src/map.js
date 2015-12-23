var config = require('./config');
var cellTypes = require('./cellTypes');
var global = require('./global');
var Dictionary = require('./utils/dictionary');
var Point = require('./utils/point');
var Cell = require('./entities/cell');
var Wall = require('./entities/wall');

var cells;
var cellsByPosition;
var renderOffset;

function Map(data) {
  cells = [];
  cellsByPosition = new Dictionary(function (key) {
    return key.q + ',' + key.r;
  });
  renderOffset = new Point((global.app.width - (data[0].length - 1) * config.CELL_SIZE * 0.75) * 0.5, 32);
  create.call(this, data);
}

Map.prototype = {
  getCellByPos: function (pos) {
    for (var i = 0; i < cells.length; ++i) {
      var cell = cells[i];
      if (cell.isWithinCell(pos)) {
        return cell;
      }
    }
    return null;
  },
  render: function () {
    for (var i = 0; i < cells.length; ++i) {
      var cell = cells[i];
      
      global.app.layer.strokeStyle('red');
      var cornerPositions = cell.getCorners();
      for (var j = 0; j < cornerPositions.length; ++j) {
        var start = cornerPositions[j].copy().transform(renderOffset);
        var end = cornerPositions[(j + 1) % cornerPositions.length].copy().transform(renderOffset);
        global.app.layer.strokeLine(start.x, start.y, end.x, end.y);
      }
      
      global.app.layer.strokeStyle('blue');
      var links = cell.getLinks();
      for (var k = 0; k < links.length; ++k) {
        var sp = cell.pos.copy().transform(renderOffset);
        var ep = links[k].pos.copy().transform(renderOffset);
        global.app.layer.strokeLine(sp.x, sp.y, ep.x, ep.y);
      }
    }
  }
};

function create(data) {
  var cell;
  
  for (var r = 0; r < data.length; ++r) {
    var row = data[r];
    for (var q = 0; q < row.length; ++q) {
      var cellType = row[q];
      if (cellType === cellTypes.nothing) {
        continue;
      }

      cell = createCorrectType(cellType, q, r);
      cells.push(cell);
      cellsByPosition.set(cell, cell);
    }
  }
  
  for (var i = 0; i < cells.length; ++i) {
    cell = cells[i];
    cell.updateLinks(cellsByPosition);
  }
}

function createCorrectType(type, q, r) {
  switch(type) {
    case cellTypes.regular: 
      return new Cell(q, r);
    case cellTypes.wall: 
      return new Wall(q, r);
    default: 
      throw 'Invalid cell type: ' + type;
  }
}

module.exports = Map;