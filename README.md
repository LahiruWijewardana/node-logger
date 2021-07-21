Kolvin Node Logger
==============

NodeJS logger similar to Java log. This provide you the time, file name, line number and the logging message. There are five types of logs.
* INFO
* DEBUG
* WARN
* ERROR
* TRACE LOG

Each log will display in separate colors to identify easy in the console log.

-------------

## Installation
    $ npm install kolvin-node-logger

## Usage
Each log type has it's own method. You need to call right method to log the message in the write way. Check the example below.
```js
    import LOGGER from 'kolvin-node-logger';

    LOGGER.info('This is a INFO log');

    LOGGER.debug('This is a DEBUG log');

    LOGGER.warn('This is a WARN log');

    LOGGER.error('This is a ERROR log');

    LOGGER.traceLog('This is a TRACE log');
```
## License
MIT

