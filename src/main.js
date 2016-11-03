import Vue from 'vue';
import App from './App';
/*import Hello from "./components/Hello.vue"
import Secondcomponent from "./components/secondcomponent.vue"*/
import VueRouter from "vue-router";
import VueResource from "vue-resource";

Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);

/*Vue.component('Hello',Hello);
Vue.component('Secondcomponent',Secondcomponent);*/


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


const app = new Vue({
    /*router: router,*/
    render: h => h(App)
}).$mount('#app')


