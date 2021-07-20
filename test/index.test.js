const Path = require('path');
const CustomLog = require('../lib/index');

const LOGGER = new CustomLog.Customlog(Path.basename(__filename));

describe('Logger Test', async () => {
  it('Should print INFO log', async () => {
    LOGGER.info('This is a INFO log');
  });

  it('Should print DEBUG log', async () => {
    LOGGER.debug('This is a DEBUG log');
  });

  it('Should print ERROR log', async () => {
    LOGGER.error('This is a ERROR log');
  });

  it('Should print WARN log', async () => {
    LOGGER.warn('This is a WARN log');
  });

  it('Should print TRACE log', async () => {
    LOGGER.traceLog('This is a TRACE log');
  });
});