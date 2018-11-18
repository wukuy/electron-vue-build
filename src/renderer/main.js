import Vue from 'vue';
import VueRouter from 'vue-router';
import home from './view/home/view.vue';

Vue.use(VueRouter);
let router = new VueRouter({
    routes: [{
        path: '/',
        component: home
    }]
});


new Vue({
    template: `
        <router-view></router-view>
    `,
    router
}).$mount('#app');