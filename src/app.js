var config = require('./config');
var debug = require('./utils/debug');
var global = require('./global');
var setup = require('./setup');
var logic = require('./logic');
var renderer = require('./renderer');
global.input = require('./input');

debug.enable();

global.canvasOffset = {x: 0, y: 0};
global.app = playground({
  width: config.CANVAS_WIDTH,
  height: config.CANVAS_HEIGHT,
  scale: 1.5,
  smoothing: false,
  
  preload: setup.preload,
  create: setup.create,    
  resize: setup.resize,    
  ready: setup.ready,
  step: logic.step,
  render: renderer.render,
  pointermove: global.input.pointermove,
  pointerdown: global.input.pointerdown,
  pointerup: global.input.pointerup,
  pointerwheel: global.input.pointerwheel
});