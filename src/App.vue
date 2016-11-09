<template>
    <div id="app">
        <ym-header></ym-header>
        <div class="ym-main">
            <router-view></router-view>
        </div>
        <ym-footer></ym-footer>
    </div>
</template>

<style lang="less">
    html, body {
        margin: 0;
        padding: 0;
        height: 100%;
    }

    #app {
        height: 100%;
    }

    body {
        font-family: 'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB','Microsoft YaHei',SimSun,sans-serif;
        overflow: auto;
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
    }

    a {
        color: #4078c0;
        text-decoration: none;
    }

    button, input, select, textarea {
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
        color: inherit;
    }
</style>



























<!--
<template>
    <div id="app">
        <button v-on:click="showMSG">
            Toggle
        </button>
        <transition  name="custom-animated"
                     mode="out-in"
                     enter-active-class="animated swing"
                     leave-active-class="animated zoomOutDown">
            <p v-if="show">{{msg}}</p>
        </transition>
        <hr>
        <hello></hello>

        <br>
        <input type="text" v-model="parentMsg">
        <br>
        // 第三步：使用组件
        <secondcomponent v-bind:author="parentMsg"></secondcomponent>
        <hr>

        <p>在父组件中使用v-on监听子组件的事件，使用$emit(eventname)触发事件</p>
        <p>{{total}}</p>
        <count @childcount="parentcount"></count>
        <count @childcount="parentcount"></count>
        <hr>

        <p>自定义事件表单输入：{{formMsg}}</p>
        <form-msg label="formMsg" v-model="formMsg"></form-msg>
        <hr>

        <slot-demo ref="slotDome">
            <p slot="main-text">Hello!</p>
        </slot-demo>
        <hr>

        <component v-bind:is="currentView">
            &lt;!&ndash; 组件在 vm.currentview 变化时改变！ &ndash;&gt;
        </component>
        <hr>


    </div>

</template>

<script>
    // 第一步：要把组件引入
    import Hello from "./components/Hello.vue"
    import Secondcomponent from "./components/secondcomponent.vue"
    import Count from "./components/count.vue"
    import formMsg from "./components/form.vue"
    import slotDemo from "./components/slot-demo.vue"


    export default {
        data (){
            return {
                currentView: 'Secondcomponent',
                msg: "你好我好大家好",
                parentMsg: "",
                total: "2",
                formMsg: "快来看看啊，粗事了",
                show: true
            }
        },
        // 第二步：局部注册components,只能在父模板(id为app)可用
        components: {
            Hello, Secondcomponent,Count,formMsg,slotDemo
        },
        methods: {
            parentcount: function () {
                this.total ++;
                console.log(this.$refs.slotDome);
            },
            showMSG: function () {
                this.show = !this.show
            }
        },
        computed: {

        }
    }

</script>

<style>
    #app {
        width: 80%;
        margin: 100px auto;
    }
    #app button {
        margin-bottom: 40px;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
        opacity: 0
    }
</style>


<template>
    <div id="app">
        <h1>Hello App!</h1>
        <p>
            &lt;!&ndash; use router-link component for navigation. &ndash;&gt;
            &lt;!&ndash; specify the link by passing the `to` prop. &ndash;&gt;
            &lt;!&ndash; <router-link> will be rendered as an `<a>` tag by default &ndash;&gt;
            <router-link :to="{name: 'user',params:{id: 123}}">Go to fisrt</router-link>
            <router-link to="/user/3">Go to Secondcomponent</router-link>
            <router-link to="/user/3/profile">Go to Hello</router-link>
            <router-link to="/user/3/posts">Go to 第四个</router-link>
        </p>
        &lt;!&ndash; route outlet &ndash;&gt;
        &lt;!&ndash; component matched by the route will render here &ndash;&gt;
        <transition name="custom-animated"
                    mode="out-in"
                    enter-active-class="animated swing"
                    leave-active-class="animated zoomOutDown">
            <router-view></router-view>
        </transition>
        <router-view name="a"></router-view>
    </div>
</template>

<script>

    export default {
        methods: {

        },
        computed: {
            fullname: {
                get: function () {
                    return this.firstName + ' ' + this.lastName;
                },
                set: function (newName) {
                    var names = newName.split(' ');
                    this.firstName = names[0];
                    this.lastName = names[names.length - 1];
                }
            }
        }
    }
</script>

<style lang="less">
    .router-link-active {
        color: red;
    }
    #app {
        position: relative;
        height: 800px;
        a:first-of-type {
            position: fixed;
            left:0;
            bottom: 0;
        }
        a:last-of-type {
            right: 0;
            position: fixed;

            bottom: 0;
        }
    }
</style>-->
