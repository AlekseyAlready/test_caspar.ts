
const wdioConf = require('./wdio.conf.js');

exports.config = Object.assign(wdioConf.config, {
  hostname: 'localhost',
  //port: 4444,
  services: ['selenium-standalone'],
  specs: ['./specs/caspar/test.spec.ts'],
  capabilities: [
    {
      browserName: 'chrome',
      'google:chromeOptions': {
        args: ['--no-sandbox']
      },
      // browserVersion: '73.0',
      // enableVideo: true,
      // enableVNC: true,
    }
  ],
});
