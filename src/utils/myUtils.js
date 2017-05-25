//工具类函数
import Vue from 'vue';
import axios from 'axios';

//拦截
axios.interceptors.response.use(function(response) {
    // Do something with response data
    return response;
}, function(error) {
    // Do something with response error 
    return Promise.reject(error);
});

export default {

    http: {
        request(options, cb) {
            if (!options.headers) {
                options.headers = {}
            }
            if (options.method === 'GET' || options.method === 'get') {
                axios.get(options.url, {
                    params: options.qs
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
                    }).then((res) => {
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
