import Vue from 'vue';
import App from './App';
import Hello from "./components/Hello.vue"
import Secondcomponent from "./components/secondcomponent.vue"
import VueRouter from "vue-router";
import VueResource from "vue-resource";

Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.component('Hello',Hello);
Vue.component('Secondcomponent',Secondcomponent);

const routes = [
    { path: '/foo', component: Hello },
    { path: '/bar', component: Secondcomponent }
]

const router = new VueRouter({
    routes
})




/*const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/first',
            component: First
        },{
            path:'/second',
            component: Second
        }
    ]
})*/

// 注册一个全局自定义指令 v-focus
Vue.directive('focus', {
    // 当绑定元素插入到 DOM(父节点) 中。el：指令中绑定的元素
    inserted: function (el) {
        // 聚焦元素
        el.focus()
    }
})

const app = new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app')


