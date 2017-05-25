var utils = require('./utils')
var config = require('../config')
var isDevelopment = process.env.NODE_ENV === 'development'

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isDevelopment
      ? false
      : true,
    extract: !isDevelopment
  })
}
