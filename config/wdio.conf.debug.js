const wdioConf = require('./wdio.conf.chrome.js');

exports.config = Object.assign(wdioConf.config, {
  execArgv: ['--inspect-brk=localhost:5859'],
  hostname: 'localhost',
  services: ['selenium-standalone']
});
