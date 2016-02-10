var global = require('./global');
var Dictionary = require('./utils/dictionary');
var Point = require('./utils/point');

function PathFinder () {
  var keyMapper = function (key) {
    return key.q + ',' + key.r;
  };
  this.private = {
    cellsByPosition: new Dictionary(keyMapper),
    linksByPosition: new Dictionary(keyMapper)
  };
}

function findBestPath(startPos, endPos) {
  var links = this.private.linksByPosition(startPos);
  return null;
}

PathFinder.prototype = {
  findPath: function (startCell, endCell) {
    if (startCell !== null && endCell !== null && !startCell.isSame(endCell)) {
      return findBestPath.call(this, startCell, endCell);    
    }
    return null;
  },
  renderPath: function (path) {
    if (path === null) {
      return;
    }
    global.app.layer.strokeStyle('blue');
    
    for (var i = 0; i < path.length - 1; ++i) {
      var start = path[i].copy().transform(global.canvasOffset);
      var end = path[i + 1].copy().transform(global.canvasOffset);
      global.app.layer.strokeLine(start.x, start.y, end.x, end.y);
    }
  },
  renderLinks: function () {
    global.app.layer.strokeStyle('blue');
    
    var cells = this.private.cellsByPosition.values();
    for (var i = 0; i < cells.length; ++i) {
      var cell = cells[i];
      var sp = cell.pos.copy().transform(global.canvasOffset);
      var links = this.private.linksByPosition.get(cell);
      for (var j = 0; j < links.length; ++j) {
        var linkedCell = links[j];
        var ep = linkedCell.pos.copy().transform(global.canvasOffset);
        global.app.layer.strokeLine(sp.x, sp.y, ep.x, ep.y);
      }
    }
  },
  addCell: function (cell) {
    this.private.cellsByPosition.set(cell, cell);
  },
  updateLinks: function () {
    this.private.linksByPosition.clear();
    var linkOffsetsByOddAndEvenColumn = [
      [{ q: 1, r: 0 }, { q: 1, r: -1 }, { q: 0, r: -1 }, { q: -1, r: -1 }, { q: -1, r: 0 }, { q: 0, r: 1 }],
      [{ q: 1, r: 1 }, { q: 1, r: 0 }, { q: 0, r: -1 }, { q: -1, r: 0 }, { q: -1, r: 1 }, { q: 0, r: 1 }]
    ];
    var cells = this.private.cellsByPosition.values();
    for (var i = 0; i < cells.length; ++i) {
      var cell = cells[i];
      var links = [];
      if (cell.walkable) { 
        var isOddColumn = cell.q % 2;
        var linkOffsets = linkOffsetsByOddAndEvenColumn[isOddColumn];
        for (var j = 0; j < linkOffsets.length; ++j) {
          var linkOffset = linkOffsets[j];
          var otherCell = this.private.cellsByPosition.get({ q: cell.q + linkOffset.q, r: cell.r + linkOffset.r });
          if (otherCell && otherCell.walkable) {
            links.push(otherCell);
          }
        }
      }
      this.private.linksByPosition.set(cell, links);
    }
  }
};

module.exports = PathFinder;