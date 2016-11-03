<div id="app">
    <h1>Hello App!</h1>
    <p>
        <router-link to="/foo">Go to Foo</router-link>
        <router-link to="/bar">Go to bar</router-link>

        <router-view></router-view>
    </p>
</div>

<script>
    const Foo = {template: '<div>foo function</div>'}
    const Bar = {template: '<div>Bar function</div>'}

    const routes = [
        {
            path: '/foo',component: Foo
        },{
            path: '/bar',component: Bar
        }
    ]

    const router =new VueRouter({
        routes: routes
    })

    const app = new Vue({
        router
    }).$mount('#app')
</script>