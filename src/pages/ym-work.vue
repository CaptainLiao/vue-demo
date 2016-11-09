<template>
    <div class="ym-work">
        <el-row>
            <el-col :span="8"><div class="grid-content bg-purple">
                <ym-sidebar :data="navsData"></ym-sidebar>
            </div></el-col>
            <el-col :span="14"><div class="grid-content bg-purple-light">
                <router-view></router-view>
            </div></el-col>
        </el-row>
    </div>
</template>

<script>
    import routeManege from "../route-config.json"
    export default {
        data(){
            return {
                navsData: routeManege
            }
        }
    }
</script>

<style lang="less">
    .ym-work {
        width: 80%;
        margin: 0 auto;
    }
</style>