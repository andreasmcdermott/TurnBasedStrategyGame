export default function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype = {
  copy: function () {
    return new Point(this.x, this.y);
  },
  set: function (x, y) {
    this.x = x;
    this.y = y;
  },
  transform: function (point) {
    this.x += point.x;
    this.y += point.y;
    return this;
  },
  distanceTo: function (point) {
    var dx = this.x - point.x;
    var dy = this.y - point.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
};