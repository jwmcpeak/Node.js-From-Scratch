const util = require('util');

const notFoundLog = util.debuglog('not-found');
const errorLog = util.debuglog('error-log');

notFoundLog('the page cannot be found');

errorLog('error occurred');
