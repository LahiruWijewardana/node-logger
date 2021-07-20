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

  error(message) {
    if (typeof message !== 'object') {
      console.error(`${new Date().toISOString()} ERROR ${this.className}:${this.getLineNumber()} - ${message}`);
    } else {
      console.error(`${new Date().toISOString()} ERROR ${this.className}:${this.getLineNumber()}`);
      console.error(message);
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
