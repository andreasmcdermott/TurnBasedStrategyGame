function Dictionary(keyMapper) {
  this.private = {
    keyMapper: keyMapper,
    map: {}
  };
}

Dictionary.prototype = {
  clear: function () {
    this.private.map = {};
  },
  set: function (key, value) {
    var strKey = this.private.keyMapper(key);
    this.private.map[strKey] = value;
  },
  get: function (key) {
    var strKey = this.private.keyMapper(key);
    var value = this.private.map[strKey];
    return value === undefined ? null : value;
  },
  values: function () {
    var values = [];
    for (var key in this.private.map) {
      values.push(this.private.map[key]);
    }
    
    return values;
  }
}

module.exports = Dictionary;