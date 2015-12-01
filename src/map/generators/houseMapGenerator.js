var util = require('../../util');
var BaseMapGenerator = require('./baseMapGenerator');

var defaultOptions = {
  rows: 10,
  cols: 10,
  cellSize: 32
}

var HouseMapGenerator = function (options) {
  options = util.extend(options, defaultOptions);
};

HouseMapGenerator.prototype = BaseMapGenerator;

HouseMapGenerator.prototype.create = function () {
  return { entities: [] };
}

module.exports = HouseMapGenerator;