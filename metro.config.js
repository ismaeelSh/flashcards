const blacklist = require('metro-config/blacklist');

module.exports = {
  resolver: {
    blacklistRE: blacklist([/docs\/.*/])
  }
};
