export default {
  isArray: function (param) {
    return Array.isArray(param);
  },
  isNumber: function (param) {
    return typeof param === 'number';
  },
  isString: function (param) {
    return typeof param === 'string';
  },
  isObject: function (param) {
    return typeof param === 'object' && !this.isArray(param);
  },
  isNullOrUndefined: function (param) {
    return param === null || param === undefined;
  },
  isNotNullOrUndefined: function (param) {
    return !this.isNullOrUndefined(param);
  }
};