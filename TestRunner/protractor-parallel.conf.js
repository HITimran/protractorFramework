exports.config = {
  directConnect: true,
  specs: ['../tests/testCasesLogin.js'],
  maxSessions: 4,
  capabilities: {
    browserName: 'chrome',
    maxInstances: 4,
    shardTestFiles: true
  }
};
