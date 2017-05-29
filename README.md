# cnode_vue

## 简介

> 当我用vue init webpack cnode_vue将vue架构下下来后，发现有些地方不适合我们开发，由于我自己也在用vue做一些项目，发现有些地方不适合我们实际开发，我将它进行了一些改造，下面介绍下如何利用改写后架构开发

## 构建

``` bash
# 安装npm包
yarn

# 本地启开发服务
npm run dev

# 打生产环境的包
npm run build:prd

# 打测试环境的包
npm run build:stg

```

## 开发

**mock**

使用了express生成mock数据，只需要你在./mockdata/config.js写上你的接口名称，接口地址，
```
{'name':'topics','path':'/api/v1/topics'},
```
然后在./mockdata/api/里添加你需要数据的json文件即可，有一点注意，你每次添加完后记得重启本地开发服务

**接口请求**

封装了axios，只需要在./src/api/urls.js里添加你需要的接口路径，然后在./src/api/services.js里添加接口请求的封装，在你需要请求的地方引入即可，封装例子如下
```
topics(options = {}){
    return new Promise((resolve, reject) => {
        utils.http.request({
            method: 'GET',
            url: urls.topics,
            qs: options,
            headers: {

            }
        }, (res) => {
            resolve(res);
        })
    })
},
```

**静态文件**

静态文件放在./src/assets/下公共的scss和各页面需要的图片和公共js文件、字体等

**组件**

需要的公共组件放在./src/components，里面有loading，toast组件例子

**过滤器**

vue可以自定义过滤器，你可以放在./src/filters下

**页面**

页面放在./src/pages下，使用vue 2开发，api见
http://cn.vuejs.org/v2/api/

**路由**

使用的是vue-router 2，使用见
http://router.vuejs.org/zh-cn/index.html

**工具类函数**

工具类函数写在./src/utils/utils.js里，可定义公共函数

**状态管理**

可自己加vuex，不过我发现加上vuex体积增大不少，可自己权衡

## 效果图

![首页](static/index.png)
![详情](static/detail.png)