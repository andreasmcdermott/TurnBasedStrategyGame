function log() {
  console.log.apply(console, arguments);
}

function dummy() {
  /* Nothing */
}

var active = dummy;

var debug = {
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

module.exports = debug;