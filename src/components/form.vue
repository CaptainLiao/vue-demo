<template>
    <div class="form-group">
        <label :for="randomId">{{label}}</label>
        <input type="text" v-focus v-bind:id="randomId" v-bind:value="value" v-on:input="onInput">
    </div>
</template>

<script>
    export default {
        data(){
            return {
                randomId: "input-"+Math.random()
            }
        },
        props: ['label','value'],
        methods: {
            onInput: function (event) {
                this.$emit('input',event.target.value);
            }
        }
    }
</script>