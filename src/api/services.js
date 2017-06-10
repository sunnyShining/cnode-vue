/**
* Created by jmxb on 2017/05/03
* 开心每一天！
**/

import urls from './urls';
import utils from '../utils/utils';

export default {
    topics (options = {}) {
        return new Promise((resolve, reject) => {
            utils.http.request({
                method: 'GET',
                url: urls.topics,
                qs: options
            }, (res) => {
                resolve(res);
            });
        });
    },
    detail (options = {}) {
        let url = `${urls.detail}${options.id}`;
        options = { mdrender: true };
        return new Promise((resolve, reject) => {
            utils.http.request({
                method: 'GET',
                url: url,
                qs: options
            }, (res) => {
                resolve(res);
            });
        });
    },
    up (options = {}) {
        let url = `${urls.up}${options.id}/up`;
        return new Promise((resolve, reject) => {
            utils.http.request({
                method: 'POST',
                url: url,
                qs: options
            }, (res) => {
                resolve(res);
            });
        });
    }
};
