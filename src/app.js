import config from './config';
import debug from './utils/debug';
import global from './global';
import setup from './setup';
import logic from './logic';
import renderer from './renderer';
import input from './input';
global.input = input;

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