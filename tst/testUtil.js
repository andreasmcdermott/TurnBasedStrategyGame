var test = require('tape');
var util = require('../src/util');

test('expand', function (t) {
  t.plan(1);
  
  var source = {
    t: 'nooo', 
    x: 1, 
    y: 2, 
    oops: null, 
    nada: undefined,
    arr: [1, 2, 3], 
    arr2: [{a: 1}, {a: 2}], 
    x: 'hi', 
    obj: {t: false, z: 12, arr: [1, 2]}
  };
  var obj = util.extend({t: true}, source);
  var correct = source;
  correct.t = true; // Should not have modified existing value
  t.deepEqual(obj, correct);
});

test('copy array', function (t) {
  t.plan(1);
  
  var source = [1, 'a', null, { x: 0, y: {}, z: [1, 2] }, [1, 2, {x: 1, y: 2}]];
  var copy = util.copyArray(source);
  t.deepEqual(copy, source)
});