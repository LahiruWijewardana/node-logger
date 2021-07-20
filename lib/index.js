const Chalk = require('chalk');

class Customlog {
  constructor(className) {
    this.className = className;
  }

  info(message) {
    if (typeof message !== 'object') {
      console.log(`${new Date().toISOString()} INFO ${this.className}:${this.getLineNumber()} - ${message}`);
    } else {
      console.log(`${new Date().toISOString()} INFO ${this.className}:${this.getLineNumber()}`);
      console.log(message);
    }
  }

  debug(message) {
    if (typeof message !== 'object') {
      console.debug(Chalk.greenBright(`${new Date().toISOString()} DEBUG ${this.className}:${this.getLineNumber()} - ${message}`));
    } else {
      console.debug(Chalk.greenBright(`${new Date().toISOString()} DEBUG ${this.className}:${this.getLineNumber()}`));
      console.debug(Chalk.greenBright(message));
    }
  }

  error(message) {
    if (typeof message !== 'object') {
      console.error(Chalk.redBright(`${new Date().toISOString()} ERROR ${this.className}:${this.getLineNumber()} - ${message}`));
    } else {
      console.error(Chalk.redBright(`${new Date().toISOString()} ERROR ${this.className}:${this.getLineNumber()}`));
      console.error(Chalk.redBright(message));
    }
  }

  warn(message) {
    if (typeof message !== 'object') {
      console.warn(Chalk.yellowBright(`${new Date().toISOString()} WARN ${this.className}:${this.getLineNumber()} - ${message}`));
    } else {
      console.warn(Chalk.yellowBright(`${new Date().toISOString()} WARN ${this.className}:${this.getLineNumber()}`));
      console.warn(Chalk.yellowBright(message));
    }
  }

  traceLog(message) {
    if (typeof message !== 'object') {
      console.trace(Chalk.grey(`${new Date().toISOString()} TRACE ${this.className}:${this.getLineNumber()} - ${message}`));
    } else {
      console.trace(Chalk.bgGray(`${new Date().toISOString()} TRACE ${this.className}:${this.getLineNumber()}`));
      console.trace(Chalk.bgGray(message));
    }
  }

  getLineNumber() {
    const splitAt = (new Error().stack).split('at ')[3];
    const colonOccuranceCount = (splitAt.match(/:/g) || []).length;

    this.trace = splitAt.split(':')[(colonOccuranceCount > 2 ? 2 : 1)];
    return this.trace;
  }
}

exports.Customlog = Customlog;
