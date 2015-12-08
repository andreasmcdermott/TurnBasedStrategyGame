function createCircleComponent(color, radius) {
  return {
    color: color,
    radius: radius
  };
}

module.exports = { name: 'circle', create: createCircleComponent };