require('./check-versions')()

const config = require('../config')
if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

const opn = require('opn')
const path = require('path')
const express = require('express')
const webpack = require('webpack')
const proxyMiddleware = require('http-proxy-middleware')
const webpackConfig = require('./webpack.dev.conf')
const port = process.env.PORT || config.dev.port
const autoOpenBrowser = !!config.dev.autoOpenBrowser
const devlopmentUrl = config.dev.devlopmentUrl
const app = express()
const mount = express()
const compiler = webpack(webpackConfig)

const devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    quiet: true
})

const hotMiddleware = require('webpack-hot-middleware')(compiler, {
        log: () => {}
    })
    // force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function(compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function(data, cb) {
        hotMiddleware.publish({ action: 'reload' })
        cb()
    })
})

//代理接口，有mock数据，不使用
// const proxyTable = config.dev.proxyTable
// Object.keys(proxyTable).forEach(function (context) {
//   const options = proxyTable[context]
//   if (typeof options === 'string') {
//     options = { target: options }
//   }
//   app.use(proxyMiddleware(options.filter || context, options))
// })

app.use(require('connect-history-api-fallback')())
app.use(devMiddleware)
app.use(hotMiddleware)

const staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

mount.use(`${devlopmentUrl}`, app)
const uri = `http://localhost:${port}${devlopmentUrl}index.html`
    // const uri = 'http://localhost:' + port

let _resolve
const readyPromise = new Promise(resolve => {
    _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
    console.log('> Listening at ' + uri + '\n')
        // when env is testing, don't need open it
    if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
        opn(uri)
    }
    _resolve()
})
//mockdata
/*************************************start*************************************************/
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.use('/', require('../mockdata/index.js'))
/*************************************end*************************************************/

const server = app.listen(port)
module.exports = {
    ready: readyPromise,
    close: () => {
        server.close()
    }
}
