var merge = require('webpack-merge')
var prodEnv = require('./prd.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})
