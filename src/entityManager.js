function createEntityManager() {
  var entities = [];
  var nextUid = 0;

  function getNextUid() {
    return nextUid++;
  }

  var entityManager = {
    create: function (entity) {
      entity = entity || {};
      entity.uid = getNextUid();
      return entity;
    },
    add: function (entity) {    
      entity = entity || {};
      if (typeof entity.uid !== 'number') {
        entity.uid = getNextUid();
      }
      entities[entity.uid] = entity;
      return entity;
    },
    getById: function (uid) {
      return entities[uid];
    },
    getByComponent: function (name) {
      var entitiesWithComponent = [];
      for (var i = 0; i < entities.length; ++i) {
        var entity = entities[i];
        if (entity[name]) {
          entitiesWithComponent.push(entity);
        }
      }
      return entitiesWithComponent;
    },
    removeAll: function () {
      nextUid = 0;
      entities = [];
    }
  }
  
  return entityManager;
}

var entityManagers = {};
var activeEntityManager = null;

export var entityManagerHandler = {
  create: function (name, activate) {
    var entityManager = createEntityManager();
    if (name) {
      this.add(entityManager, name, activate);
    }
    return entityManager;
  },
  add: function (entityManager, name, activate) {
    entityManager.name = name;
    
    entityManagers[name] = entityManager;
    if ((!activeEntityManager && activate !== false) || activate) {
      this.activate(name);
    }
  },
  get: function (name) {
    if (!name) {
      return activeEntityManager;
    } else {
      return entityManagers[name];
    }
  },
  remove: function (name) {
    var entityManager = entityManagers[name];
    entityManagers[name] = undefined;
    return entityManager;
  },
  activate: function (name) {
    activeEntityManager = entityManagers[name];
  },
  reset: function () {
    activeEntityManager = null;
    entityManagers = {};
  }
};