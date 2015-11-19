function createRectComponent(color, width, height) {
  return {
    color: color,
    width: width,
    height: height
  };
}

module.exports = { name: 'rect', create: createRectComponent };