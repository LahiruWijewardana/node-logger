Kolvin Node Logger
==============

NodeJS logger similar to Java log. This provide you the time, file name, line number and the logging message. There are five types of logs.
* INFO
* DEBUG
* WARN
* ERROR
* TRACE LOG

Each log will display in separate colors to identify easily in the console log.

```js
    Example INFO log

    2021-07-21T06:41:12.898Z INFO index.js:31 - This is a INFO log
```

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

