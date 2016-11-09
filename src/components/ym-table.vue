<template>
    <div class="ym-table">
        <h1>订单列表</h1>
        <div class="ym-table-operate">
            <el-button type="primary" icon="edit" @click="addRoute"></el-button>
        </div>
        <div class="ym-table-query">
            <el-form :inline="true" :model="formInline" @submit.native.prevent="onSubmit" class="demo-form-inline">
                <el-form-item>
                    <el-input v-model="formInline.rid" placeholder="线路ID"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="formInline.name" placeholder="名称"></el-input>
                </el-form-item>
                <el-form-item>

                    <el-input v-model="formInline.des" placeholder="目的地"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-select v-model="formInline.region" placeholder="全部">
                        <el-option label="全部" value="all"></el-option>
                        <el-option label="上线" value="online"></el-option>
                        <el-option label="下线" value="offline"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button native-type="submit" type="primary">查询</el-button>
                </el-form-item>
            </el-form>
        </div>
        <el-table
                :data="tableData"
                border
                style="width: 100%">
            <el-table-column
                    type="selection"
                    width="50">
            </el-table-column>
            <el-table-column
                    prop="date"
                    label="线路ID"
                    sortable
                    width="100">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="名称"
                    width="80">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="目的地"
                    width="100">
            </el-table-column>
            <el-table-column
                    prop="date"
                    label="天"
                    width="80">
            </el-table-column>
            <el-table-column
                    prop="date"
                    label="主题"
                    width="100">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="状态"
                    width="280">
            </el-table-column>
            <el-table-column
                    inline-template
                    label="操作"

            >
                <div class="table-op-item">
                    <el-button-group>
                        <el-button type="primary" icon="edit" @click.native="updateRow(row.mat_id)"></el-button>
                    </el-button-group>
                </div>
            </el-table-column>
        </el-table>
        <div class="block table-pagination">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="5"
                    :page-sizes="[6, 12, 18, 24]"
                    :page-size="6"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="8">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                formInline: {
                    rid: '',
                    name: '',
                    des: '',
                    region: ''
                },
                paginateData: {
                    currentPage:1,
                    pageSizes:[6,12,18,100],
                    pageSize:6,
                    total:12
                },
                tableData: [{
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-08',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-06',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-07',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }],
                multipleSelection: []
            }
        },
        methods: {
            onSubmit: function () {
                console.log('submit');
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            formatter(row, column) {
                return row.date;
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            addRoute: function () {
                this.$router.push('/addroute')
            }
        }
    }
</script>

<style lang="less">
    .ym-table {

    }
    .table-pagination {
        margin-top: 20px;
        text-align: right;
    }
    .ym-table-operate {
        margin: 30px 0;

    }
    .el-form-item__content {
    span {
        color: #fff;
    }
    }

</style>





















