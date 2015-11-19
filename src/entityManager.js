var entities = [];
var nextUid = 0;

function getNextUid() {
  return nextUid++;
}

var entityManager = {
  createEntity: function (entity) {
    entity = entity || {};
    entity.uid = getNextUid();
    return entity;
  },
  addEntity: function (entity) {    
    entity = entity || {};
    if (typeof entity.uid !== 'number') {
      entity.uid = getNextUid();
    }
    entities[entity.uid] = entity;
    return entity;
  },
  getEntity: function (uid) {
    return entities[uid];
  },
  getEntitiesByComponent(name) {
    return entities;
  },
  reset: function () {
    nextUid = 0;
    entities = [];
  }
}

module.exports = entityManager;