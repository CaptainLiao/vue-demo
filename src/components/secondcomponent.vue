<template>
    <div id="secondcomponent">
        <h1>I am another page</h1>
        <a @click="showType()"> written by <span>{{author}}</span></a>
        <p> 感谢 vue.js</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {

                articles: []
            }
        },
        props: ['author'],
        methods: {
            showType: function () {
                let id = document.getElementById("secondcomponent");
                let text = id.getElementsByTagName("span")[0].innerText;
                alert(typeof text);
            }
        }
    }
</script>

<style>
    h1 {
        font-size: 2rem;
        color: #555;
    }
</style>
