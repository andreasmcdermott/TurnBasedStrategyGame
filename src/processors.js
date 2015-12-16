var processors = {
  update: {
    cells: require('./processors/cellUpdater')
  },
  render: {
    cells: require('./processors/cellRenderer')
  }
};

module.exports = processors;