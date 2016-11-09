<template>
    <div class="ym-sidebar">
        <ul>
            <li v-for="item in data">
                <p>{{item.name}}</p>
                <ul v-if="item.children">
                    <li v-for="item in item.children">
                        <router-link :to="item.path" v-text="item.name"></router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            data: Array
        },
        data() {
            return {

            }
        }
    }
</script>


<style lang="less">


</style>