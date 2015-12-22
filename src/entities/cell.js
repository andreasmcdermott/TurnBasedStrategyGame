var config = require('../config');
var global = require('../global');
var util = require('../utils/util');
var Point = require('../utils/point');
var Entity = require('./entity');

function Cell(q, r) {
  this.q = q;
  this.r = r;
  this.size = config.CELL_SIZE * 0.5;
  this.links = [];
  this.walkable = true;
  
  var pos = calculatePosition.call(this);
  
  Entity.call(this, pos);
}

function calculatePosition() {
  var isOddColumn = this.q % 2;
  var width = config.CELL_SIZE;
  var height = Math.sqrt(3) * 0.5 * width;
  var offsetX = width * 0.75;
  var offsetY = height;
  var oddColumnExtraOffset = height * 0.5;
  
  return new Point(this.q * offsetX, 
                       this.r * offsetY + isOddColumn * oddColumnExtraOffset);
}

Cell.prototype = util.extend({}, Entity.prototype, {
  getCorners: function () {
    var corners = [0, 60, 120, 180, 240, 300];
    var cornerPositions = [];
    for (var i = 0; i < corners.length; ++i) {
      var deg = corners[i];
      var rad = Math.PI / 180 * deg;
      cornerPositions.push(new Point(this.pos.x + this.size * Math.cos(rad), 
                                     this.pos.y + this.size * Math.sin(rad)));
    }

    return cornerPositions;
  },
  getLinks: function () {
    var links = [];
    for (var i = 0; i < this.links.length; ++i) {
      links.push(this.links[i].cell);
    }
    return links;
  },
  updateLinks: function (cellsByPosition) {
    this.links = [];
    
    var linkOffsetsByOddAndEvenColumn = [
      [{ q: 1, r: 0 }, { q: 1, r: -1 }, { q: 0, r: -1 }, { q: -1, r: -1 }, { q: -1, r: 0 }, { q: 0, r: 1 }],
      [{ q: 1, r: 1 }, { q: 1, r: 0 }, { q: 0, r: -1 }, { q: -1, r: 0 }, { q: -1, r: 1 }, { q: 0, r: 1 }]
    ];

    var isOddColumn = this.q % 2;
    var linkOffsets = linkOffsetsByOddAndEvenColumn[isOddColumn];
    for (var i = 0; i < linkOffsets.length; ++i) {
      var linkOffset = linkOffsets[i];
      var cell = cellsByPosition.get({ q: this.q + linkOffset.q, r: this.r + linkOffset.r });
      if (cell && cell.walkable) {
        this.links.push({ cell: cell, offset: linkOffset });
      }
    }
  }
});

Cell.prototype.constructor = Cell;

module.exports = Cell;