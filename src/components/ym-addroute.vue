<template>
    <div class="ym-addroute">
        <h1>线路设计</h1>
        <div class="ym-addroute-table">
            <el-tabs type="border-card">
                <el-tab-pane label="基本信息">
                    <el-form ref="form" :model="form" label-width="80px" @submit.native.prevent="onSubmit">
                        <el-form-item label="活动名称">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="活动区域">
                            <el-select v-model="form.region" placeholder="请选择活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="活动时间">
                            <el-col :span="11">
                                <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                            </el-col>
                            <el-col class="line" :span="2">-</el-col>
                            <el-col :span="11">
                                <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="即时配送">
                            <el-switch on-text="" off-text="" v-model="form.delivery"></el-switch>
                        </el-form-item>

                        <el-form-item label="特殊资源">
                            <el-radio-group v-model="form.resource">
                                <el-radio label="线上品牌商赞助"></el-radio>
                                <el-radio label="线下场地免费"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="活动形式">
                            <el-input type="textarea" v-model="form.desc"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" native-type="submit">立即创建</el-button>
                            <el-button @click.native.prevent>取消</el-button>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="设计思路">
                    <div class="ym-addroute-sjsl">
                        <el-input
                                type="textarea"
                                :autosize="{ minRows: 2, maxRows: 4}"
                                placeholder="请输入设计思路"
                                v-model="textarea">
                        </el-input>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="家长回音"></el-tab-pane>
                <el-tab-pane label="行程特色"></el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                textarea: ``
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        }
    }
</script>

















