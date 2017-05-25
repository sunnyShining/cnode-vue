require('./check-versions')()
const NODE_ENV = process.argv[2] || 'production'
process.env.NODE_ENV = NODE_ENV

const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./webpack.build.conf')

const spinner = ora(`building for ${NODE_ENV}...`)

const assetsRoot = NODE_ENV === 'production' ? config.prd.assetsRoot : config.stg.assetsRoot
const assetsSubDirectory = NODE_ENV === 'production' ? config.prd.assetsSubDirectory : config.stg.assetsSubDirectory
spinner.start()

rm(path.join(assetsRoot, assetsSubDirectory), err => {
    if (err) throw err
    webpack(webpackConfig, function(err, stats) {
        spinner.stop()
        if (err) throw err
        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n\n')

        console.log(chalk.cyan('  Build complete.\n'))
        console.log(chalk.yellow(
            '  Tip: built files are meant to be served over an HTTP server.\n' +
            '  Opening index.html over file:// won\'t work.\n'
        ))
    })
})
