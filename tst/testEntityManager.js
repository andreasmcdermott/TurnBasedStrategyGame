var test = require('tape');
var entityManager = require('../src/entityManager');

test('create entity without object', function (t) {
  entityManager.reset();  
  
  t.plan(3);
  
  for (var i = 0; i < 3; ++i) {
    t.equal(entityManager.createEntity().uid, i);
  }
});

test('create entity with object', function (t) {
  entityManager.reset();
  
  t.plan(3);
  var e;
  
  e = entityManager.createEntity({});
  t.equal(0, e.uid);
  
  e = entityManager.createEntity({ uid: 1000, other: true });
  t.deepEqual({ uid: 1, other: true }, e);
  
  e = entityManager.createEntity({ x: 0 });
  t.deepEqual({ uid: 2, x: 0 }, e);
});

test('add new entity', function (t) {
  entityManager.reset();
  
  t.plan(2);
  
  var e = entityManager.addEntity();
  
  t.deepEqual({ uid: 0 }, e);
  t.deepEqual({ uid: 0 }, entityManager.getEntity(0));
});

test('add existing entity', function (t) {
  entityManager.reset();
  
  t.plan(4);
  var e;
  
  e = entityManager.addEntity({ x: true });
  t.deepEqual({ uid: 0, x: true }, e);
  t.deepEqual({ uid: 0, x: true }, entityManager.getEntity(0));
  
  e = entityManager.createEntity({ y: 10 });
  e = entityManager.addEntity(e);
  t.deepEqual({ uid: 1, y: 10 }, e);
  t.deepEqual({ uid: 1, y: 10 }, entityManager.getEntity(1));
});