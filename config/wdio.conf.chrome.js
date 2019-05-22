const wdioConf = require('./wdio.conf.js');

exports.config = Object.assign(wdioConf.config, {
  capabilities: [
    {
      browserName: 'chrome'
    }
  ]
});
