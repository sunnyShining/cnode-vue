/**
* Created by jmxb on 2017/05/03
* 开心每一天！
**/

function hostName(){
	if(ENV === 'development'){
		return {
			rmb: 'https://cnodejs.org'
		}
	}
	if(ENV === 'staging'){
		return{
			rmb: 'https://cnodejs.org'
		}
	}
	if(ENV === 'production'){
		return{
			rmb: 'https://cnodejs.org'
		}
	}
}
let host = hostName();
export default{
	//首页
	topics: host.rmb + '/api/v1/topics',
	//详情
	detail: host.rmb + '/api/v1/topic/',
	//点赞
	up: host.uprmb + '/reply/',
}