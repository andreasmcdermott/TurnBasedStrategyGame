import assert from './assert';
import check from './check';

export default {
  extend: function (base, extendWith) {
    var base = arguments[0];
    base = base || {};
    
    for (var i = 1; i < arguments.length; ++i) {
      var extendWith = arguments[i];
      if (check.isNullOrUndefined(extendWith)) {
        continue;
      }
      for (var key in extendWith) {
        var prop = extendWith[key];
        if (check.isArray(prop)) {
          base[key] = this.copyArray(prop);
        }
        else if (check.isObject(prop) && !check.isNullOrUndefined(prop)) {
          base[key] = this.extend({}, prop);
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
      else if (check.isObject(val) && !check.isNullOrUndefined(val)) {
        copy[i] = this.extend({}, val);
      }
      else {
        copy[i] = val;
      }
    }
    return copy;
  }
};