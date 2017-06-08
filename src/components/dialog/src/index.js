import Vue from 'vue';
import dialogC from './dialog.vue';

//默认值
let defaults = {
    title: '温馨提示',//弹框头部
    showTitle: true,// 显示头
    message: '',//body的文字
    dialogType: 0,
    showInput: false,//是否显示输入框
    inputPlaceholder: '投资起点为:1000',//输入框未输入文字显示
    inputValue: null,//输入框默认内容
    showInputTestError: false,
    showInputValidMoney: false,
    showClose: false,
    modalFade: false,
    lockScroll: false,
    closeOnClickModal: false,
    confirmButtonText: '确定',//两个按钮确认按钮文字
    cancelButtonText: '取消',//两个按钮取消按钮文字
    showOneBtn: false, //是否显示一个按钮
    oneBtnText: '重新评测',//一个按钮文案
    useText: false,
    text: ''
};
const dialogBox = Vue.extend(dialogC);
let instance, currentMsg;
let msgQueue = [];

class Dialog {
    constructor(args) {
        this.initInstance(args)
    }
    initInstance(options) {
        let self = this;
        msgQueue.push({
            options: self.merge({}, defaults, options)
        });
        this.showNextMsg();
    }
    merge(target) {
        for (let i = 1, j = arguments.length; i < j; i++) {
            let source = arguments[i];
            for (let prop in source) {
                if (source.hasOwnProperty(prop)) {
                    let value = source[prop];
                    if (value !== undefined) {
                        target[prop] = value;
                    }
                }
            }
        }
        return target;
    }
    showNextMsg() {
        if (!instance) {
            instance = new dialogBox({
                el: document.createElement('div')
            });
        }
        if (msgQueue.length > 0) {
            //取出数组第一个元素
            currentMsg = msgQueue.shift();
            let options = currentMsg.options;
            for (let prop in options) {
                if (options.hasOwnProperty(prop)) {
                    instance[prop] = options[prop];
                }
            }
            document.body.appendChild(instance.$el);

            Vue.nextTick(() => {
                instance.visible = true;
            });
        }
    }
}

export default {
    open: (params = {}) => {
        new Dialog(params);
    }
}
