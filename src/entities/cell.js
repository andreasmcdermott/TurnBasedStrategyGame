import config from '../config';
import global from '../global';
import util from '../utils/util';
import Point from '../utils/point';
import Entity from './entity';

export default function Cell(q, r) {
  this.q = q;
  this.r = r;
  this.size = config.CELL_SIZE * 0.5;
  this.walkable = true;
  
  var pos = calculatePosition.call(this);
  
  Entity.call(this, pos);
}

function calculatePosition() {
  var isOddColumn = this.q % 2;
  var width = config.CELL_SIZE;
  var height = Math.sqrt(3) * 0.5 * width;
  var offsetX = width * 0.75;
  var offsetY = height;
  var oddColumnExtraOffset = height * 0.5;
  
  return new Point(this.q * offsetX, 
                   this.r * offsetY + isOddColumn * oddColumnExtraOffset);
}

Cell.prototype = util.extend({}, Entity.prototype, {
  isSame: function (cell) {
    return this.q === cell.q && this.r === cell.r;
  },
  isWithinCell: function (pos) {
    return this.pos.distanceTo(pos) < this.size;
  },
  getCorners: function () {
    var corners = [0, 60, 120, 180, 240, 300];
    var cornerPositions = [];
    for (var i = 0; i < corners.length; ++i) {
      var deg = corners[i];
      var rad = Math.PI / 180 * deg;
      cornerPositions.push(new Point(this.pos.x + this.size * Math.cos(rad), 
                                     this.pos.y + this.size * Math.sin(rad)));
    }

    return cornerPositions;
  }
});

Cell.prototype.constructor = Cell;