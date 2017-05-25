//封装接口

import urls from './urls';
import myUtils from '../utils/myUtils';

export default {
	topics(options = {}){
		return new Promise((resolve, reject) => {
			myUtils.http.request({
				method: 'GET',
				url: urls.topics,
				qs: options
			}, (res) => {
				resolve(res);
			})
		})
	},
	detail(options = {}){
		let url = `${urls.detail}${options.id}`;
		options = { mdrender: true };
		return new Promise((resolve, reject) => {
			myUtils.http.request({
				method: 'GET',
				url: url,
				qs: options
			}, (res) => {
				resolve(res);
			})
		})
	},
	up(options = {}){
		let url = `${urls.up}${options.id}/up`;
		return new Promise((resolve, reject) => {
			myUtils.http.request({
				method: 'POST',
				url: url,
				qs: options
			}, (res) => {
				resolve(res);
			})
		})
	},
}