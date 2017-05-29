import Vue from 'vue';
import Dialog from './dialog';
let DialogC = Vue.extend(Dialog),
	currentMsg, instance,
	msgQueue = {},
	defaults = {
		title: '温馨提示',
		message: '网络错误，稍后重试！',
		showText: false,
		text: '',//如果你要自定义body里的html内容，可用（不能是用户输入的，避免xss攻击）
		confirmButtonText: '确定',
		cancelButtonText: '取消',
		confirmCallback: function(){},
		cancelCallback: function(){}
	}

class dialogBox {
	constructor(args){
		if(!instance){//避免多次执行
			this.initInstance(args);
		}
	}
	initInstance(args){
		instance = new DialogC({
			el: document.createElement('div')
		})
		msgQueue = Object.assign({}, defaults, args)
		for(let prop of Object.keys(msgQueue)){
			instance[prop] = msgQueue[prop]
		}
		instance.visible = true;
		document.body.appendChild(instance.$el);
		Vue.nextTick(() => {
			instance.visible = true;
		});
	}
}

export default {
	open(props = {}){
		new dialogBox(props)
	}
}