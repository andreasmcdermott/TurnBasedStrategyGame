var entityManagers = require('../entityManager');
var rectComponent = require('../components/rectComponent.js');
var posComponent = require('../components/posComponent.js');

function renderer(app) {
  var entities = entityManagers.get().getByComponent(rectComponent.name);
  
  for (var i = 0; i < entities.length; ++i) {    
    var entity = entities[i];
    
    var rect = entity[rectComponent.name];
    var pos = entity[posComponent.name];
    
    app.layer.fillStyle(rect.color);
    app.layer.fillRect(pos.x, pos.y, rect.width, rect.height);
  }
}

module.exports = renderer;