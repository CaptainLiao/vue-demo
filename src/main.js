import Vue from 'vue';
import ElementUI from 'element-ui'
import '../node_modules/element-ui/lib/theme-default/index.css'
import App from './App';

// 创建（需要路由的）组件，可以从其他文件import进来
import YMHeader from './components/ym-header.vue'
import YMSidebar from './components/ym-sidebar.vue'
import YMFooter from './components/ym-footer.vue'
import YMTable from './components/ym-table.vue'
import YMWork from './pages/ym-work.vue'




import Hello from "./components/Hello.vue"
import Secondcomponent from "./components/secondcomponent.vue"
import VueRouter from "vue-router";
import VueResource from "vue-resource";

Vue.config.debug = true;
Vue.use(ElementUI)
// 使用vue-router
Vue.use(VueRouter);
Vue.use(VueResource);


// 全局注册组件
Vue.component("ym-header",YMHeader)
Vue.component("ym-sidebar",YMSidebar)
Vue.component("ym-footer",YMFooter)
Vue.component("ym-table",YMTable)
Vue.component("ym-work",YMWork)
Vue.component('Hello',Hello);
Vue.component('Secondcomponent',Secondcomponent);

const User = {
    template: '<div><h2>Username:{{$route.params.username }}+UserId:{{$route.params.id}}</h2><router-view></router-view></div>'
}
const Baba = {
    template: '<transition enter-active-class="animated swing leave-active-class="animated zoomOutDown"><div><p>爸爸在这里啊</p></div></transition>'
}

// 创建路由

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes:[
        // 每个路由映射一个组件
        {
            path: '/user/:id',
            name: 'user',
            components: {
                default: User,
                a: Baba
            },
            children: [
                {
                    path:'profile',
                    component: Hello
                },
                {
                    path:'posts',
                    component: Secondcomponent
                }
            ]
        },
        {
            path: `/`,
            redirect: `routelist`,
            name: '首页',
            component: require('./pages/ym-work.vue'),
            children:[
                {
                    path: 'routelist',
                    name: '线路列表',
                    component: require('./components/ym-table.vue')
                },
                {
                    path: 'addroute',
                    name: '新增线路',
                    component: require('./components/ym-addroute.vue')
                }
            ]
        },
        {
            path: `/login`,
            name: '登陆',
            component: require('./pages/ym-login.vue')
        }
    ],
    scrollBehavior(to,from,savedPosition) {
        return {
            x:0,
            y:0
        }
    }
})

router.beforeEach((to, from, next) => {
    if(true || to.path == '/login'){
        next();
    }else{
        next('/login');
    }
})





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


