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

module.exports = new BasicMapGenerator();