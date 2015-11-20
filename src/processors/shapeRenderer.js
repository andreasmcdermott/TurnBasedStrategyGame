var entityManagers = require('../entityManager');
var components = require('../components');

function shapeRenderer(app) {
  var entities = entityManagers.get().getByComponent(components.rect.name);
  
  for (var i = 0; i < entities.length; ++i) {    
    var entity = entities[i];
    
    var rect = entity[components.rect.name];
    var pos = entity[components.pos.name];
    
    app.layer.fillStyle(rect.color);
    app.layer.fillRect(pos.x, pos.y, rect.width, rect.height);
  }
}

module.exports = shapeRenderer;