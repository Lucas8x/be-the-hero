const cryptyo = require('crypto');

module.exports = function generateUniqueId() {
  return cryptyo.randomBytes(4).toString('HEX');
}