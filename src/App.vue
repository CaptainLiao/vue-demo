<template>
    <div id="app">
        <p>{{msg}}</p>
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
            <!-- 组件在 vm.currentview 变化时改变！ -->
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
                formMsg: "快来看看啊，粗事了"
            }
        },
        // 第二步：局部注册components,只能在父模板(id为app)可用
        components: {
            Hello, Secondcomponent,Count,formMsg,slotDemo
        },
        methods: {
            parentcount: function () {
                this.total ++;
            }
        }
    }

</script>

<style>
    #app {
        width: 80%;
        margin: 100px auto;
    }
</style>