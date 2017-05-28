const utils = require('./utils')
const config = require('../config')
const isDevelopment = process.env.NODE_ENV === 'development'
let useSourceMap
switch(process.env.NODE_ENV){
	case 'development':
		useSourceMap = config.dev.cssSourceMap
		break
	case 'production':
		useSourceMap = config.prd.stagingSourceMap
		break
	case 'staging':
		useSourceMap = config.stg.stagingSourceMap
		break
	default:
		break
}
module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: useSourceMap,
    extract: !isDevelopment
  })
}
