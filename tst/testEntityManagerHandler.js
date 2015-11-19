var test = require('tape');
var entityManagerHandler = require('../src/entityManager');

var beforeAll = test;

beforeAll('reset entity manager handler', function (t) {
  t.plan(1);
  
  entityManagerHandler.reset();
  t.notOk(entityManagerHandler.get());
});

test('create without adding', function (t) {
  t.plan(1);
  
  entityManagerHandler.create();
  t.false(entityManagerHandler.get());
});

test('create with adding but not activating', function (t) {
  t.plan(4);
  
  entityManagerHandler.create('active by default');
  t.ok(entityManagerHandler.get('active by default'));
  t.equal('active by default', entityManagerHandler.get().name);
  
  entityManagerHandler.create('not active');
  t.ok(entityManagerHandler.get('not active'));
  t.notEqual('not active', entityManagerHandler.get().name);
});

test('create with adding and activating', function (t) {
  t.plan(2);
  
  entityManagerHandler.create('active', true);
  t.ok(entityManagerHandler.get('active'));
  t.equal('active', entityManagerHandler.get().name);
});

test('add and activate seperatly', function (t) {
  t.plan(3);
  
  var entityManager = entityManagerHandler.create();
  entityManagerHandler.add(entityManager, 'new active');
  t.ok(entityManagerHandler.get('new active'));
  t.notEqual('new active', entityManagerHandler.get());
  entityManagerHandler.activate('new active');
  t.equal('new active', entityManagerHandler.get().name);
});