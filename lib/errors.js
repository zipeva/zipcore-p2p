'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on zipcore-p2p Module {0}'
};

module.exports = require('@zipeva/zipcore-lib').errors.extend(spec);
