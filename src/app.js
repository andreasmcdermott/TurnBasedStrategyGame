var config = require('./config');
var debug = require('./utils/debug');
var global = require('./global');
var input = require('./input');
var setup = require('./setup');
var logic = require('./logic');
var renderer = require('./renderer');

debug.enable();

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
  pointermove: input.pointermove,
  pointerdown: input.pointerdown,
  pointerup: input.pointerup,
  pointerwheel: input.pointerwheel
});