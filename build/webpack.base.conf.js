const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

console.log(process.env.NODE_ENV)
let publicPath
switch(process.env.NODE_ENV){
    case 'development':
        publicPath = config.dev.assetsPublicPath
        break
    case 'production':
        publicPath = config.prd.assetsPublicPath
        break
    case 'staging':
        publicPath = config.stg.assetsPublicPath
        break
    default:
        break
}

module.exports = {
    entry: {
        app: './src/main.js'
    },
    output: {
        path: config.prd.assetsRoot,
        filename: '[name].js',
        publicPath: publicPath
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
            'flexible': path.resolve(__dirname, '../src/assets/lib/flexible.js'),//淘宝自适应框架
        }
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: vueLoaderConfig
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            include: [resolve('src'), resolve('test')]
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: utils.assetsPath('img/[name].[hash:7].[ext]')
            }
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
            }
        }]
    }
}
