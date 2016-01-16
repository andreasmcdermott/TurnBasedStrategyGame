var config = require('./config');
var cellTypes = require('./cellTypes');
var global = require('./global');
var Dictionary = require('./utils/dictionary');
var Point = require('./utils/point');
var Cell = require('./entities/cell');
var Wall = require('./entities/wall');
var PathFinder = require('./pathFinder');

function Map(data) {
  this.private = {
    pathFinder: new PathFinder(),
    startPos: null,
    endPos: null,
    path: null,
    cells: []
  };
  create.call(this, data);
}

Map.prototype = {
  getCellByPos: function (pos) {
    for (var i = 0; i < this.private.cells.length; ++i) {
      var cell = this.private.cells[i];
      if (cell.isWithinCell(pos)) {
        return cell;
      }
    }
    return null;
  },
  setStartPosition: function (cell) {
    if (cell !== this.private.startPos) {
      this.private.startPos = cell;
      this.private.path = this.private.pathFinder.findPath(this.private.startPos, this.private.endPos);
    }
  },
  setEndPosition: function (cell) {
    if (cell !== this.private.endPos) {
      this.private.endPos = cell;
      this.private.path = this.private.pathFinder.findPath(this.private.startPos, this.private.endPos);
    }
  },
  render: function () {
    for (var i = 0; i < this.private.cells.length; ++i) {
      var cell = this.private.cells[i];
      
      global.app.layer.strokeStyle('red');
      var cornerPositions = cell.getCorners();
      for (var j = 0; j < cornerPositions.length; ++j) {
        var start = cornerPositions[j].copy().transform(global.canvasOffset);
        var end = cornerPositions[(j + 1) % cornerPositions.length].copy().transform(global.canvasOffset);
        global.app.layer.strokeLine(start.x, start.y, end.x, end.y);
      }
    }
    
    this.private.pathFinder.renderPath(this.private.path);
    //this.private.pathFinder.renderLinks();
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
      this.private.cells.push(cell);
      this.private.pathFinder.addCell(cell);
    }
  }
  
  this.private.pathFinder.updateLinks();
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