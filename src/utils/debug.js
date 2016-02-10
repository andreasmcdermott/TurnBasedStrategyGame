function log() {
  console.log.apply(console, arguments);
}

function dummy() {
  /* Nothing */
}

var active = dummy;

export default {
  disable: function () {
    active = dummy;
  },
  enable: function () {
    active = log;
  },
  log: function () {
    active.apply(this, arguments);
  }
};