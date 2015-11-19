var test = require('tape');
var createEntityManager = require('../src/entityManager').create;

test('create entity without object', function (t) {
  t.plan(6);
  
  var entityManager1 = createEntityManager(); 
  for (var i = 0; i < 3; ++i) {
    t.equal(entityManager1.create().uid, i);
  }
  
  var entityManager2 = createEntityManager(); 
  for (var i = 0; i < 3; ++i) {
    t.equal(entityManager2.create().uid, i);
  }
});

test('create entity with object', function (t) {
  t.plan(3);
  
  var entityManager = createEntityManager();
  var e;
  
  e = entityManager.create({});
  t.equal(0, e.uid);
  
  e = entityManager.create({ uid: 1000, other: true });
  t.deepEqual({ uid: 1, other: true }, e);
  
  e = entityManager.create({ x: 0 });
  t.deepEqual({ uid: 2, x: 0 }, e);
});

test('add new entity', function (t) {
  var entityManager = createEntityManager();
  
  t.plan(2);
  
  var e = entityManager.add();
  
  t.deepEqual({ uid: 0 }, e);
  t.deepEqual({ uid: 0 }, entityManager.getById(0));
});

test('add existing entity', function (t) {
  t.plan(4);
  
  var entityManager = createEntityManager();
  var e;
  
  e = entityManager.add({ x: true });
  t.deepEqual({ uid: 0, x: true }, e);
  t.deepEqual({ uid: 0, x: true }, entityManager.getById(0));
  
  e = entityManager.create({ y: 10 });
  e = entityManager.add(e);
  t.deepEqual({ uid: 1, y: 10 }, e);
  t.deepEqual({ uid: 1, y: 10 }, entityManager.getById(1));
});

test('get entity by component', function (t) {
  t.plan(3);
  
  var entityManager = createEntityManager();
  
  entityManager.add({
    'component1': {},
    'component2': {}
  });
  
  entityManager.add({
    'component2': {},
    'component3': {}
  });
  
  t.equal(1, entityManager.getByComponent('component1').length);
  t.equal(2, entityManager.getByComponent('component2').length);
  t.equal(1, entityManager.getByComponent('component3').length);
});