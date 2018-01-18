import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/index',
            component: resolve => require(['../modules/index/Home.vue'], resolve),
            children:[
                {
                    path: '/articleManage',
                    component: resolve => require(['../modules/common/BaseTable.vue'], resolve)
                },
                {
                    path: '/userManage',
                    component: resolve => require(['../modules/common/VueTable.vue'], resolve)     // vue-datasource组件
                },
                {
                    path: '/userJurisdiction',
                    component: resolve => require(['../modules/common/BaseForm.vue'], resolve)
                },
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../modules/login/Login.vue'], resolve)
        },
    ]
})
