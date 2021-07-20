const Chalk = require('chalk');

class CustomLog {
  constructor() {
    this.platform = process.platform;
  }

  info (message) {
    const fileName = this.getFileName(this.platform);
    const lineNumber = this.getLineNumber(this.platform);
  
    if (typeof message !== 'object') {
      console.log(`${new Date().toISOString()} INFO ${fileName}:${lineNumber} - ${message}`);
    } else {
      console.log(`${new Date().toISOString()} INFO ${fileName}:${lineNumber}`);
      console.log(message);
    }
  }
  
  debug (message) {
    const fileName = this.getFileName();
    const lineNumber = this.getLineNumber();
  
    if (typeof message !== 'object') {
      console.debug(Chalk.greenBright(`${new Date().toISOString()} DEBUG ${fileName}:${lineNumber} - ${message}`));
    } else {
      console.debug(Chalk.greenBright(`${new Date().toISOString()} DEBUG ${fileName}:${lineNumber}`));
      console.debug(Chalk.greenBright(message));
    }
  }
  
  error (message) {
    const fileName = this.getFileName();
    const lineNumber = this.getLineNumber();
  
    if (typeof message !== 'object') {
      console.error(Chalk.redBright(`${new Date().toISOString()} ERROR ${fileName}:${lineNumber} - ${message}`));
    } else {
      console.error(Chalk.redBright(`${new Date().toISOString()} ERROR ${fileName}:${lineNumber}`));
      console.error(Chalk.redBright(message));
    }
  }
  
  warn (message) {
    const fileName = this.getFileName();
    const lineNumber = this.getLineNumber();
  
    if (typeof message !== 'object') {
      console.warn(Chalk.yellowBright(`${new Date().toISOString()} WARN ${fileName}:${lineNumber} - ${message}`));
    } else {
      console.warn(Chalk.yellowBright(`${new Date().toISOString()} WARN ${fileName}:${lineNumber}`));
      console.warn(Chalk.yellowBright(message));
    }
  }
  
  traceLog (message) {
    const fileName = this.getFileName();
    const lineNumber = this.getLineNumber();
  
    if (typeof message !== 'object') {
      console.trace(Chalk.grey(`${new Date().toISOString()} TRACE ${fileName}:${lineNumber} - ${message}`));
    } else {
      console.trace(Chalk.bgGray(`${new Date().toISOString()} TRACE ${fileName}:${lineNumber}`));
      console.trace(Chalk.bgGray(message));
    }
  }

  getLineNumber () {
    return ((new Error().stack).split('at ')[3]).split(':')[(this.platform === 'win32' ? 2 : 1)];
  }

  getFileName () {
    const splitAt = (new Error().stack).split('at ')[3];
  
    let splitSlash;
    if (this.platform === 'win32') {
      splitSlash = splitAt.split('\\')[(splitAt.match(/\\/g) || []).length];
    } else {
      splitSlash = splitAt.split('/')[(splitAt.match(/\//g) || []).length];
    }
  
    return splitSlash.split(':')[0];
  }
}

module.exports = new CustomLog();
