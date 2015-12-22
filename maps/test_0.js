var types = require('../src/cellTypes');
var nil = types.nothing;
var reg = types.regular;
var wal = types.wall;

var map = [
    [nil, nil, nil, reg, reg, reg, nil, nil, nil],
    [nil, reg, reg, reg, reg, reg, reg, reg, nil],
    [reg, reg, reg, reg, reg, reg, reg, reg, reg],
    [reg, reg, reg, wal, reg, wal, reg, reg, reg],
    [reg, reg, wal, wal, reg, wal, wal, reg, reg],
    [reg, reg, reg, reg, reg, reg, reg, reg, reg],
    [reg, reg, wal, wal, reg, wal, wal, reg, reg],
    [reg, reg, reg, wal, reg, wal, reg, reg, reg],
    [reg, reg, reg, reg, reg, reg, reg, reg, reg],
    [nil, nil, reg, reg, reg, reg, reg, nil, nil],
    [nil, nil, nil, nil, reg, nil, nil, nil, nil]
  ]

module.exports = map;