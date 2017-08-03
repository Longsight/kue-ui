/*jslint node: true */
const path = require('path');
const fs = require('fs');

module.exports = {
  getDistPath() {
    return path.join(__dirname, './app');
  },
  getIndexFile() {
    return fs.readFileSync(
      path.join(__dirname, './app/index.html'),
      'utf8'
    );
  }
};
