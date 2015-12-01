var entityManagers = require('../entityManager');

var mapLoader = {
  load: function (data) {
    var entityManager = entityManagers.get();
    
    for (var i = 0; i < data.entities.length; ++i) {
      var entity = data.entities[i];
      entityManager.add(entity);
    }
  }
};

module.exports = mapLoader;