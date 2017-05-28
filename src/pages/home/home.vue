<template>
    <div class="home">
        <div class="home-container">
            <div class="home-logo">
                <img src="https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" width="100%">
            </div>
            <div class="home-input">
                <input type="search" autocomplete="off" name="">
            </div>
            <div class="home-tab-container">
                <router-link to="/index">首页</router-link>
                <router-link to="/getStart">新手入门</router-link>
                <router-link to="/api">API</router-link>
                <router-link to="/about">关于</router-link>
                <router-link to="/register">注册</router-link>
                <router-link to="/signin">登录</router-link>
                <!-- <div @click="toIndex">首页</div>
                <div @click="toGetStart">新手入门</div>
                <div @click="toApi">API</div>
                <div @click="toAbout">关于</div>
                <div @click="toRegister">注册</div>
                <div @click="toSignin">登录</div> -->
            </div>
        </div>
        <router-view class="home-tab"></router-view>
    </div>
</template>
<script>
// import service from '../../api/services';
export default {
    name: 'home',
    data() {
        return {
            
        }
    },
    created(){
    },
    methods: {
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import '../../assets/scss/variables';
    .home{
        padding: 0 7px;
        // background-color: $bg-dark;
    }
    .home-container{
        background-color: $bg-gray;
        padding: .16rem 0 .16rem 0;
    }
    .home-logo{
        width: 2.44rem;
        text-align: center;
        margin: 0 auto;
    }
    .home-input{
        width: 4.66rem;
        height: .56rem;
        margin: 0 auto;
        margin-top: 2px;
    }
    .home-input input{
        width: 100%;
        height: 100%;
        border-radius: .28rem;
        background: url("#{$image-path}search.png") 4px 4px no-repeat $bg-gray2;
        padding: 3px 5px 3px 22px;
    }
    .home-tab-container{
        display: flex;
        color: $c-dark;
        flex-wrap: wrap;
        padding: 0 .68rem 0 .68rem;
        a{
            color: $c-dark;
            display: block;
            height: .8rem;
            font-size: .25rem;
            line-height: .8rem;
            white-space: nowrap;
            font-weight: bolder;
        }
    }
    .home-tab-container a:nth-child(1){
        width: 1.1rem;
    }
    .home-tab-container a:nth-child(2){
        width: 1.6rem;
    }
    .home-tab-container a:nth-child(3){
        width: 1.12rem;
    }
    .home-tab-container a:nth-child(4){
        width: 1.08rem;
    }
    .home-tab-container a:nth-child(5){
        width: .8rem;
    }
    .home-tab-container a:nth-child(6){
        width: 1.1rem;
    }
    .home-tab{
        margin-top: 0.4rem;
    }
</style>
