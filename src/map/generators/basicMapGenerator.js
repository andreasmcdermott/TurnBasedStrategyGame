var base = require('./baseMapGenerator');

function BasicMapGenerator() {
  this.layout = [
    [false, false, false, true, true, true],
    [false, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true],
    [false, false, true, true, true, true, true],
    [false, false, false, false, true]
  ];
}

BasicMapGenerator.prototype = base;

BasicMapGenerator.prototype.getType = function () {
  return Math.floor(Math.random() * 10) === 1 ? '0' : '1';
}

module.exports = new BasicMapGenerator();