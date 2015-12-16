function Cell(q, r, size, color) {
  this.q = q;
  this.r = r;
  this.size = size;
  this.color = color;
  this.neighbors = [];
}

Cell.prototype = {
  addNeighbor: function (entity) {
    this.neighbors.push(entity);
  }
}

module.exports = Cell;