import Vue from 'vue';
import Toast from  './toast';
let ToastC = Vue.extend(Toast);
let instance
export default {
	info (text = ' ') {
		if(!instance){
			instance = new ToastC({
				el: document.createElement('div')
			});
			instance.text = text;
			document.body.appendChild(instance.$el);
			Vue.nextTick(() => {
				instance.visible = true;
			});
		}
		instance.visible = true;
		setTimeout(() => {
			this._close()
		}, 2000);
	},
	_close () {
		instance.visible = false;
	}
}
