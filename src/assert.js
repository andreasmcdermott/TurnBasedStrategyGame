var check = require('./check');

var assert = {
  isArray: function (param, message) {
    if (!check.isArray(param)) {
      throw message || 'Invalid type. Expected array, received ' + param + '.';
    }
  },
  isNumber: function (param, message) {
    if (!check.isNumber(param)) {
      throw message || 'Invalid type. Expected number, received ' + param + '.';
    }
  },
  isString: function (param, message) {
    if (!check.isString(param)) {
      throw message || 'Invalid type. Expected string, received ' + param + '.';
    }
  },
  isObject: function (param, message) {
    if (!check.isObject(param)) {
      throw message || 'Invalid type. Expected object, received ' + param + '.';
    }
  },
  isNotNullOrUndefined: function (param, message) {
    if (check.isNullOrUndefined(param)) {
      throw message || 'Invalid value. Expected not null and not undefined.';
    }
  }
};

module.exports = assert;