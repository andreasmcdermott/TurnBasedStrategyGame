function Dictionary(keyMapper) {
  this.keyMapper = keyMapper;
  this.map = {};
}

Dictionary.prototype = {
  set: function (key, value) {
    var strKey = this.keyMapper(key);
    this.map[strKey] = value;
  },
  get: function (key) {
    var strKey = this.keyMapper(key);
    var value = this.map[strKey];
    return value === undefined ? null : value;
  }
}

module.exports = Dictionary;