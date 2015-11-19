function createRectComponent(color, width, height) {
  return {
    color: color,
    width: width,
    height: height
  };
}

export var rectComponent = { name: 'rect', create: createRectComponent };