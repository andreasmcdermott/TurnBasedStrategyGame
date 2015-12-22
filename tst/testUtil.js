var test = require('tape');
var util = require('../src/utils/util');

test('expand', function (t) {
  t.plan(2);
  
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
  var source2 = {t: true};
  var obj = util.extend({}, source2, source);
  t.deepEqual(obj, source);
  t.deepEqual(source2, {t: true});
});

test('copy array', function (t) {
  t.plan(1);
  
  var source = [1, 'a', null, { x: 0, y: {}, z: [1, 2] }, [1, 2, {x: 1, y: 2}]];
  var copy = util.copyArray(source);
  t.deepEqual(copy, source)
});