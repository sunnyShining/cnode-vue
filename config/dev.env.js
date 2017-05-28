const merge = require('webpack-merge')
const prodEnv = require('./prd.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})
