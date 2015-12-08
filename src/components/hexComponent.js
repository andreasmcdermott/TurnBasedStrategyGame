function createHexComponent(color, size) {
  return { color: color, size: size };
}

module.exports = { name: 'hex', create: createHexComponent };