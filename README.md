# cnode_vue

> 用自己改写的vue脚手架，仿cnode官网，其中./src/api/url.js里配置开发、测试、生产环境的地址前缀，以及各个页面的地址，service.js里写各种接口请求，./mockdata里配置各种mock数据，config.js里写mock数据的地址，./src里书写vue各个页面的代码。下面是仿cnode的两个页面
>##效果图
![首页](static/index.png)
![详情](static/detail.png)
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