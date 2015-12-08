var entityManagers = require('../entityManager');
var components = require('../components');

function shapeRenderer(app) {
  rects(app);
  circles(app);
  hexes(app);
}

function rects(app) {
  var entities = entityManagers.get().getByComponent(components.rect.name);
  
  for (var i = 0; i < entities.length; ++i) {    
    var entity = entities[i];
    
    var rect = entity[components.rect.name];
    var pos = entity[components.pos.name];
    
    app.layer.fillStyle(rect.color);
    app.layer.fillRect(pos.x, pos.y, rect.width, rect.height);
  }
}

function circles(app) {
  var entities = entityManagers.get().getByComponent(components.circle.name);
  
  for (var i = 0; i < entities.length; ++i) {    
    var entity = entities[i];
    
    var circle = entity[components.circle.name];
    var pos = entity[components.pos.name];
    
    app.layer.fillStyle(circle.color);
    app.layer.fillCircle(pos.x + circle.radius, pos.y + circle.radius, circle.radius);
  }
}

function hexes(app) {
  function getHexCorner(pos, size, i) {
    var angle_deg = 60 * i;
    var angle_rad = Math.PI / 180 * angle_deg;
    return { x: pos.x + size * Math.cos(angle_rad), y: pos.y + size * Math.sin(angle_rad) };
  }
  
  var entities = entityManagers.get().getByComponent(components.hex.name);
  for (var i = 0; i < entities.length; ++i) {    
    var entity = entities[i];
    
    var hex = entity[components.hex.name];
    var pos = entity[components.pos.name];
    
    app.layer.strokeStyle(hex.color);
    var corners = [0, 1, 2, 3, 4, 5, 0];
    for (var startCorner = 0; startCorner < corners.length - 1; ++startCorner) {
      app.layer.strokeLine(getHexCorner(pos, hex.size, corners[startCorner]), getHexCorner(pos, hex.size, corners[startCorner + 1]));
    }
  }
}

module.exports = shapeRenderer;