var entityManagers = require('./entityManager');
var components = require('./components');

var mapLoader = {
  load: function (data) {
    var entityManager = entityManagers.get();
    for (var i = 0; i < data.entities.length; ++i) {
      entityManager.add(data.entities[i]);
    }
  }  
};

module.exports = mapLoader;