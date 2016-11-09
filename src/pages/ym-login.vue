<style lang="less">
    .ym-login {
        width: 25%;
        margin: 180px auto 240px;
    }
</style>

<template>
    <div class="ym-login">
        <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="account">
                <el-input v-model="ruleForm2.account"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click.native.prevent="handleSubmit2">提交</el-button>
                <el-button @click.native.prevent="handleReset2">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        data() {
            var checkAge = (rule, value, callback) => {
                var mobileCheck = /^1[34578]\d{9}$/;
                setTimeout(() => {
                    if (value === '') {
                        callback(new Error('请输入用户名'));
                    } else{
                        if (!mobileCheck.test(value)) {
                            callback(new Error('请填写正确的手机号码'));
                        } else {
                            callback();
                        }
                    }
                }, 1000);
            };
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm2.checkPass !== '') {
                        this.$refs.ruleForm2.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm2.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                ruleForm2: {
                    pass: '',
                    checkPass: '',
                    account: ''
                },
                rules2: {
                    pass: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { validator: validatePass }
                    ],
                    checkPass: [
                        { required: true, message: '请再次输入密码', trigger: 'blur' },
                        { validator: validatePass2 }
                    ],
                    account: [
                        { required: true, message: '请输入账号', trigger: 'blur' },
                        { validator: checkAge, trigger: 'change' }
                    ]
                }
            };
        },
        methods: {
            handleReset2() {
                this.$refs.ruleForm2.resetFields();
            },
            handleSubmit2(ev) {
                var vm = this;
                this.$refs.ruleForm2.validate((valid) => {
                    if (valid) {
                        console.log("登录成功")
                        vm.$router.push('/')
                    } else {
                        alert(`登陆失败`);
                        return false;
                    }
                });
            }
        }
    }
</script>








r





