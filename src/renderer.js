import global from './global';

export default {
  render () {
    global.app.layer.clear('#000000');
    global.map.render();
  }
};