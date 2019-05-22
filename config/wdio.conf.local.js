const wdioConf = require('./wdio.conf.js');

exports.config = Object.assign(wdioConf.config, {
  hostname: 'localhost',
  services: ['selenium-standalone'],
  capabilities: [
    {
      browserName: 'chrome',
      'goog:chromeOptions': {
        args: ['--no-sandbox']
      }
    }
  ],
  mochaOpts: {
    ui: 'bdd',
    require: ['tsconfig-paths/register'],
    timeout: 600000,
    retries: 0
  }
});
