var assert = require('./assert');
var check = require('./check');

var util = {
  extend: function (base, extendWith) {
    assert.isObject(extendWith);
    if (check.isNullOrUndefined(extendWith)) {
      return base;
    }
    
    base = base || {};
    for (var key in extendWith) {
      if (!base.hasOwnProperty(key)) {
        var prop = extendWith[key];
        if (check.isArray(prop)) {
          base[key] = this.copyArray(prop);
        }
        else if (check.isObject(prop)) {
          base[key] = this.extend(null, prop);
        }
        else {
          base[key] = prop;
        }
      }
    }
    return base;
  },
  copyArray: function (original) {
    assert.isArray(original);
    
    var copy = [];
    for (var i = 0; i < original.length; ++i) {
      var val = original[i];
      if (check.isArray(val)) {
        copy[i] = this.copyArray(val);
      }
      else if (check.isObject(val)) {
        copy[i] = this.extend(null, val);
      }
      else {
        copy[i] = val;
      }
    }
    return copy;
  }
};

module.exports = util;