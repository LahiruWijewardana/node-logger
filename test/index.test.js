const Path = require('path');
const CustomLog = require('../lib/index');

const LOGGER = new CustomLog.Customlog(Path.basename(__filename));

describe('Logger Test', async () => {
  it('Should print INFO log', async () => {
    LOGGER.info('This is a INFO log');
  });

  it('Should print INFO log', async () => {
    LOGGER.error('This is a ERROR log');
  });
});