var Cell = require('../utils/cell');

function createCellComponent (q, r, size, color) {
  return new Cell(q, r, size, color);
}

module.exports = { create: createCellComponent, name: 'cell' };