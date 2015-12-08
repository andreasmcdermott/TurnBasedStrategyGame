var BaseMapGenerator = {
  generate: function () {
    var map = {
      cells: []
    };
    var numColumns = 0;
    for (var r = 0; r < this.layout.length; ++r) {
      var layoutRow = this.layout[r];
      var mapRow = [];
      if (layoutRow.length > numColumns) {
        numColumns = layoutRow.length;
      }
      
      for (var q = 0; q < layoutRow.length; ++q) {
        if (!layoutRow[q]) {
          mapRow.push(null);
          continue;
        }

        mapRow.push({
          type: '0'
        });
      }
      map.cells.push(mapRow);
    }

    map.columns = function () {
      return numColumns;
    }
    map.rows = function () {
      return layout.length;
    }
    return map;
  }
};

module.exports = BaseMapGenerator;