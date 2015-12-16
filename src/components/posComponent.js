var Point = require('../utils/point');

function createPosComponent(x, y) {
  return new Point(x, y);
}

module.exports = { name: 'pos', create: createPosComponent };