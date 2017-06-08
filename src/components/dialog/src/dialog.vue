<template>
    <div class="dialog-mask" v-show="visible">
        <div class="dialog-wraper">
            <div v-if="showInput" class="dialog-input-container">
                <div class="dialog-input-header" v-if="showTitle">{{ title }}</div>
                <div class="dialog-input-body">
                    <input type="text" @input="changeBtnColor" :placeholder="inputPlaceholder" v-model="inputValue" class="dialog-input-textbox">
                    <div v-show="showInputTestError" style="color: #d80000;margin-top: 10px;">{{this.inputTestError}}</div>
                </div>
                <div class="dialog-input-btn">
                    <input class="dialog-input-btn-cancel f-c666666 dialog-b-right" type="button" @click="cancel" :value="cancelButtonText">
                    <input :class="['dialog-input-btn-confirm', {'f-cdadada': !activeBtn, 'f-cf37937': activeBtn}]" type="button" @click="confirm" :value="confirmButtonText">
                </div>
            </div>
            <div class="dialog-container" v-else>
                <div class="dialog-header" v-if="showTitle">{{ title }}</div>
                <div class="dialog-body f-c666666">
                    <div>
                        <div v-if="useText" v-html="text"></div>
                        <div v-else>{{ message }}</div>
                    </div>
                </div>
                <div class="dialog-btn" v-if="showOneBtn">
                    <input type="button" class="dialog-one-btn f-cf37937" :value="oneBtnText" @click="oneBtn">
                </div>
                <div class="dialog-btn" v-else>
                    <input class="dialog-btn-cancel f-c666666 dialog-b-right" type="button" @click="cancel" :value="cancelButtonText">
                    <input class="dialog-btn-confirm f-cf37937" type="button" @click="confirm" :value="confirmButtonText">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
	props: {
        title: {
          type: String,
          default: '温馨提示'
        },
        message: {
          type: String,
          default: ''
        },
        confirmButtonText: {
            type: String,
            default: '确定'
        },
        cancelButtonText: {
            type: String,
            default: '取消'
        },
        text: {
            type: String,
            default: ''
        },
        inputValue: {
            type: String,
            default: ''
        }
    },
	data() {
  		return {
  			visible: false,
            showOneBtn: false,
            showTitle: true,
            showInput: false,
            useText: false,
            activeBtn: false,
            showInputTestError: false
  		}
	},
	methods: {
        cancel(){
            if(this.showInput){
                this.activeBtn = false;
            }
            this.visible = false;
            this.cancelButtonCallback();
        },
        confirm() {
            if(this.showInput){
                if(this.inputValue !== ''){
                    if(!(this.inputTest.test(this.inputValue))){
                        this.showInputTestError = true;
                        return;
                    }
                    this.visible = false;
                    this.activeBtn = false;
                    this.confirmButtonCallback(this.inputValue);
                }
            }else{
                this.visible = false;
                this.confirmButtonCallback();
            }
        },
        oneBtn() {
            this.visible = false;
            this.oneBtnCallback();
        },
        changeBtnColor(){
            this.showInputTestError = false;
            if(this.inputValue !== ''){
                this.activeBtn = true;
            }else{
                this.activeBtn = false;
            }
        }
	},
}
</script>
<style lang="scss" scoped>
	.dialog-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity .3s ease;
    overflow: hidden;
}

.dialog-wraper {
    vertical-align: middle;
    display: table-cell;
}

.dialog-container,
.dialog-input-container{
    margin: 0px .8rem;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all .3s ease;
    font-family: Arial, "Microsoft YaHei";
}

.dialog-input-body{
    width: 100%;
    padding: .42rem .46rem .61rem .40rem;
}

.dialog-input-btn-cancel,
.dialog-input-btn-confirm {
    flex: 1;
    height: .9rem;
    line-height: .9rem;
    font-size: .34rem;
    border: none;
    background: none;
}

.dialog-header,
.dialog-input-header {
    line-height: .56rem;
    font-size: .36rem;
    padding-top: .23rem;
    text-align: center;
    font-weight: bolder;
    color: #1e1e1e;
}

.dialog-body {
    padding: 0.12rem 0.8rem 0.3rem 0.8rem;
    font-size: .30rem;
    line-height: .4rem;
}

.dialog-btn,
.dialog-input-btn {
    border-top: 1px solid #e7e7e7;
    display: flex;
    width: 100%;
}

.dialog-one-btn{
    height: .90rem;
    line-height: .90rem;
    font-size: .32rem;
    border: none;
    background: none;
}

.dialog-btn-cancel,
.dialog-btn-confirm {
    flex: 1;
    height: .9rem;
    line-height: .9rem;
    font-size: .34rem;
    border: none;
    background: none;
}

.f-cf37937 {
    color: #f37937
}
.f-cdadada{
   color: #dadada;
}

.dialog-b-right {
    border-right: 1px solid #e7e7e7;
    border-radius: initial; //解决safari border继承bug
}

.dialog-input-textbox {
    height: .88rem;
    display: block;
    border: 1px solid #e7e7e7;
    font-size: .30rem;
    text-indent: 1em;
}
</style>
