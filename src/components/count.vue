<template>
    <button @click="childcount">{{value}}</button>
</template>

<script>
    export default {
        data(){
            return {
                value: "1"
            }
        },
        methods: {
            childcount: function () {
                this.value ++;
                this.$emit("childcount");   //$emit(eventname)触发事件
            }
        }
    }
</script>

<style>
    button {
        display: block;
        width: 48px;
        height: 28px;
        color: #fff;
        background-color: #2e2e2e;
        outline: none;
    }
</style>