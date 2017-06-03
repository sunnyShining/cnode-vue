/*
* created by jmxb on 2017/05/28
* 开心每一天
* 工具类函数
*/

const path = require('path')

module.exports = {
    prd: {
        env: require('./prd.env'),
        index: path.resolve(__dirname, '../dist/prd/cnode_vue/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist/prd/cnode_vue'),
        zipName: 'cnode_vue',
        folderName: 'cnode_vue',
        assetsSubDirectory: 'static',
        assetsPublicPath: '/cnode/',
        productionSourceMap: false,
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        bundleAnalyzerReport: false//打包的报告，默认为false
    },
    stg: {
        env: require('./stg.env'),//环境
        index: path.resolve(__dirname, '../dist/stg/cnode_vue/index.html'),//打包html地址
        assetsRoot: path.resolve(__dirname, '../dist/stg/cnode_vue'),//打包地址
        zipName: 'cnode_vue',//zip包的名称
        folderName: 'cnode_vue',//打包文件夹名称 index和assetsRoot要同步更改
        assetsSubDirectory: 'static',//js、css等文件打包放到哪个文件下
        assetsPublicPath: '/',//打包时注入html路径（根据你上传地址修改）
        stagingSourceMap: false,//是否使用SourceMap（默认不使用）
        stagingGzip: false,//是否使用gzip
        stagingGzipExtensions: ['js', 'css'],//使用gzip的后缀文件
        bundleAnalyzerReport: false//打包分析报告
    },
    dev: {
        env: require('./dev.env'),//环境
        port: 9997,//开发环境下默认端口号
        autoOpenBrowser: true,//开发环境是否打开浏览器（默认打开吧）
        assetsSubDirectory: 'static',//开发环境下打包js和css等文件放在那个文件下
        assetsPublicPath: '/',
        devlopmentUrl: '/',//开发环境地址，根据自己取舍
        // proxyTable: {},//代理接口（有mock数据，不使用）
        cssSourceMap: false//cssSourceMap，不使用
    }
}
