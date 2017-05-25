/**
* Created by jmxb on 2017/05/03
* 开心每一天！
**/

//mock数据模拟

const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const config = require('./config.js')();
let routers = [];

const errjson = {"responseCode":"901001","responseMsg":"服务器出错了"};

let configRouter = (filename, method, fullpath, readpath) => {
    router.all(fullpath,function(req,res){
        let file = fs.readFile(readpath,'utf8',function(err,data){
            if(err) {
                res.status(500).json(errjson)
            }
            obj = JSON.parse(data);
            res.status(200).json(obj)
        });
    });
}

for(let i=0;i<config.length;i++){
    let obj;
    let filename = config[i]['name'];
    let method = config[i]['method'] || 'get';
    let fullpath = config[i]['path'];
    let readpath = path.join(__dirname,'./api/'+filename+'.json');
    configRouter(filename, method, fullpath, readpath)
}


module.exports = router;
