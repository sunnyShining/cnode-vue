import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/home/home';
import Index from '@/pages/index/index';
import About from '@/pages/about/about';
import Api from '@/pages/api/api';
import GetStart from '@/pages/getStart/getStart';
import Register from '@/pages/register/register';
import Signin from '@/pages/signin/signin';
import Detail from '@/pages/detail/detail';

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'home',
        component: Home,
        children: [
            {
                path: '/index',
                name: 'index',
                component: Index
            }, {
                path: '/about',
                name: 'about',
                component: About
            }, {
                path: '/Api',
                name: 'api',
                component: Api
            }, {
                path: '/getStart',
                name: 'getStart',
                component: GetStart
            }, {
                path: '/register',
                name: 'register',
                component: Register
            }, {
                path: '/signin',
                name: 'signin',
                component: Signin
            }, {
                path: '/detail/:id',
                name: 'detail',
                component: Detail
            }
        ]
    }, {
        path: '/', redirect: {name: '/index'}
    }]
});
