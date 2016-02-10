import test from 'tape';
vimport assert from '../src/utils/assert';

test('is array', function (t) {
  t.plan(7);
  
  t.doesNotThrow(function () { assert.isArray([]); });
  t.throws(function () { assert.isArray(null); });
  t.throws(function () { assert.isArray({}); });
  t.throws(function () { assert.isArray(undefined); });
  t.throws(function () { assert.isArray(''); });
  t.throws(function () { assert.isArray('[]'); });
  t.throws(function () { assert.isArray(0); });
});

test('is string', function (t) {
  t.plan(6);
  
  t.doesNotThrow(function () { assert.isString(''); });
  t.throws(function () { assert.isString([]); });
  t.throws(function () { assert.isString({}); });
  t.throws(function () { assert.isString(0); });
  t.throws(function () { assert.isString(null); });
  t.throws(function () { assert.isString(undefined); });
});

test('is number', function (t) {
  t.plan(7);
  
  t.doesNotThrow(function () { assert.isNumber(0); });
  t.throws(function () { assert.isNumber([]); });
  t.throws(function () { assert.isNumber({}); });
  t.throws(function () { assert.isNumber(''); });
  t.throws(function () { assert.isNumber('0'); });
  t.throws(function () { assert.isNumber(null); });
  t.throws(function () { assert.isNumber(undefined); });
});

test('is object', function (t) {
  t.plan(7);
  
  t.doesNotThrow(function () { assert.isObject({}); });
  t.doesNotThrow(function () { assert.isObject(null); });
  t.throws(function () { assert.isObject([]); });
  t.throws(function () { assert.isObject(''); });
  t.throws(function () { assert.isObject('{}'); });
  t.throws(function () { assert.isObject(0); });
  t.throws(function () { assert.isObject(undefined); });
});

test('is not null or undefined', function (t) {
  t.plan(6);
  
  t.doesNotThrow(function () { assert.isNotNullOrUndefined({}); });
  t.doesNotThrow(function () { assert.isNotNullOrUndefined([]); });
  t.doesNotThrow(function () { assert.isNotNullOrUndefined(''); });
  t.doesNotThrow(function () { assert.isNotNullOrUndefined(0); });
  t.throws(function () { assert.isNotNullOrUndefined(null); });
  t.throws(function () { assert.isNotNullOrUndefined(undefined); });
});