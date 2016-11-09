<template>
    <footer class="ym-footer">
        <div class="ym-footer-content">
            <h3>芋米UED</h3>
            <div>
                <a href="#">反馈建议</a>
                <a href="#">贡献指南</a>
            </div>
        </div>
    </footer>
</template>


<style scoped lang="less">
    .ym-footer {
        width: 100%;
        height: 200px;
        margin-top: 60px;
        background-color: #475669;
        display: table;
        padding-left: 10%;
        box-sizing: border-box;
    }
    .ym-footer-content{
        width: 80%;
        display: table-cell;
        vertical-align: middle;


        h3 {
            font-size: 18px;
            color: #F9FAFC;
        }
        div {
            display: flex;
            align-items: center;
        }
        a {
            display: inline-block;
            margin-right: 36px;
            color: #F9FAFC;
            font-size: 14px;
        }
    }
</style>