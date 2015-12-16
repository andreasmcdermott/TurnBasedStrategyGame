var entityManagers = require('../entityManager');
var components = require('../components');

function cellRenderer(app) {
  var entities = entityManagers.get().getByComponent(components.cell);
  
  for (var i = 0; i < entities.length; ++i) {    
    var entity = entities[i];
    render(app, entity.pos, entity.cell.size, entity.cell.color);
  }
  
  var highlighted = entityManagers.get().getOneByComponent(components.highlightCell);
  if (highlighted !== null) {
    renderConnections(app, highlighted);
    render(app, highlighted.pos, highlighted.cell.size, highlighted.highlightCell.color);
  }
}

function getHexCorner(pos, size, i) {
  var angle_deg = 60 * i;
  var angle_rad = Math.PI / 180 * angle_deg;
  return { x: pos.x + size * Math.cos(angle_rad), y: pos.y + size * Math.sin(angle_rad) };
}

function render(app, pos, size, color) {
  app.layer.strokeStyle(color);
  
  var corners = [0, 1, 2, 3, 4, 5, 0];
  for (var startCorner = 0; startCorner < corners.length - 1; ++startCorner) {
    app.layer.strokeLine(getHexCorner(pos, size, corners[startCorner]), getHexCorner(pos, size, corners[startCorner + 1]));
  }
}

function renderConnections(app, entity) {
  for (var i = 0; i < entity.cell.neighbors.length; ++i) {
    var neighborEntity = entity.cell.neighbors[i];
    render(app, neighborEntity.pos, neighborEntity.cell.size, '#aaaaaa');
  }
}

module.exports = cellRenderer;