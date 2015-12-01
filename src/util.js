var assert = require('./assert');

var util = {
  extend: function (base, extendWith) {
    assert.isObject(extendWith);
    
    base = base || {};
    for (var key in extendWith) {
      if (!base.hasOwnProperty(key)) {
        if (Array.isArray(extendWith[key])) {
          base[key] = this.copyArray(extendWith[key]);
        }
        else if (typeof extendWith[key] === 'object') {
          base[key] = this.extend({}, extendWith[key]);
        }
        else {
          base[key] = extendWith[key];
        }
      }
    }
    return base;
  },
  copyArray: function (original) {
    assert.isArray(original);
    
    var copy = [];
    for (var i = 0; i < original.length; ++i) {
      if (Array.isArray(original[i])) {
        copy[i] = this.copyArray(original[i]);
      }
      else if (typeof original[i] === 'object') {
        copy[i] = this.extend({}, original[i]);
      }
      else {
        copy[i] = original[i];
      }
    }
  }
};

module.exports = util;