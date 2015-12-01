var assert = {
  isArray: function (param) {
    if (!Array.isArray(param)) {
      throw 'Invalid type. Expected array.';
    }
  },
  isNumber: function (param, message) {
    if (typeof param !== 'number') {
      throw message || 'Invalid type. Expected number.'
    }
  },
  isString: function (param, message) {
    if (typeof param !== 'string') {
      throw message || 'Invalid type. Expected string.'
    }
  },
  isObject: function (param, message) {
    if (typeof param !== 'object') {
      throw message || 'Invalid type. Expected object';
    }
  },
  isNotNullOrUndefined: function (param, message) {
    if (param === null || param === undefined) {
      throw message || 'Invalid value. Expected not null and not undefined.';
    }
  }
};

module.exports = assert;