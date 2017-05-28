import Vue from 'vue';
import Loading from './loading';
let LoadingC = Vue.extend(Loading);
let instance;
export default{

	open(options = {}){
		if (!instance) {
    		this.initInstance(options)
  		}
  		instance.visible = true;
	},
	initInstance(options){
		instance = new LoadingC({
			el: document.createElement('div')
		});
		instance.text = options.text || '加载中';
      	for (var prop in options) {
	        if (options.hasOwnProperty(prop)) {
				instance[prop] = options[prop];
	        }
      	}
		document.body.appendChild(instance.$el);
		Vue.nextTick(() => {
			instance.visible = true;
		});
	},
	close(){
		instance.visible = false;
	}
}