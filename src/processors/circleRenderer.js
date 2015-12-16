
function circles(app) {
  var entities = entityManagers.get().getByComponent(components.circle);
  
  for (var i = 0; i < entities.length; ++i) {    
    var entity = entities[i];
    
    var circle = entity[components.circle.name];
    var pos = entity[components.pos.name];
    
    app.layer.fillStyle(circle.color);
    app.layer.fillCircle(pos.x + circle.radius, pos.y + circle.radius, circle.radius);
  }
}