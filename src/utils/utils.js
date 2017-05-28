/*
* created by jmxb on 2017/05/28
* 开心每一天
* 工具类函数
*/

import axios from 'axios';
import Loading from '../components/loading/index';

//响应拦截（一般拦截登录，还有loading等）
axios.interceptors.response.use(function(response) {
    // Do something with response data
    Loading.close();
    return response;
}, function(error) {
    // Do something with response error 
    return Promise.reject(error);
});

export default {

    http: {
        request(options, cb) {
            Loading.open();
            if (!options.headers) {
                options.headers = {}
            }
            if (options.method === 'GET' || options.method === 'get') {
                axios.get(options.url, {
                    params: options.qs,
                    headers: options.headers
                }).then((res) => {
                    if (res.status == 200) {
                        cb(res.data)
                    } else {
                        // console.log(res);
                    }
                }).catch((err) => {
                    // console.log(err)
                })
            } else if (options.method === 'POST' || options.method === 'post') {
                axios.post(options.url, {
                        ...options.qs
                    },{
                        headers: options.headers
                    }
                    ).then((res) => {
                        if (res.status == 200) {
                            cb(res.data);
                        } else {
                            // console.log(res);
                        }
                    })
                    .catch((err) => {
                        // console.log(err);
                    })
            }
        }
    }
}
