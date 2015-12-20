var entityManagers = require('../entityManager');
var components = require('../components');
var input = require('../input');
var config = require('../config');

function mapUpdater(app, dt) {
  highlight(app, dt);
}

function highlight(app, dt) {
  var currentHighlight = entityManagers.get().getOneByComponent(components.highlightCell);
  if (currentHighlight !== null) {
    delete currentHighlight.highlightCell;
  }
  
  var inputPos = app.input.getPosition();
  if (inputPos !== null) {
    var entities = entityManagers.get().getByComponent(components.cell);
    for (var i = 0; i < entities.length; ++i) {
      var entity = entities[i];
      
      if (entity.pos.distanceTo(inputPos) < entity.cell.size && !entity.wall) {
        entity.highlightCell = components.highlightCell.create(config.HIGHLIGHT_COLOR);
        break;
      }
    }
  }
}

module.exports = mapUpdater;