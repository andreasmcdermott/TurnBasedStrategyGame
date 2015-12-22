var config = require('../config');
var global = require('../global');
var Point = require('../utils/point');
var Entity = require('./entity');

function Cell(q, r) {
  this.q = q;
  this.r = r;
  this.size = config.CELL_SIZE * 0.5;
  this.links = [];
  
  calculatePosition.call(this);
}

function calculatePosition() {
  var isOddColumn = this.q % 2;
  var width = config.CELL_SIZE;
  var height = Math.sqrt(3) * 0.5 * width;
  var offsetX = width * 0.75;
  var offsetY = height;
  var oddColumnExtraOffset = height * 0.5;
  
  this.pos = new Point(this.q * offsetX, 
                       this.r * offsetY + isOddColumn * oddColumnExtraOffset);
}

function addLink (cell, offset) {
  this.links.push({ cell: cell, offset: offset });
}

Cell.prototype = Entity;
Cell.prototype.getCorners = function () {
  var corners = [0, 60, 120, 180, 240, 300];
  var cornerPositions = [];
  for (var i = 0; i < corners.length; ++i) {
    var deg = corners[i];
    var rad = Math.PI / 180 * deg;
    cornerPositions.push(new Point(this.pos.x + this.size * Math.cos(rad), 
                                   this.pos.y + this.size * Math.sin(rad)));
  }
  
  return cornerPositions;
};

Cell.prototype.getLinks = function () {
  var links = [];
  for (var i = 0; i < this.links.length; ++i) {
    links.push(this.links[i].cell);
  }
  return links;
};

Cell.prototype.updateLinks = function (cellsByPosition) {
  var linkOffsetsByOddAndEvenColumn = [
    [{ q: 1, r: 0 }, { q: 1, r: -1 }, { q: 0, r: -1 }, { q: -1, r: -1 }, { q: -1, r: 0 }, { q: 0, r: 1 }],
    [{ q: 1, r: 1 }, { q: 1, r: 0 }, { q: 0, r: -1 }, { q: -1, r: 0 }, { q: -1, r: 1 }, { q: 0, r: 1 }]
  ];

  var isOddColumn = this.q % 2;
  var linkOffsets = linkOffsetsByOddAndEvenColumn[isOddColumn];
  for (var i = 0; i < linkOffsets.length; ++i) {
    var linkOffset = linkOffsets[i];
    var cell = cellsByPosition.get({ q: this.q + linkOffset.q, r: this.r + linkOffset.r });
    if (cell) {
      addLink.call(this, cell, linkOffset);
    }
  }
};


module.exports = Cell;