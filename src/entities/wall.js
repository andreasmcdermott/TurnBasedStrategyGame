import util from '../utils/util';
import Cell from './cell';

export default function Wall(q, r) {
  Cell.call(this, q, r);
  this.walkable = false;
}

Wall.prototype = util.extend({}, Cell.prototype, {
  updateLinks: function (cellsByPosition) {
    if (this.walkable) {
      Cell.prototype.updateLinks.call(this, cellsByPosition);
    } else {
      this.links = [];
    }
  }
});

Wall.prototype.constructor = Wall;