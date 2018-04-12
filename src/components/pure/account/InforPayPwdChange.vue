<template>
    <div class="clearfix">
        <div class="clearfix form-payPwd">
            <Form id="formCustom" class="formCustom" ref="formCustom" :model="formCustom" :rules="rules" :label-width="120">
                <FormItem label="当前支付密码" prop="oldPwd">
                    <Input size="large" type="password" placeholder="请输入当前支付密码" v-model="formCustom.oldPwd"></Input>
                </FormItem>
                <FormItem label="设置新支付密码" prop="newPwd">
                    <Input size="large" type="password" placeholder="请输入新支付密码" v-model="formCustom.newPwd"></Input>
                </FormItem>
                <FormItem label="确认新支付密码" prop="passwdCheck">
                    <Input size="large" type="password" placeholder="请确认新支付密码" v-model="formCustom.passwdCheck"></Input>
                </FormItem>
                <FormItem>
                    <Button class="next" type="primary" @click="handleSubmit('formCustom')">提交</Button>
                </FormItem>
            </Form>
        </div>
    </div>
</template>
<script>
import {validatePayPwd, checkPayPwd } from '@/tools/regx'

export default {
    data(){
        const validatePass = (rule, value, callback) => {
            let regx = /^\d{6}$/;
            if (value === '') {
                callback(new Error('请输入支付密码'));
            } else if (!regx.test(value)) {
                callback(new Error('密码为6位数字'));
            } else {
                if (this.formCustom.passwdCheck !== '') {
                    // 对第二个密码框单独验证
                    this.$refs.formCustom.validateField('passwdCheck');
                }
                callback();
            }
        };
        const validatePassCheck = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入新支付密码'));
            } else if (value !== this.formCustom.newPwd) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        return{
            formCustom:{
                oldPwd:'',
                newPwd:'',
                pwdCheck:''
            },
            rules: {
                oldPwd: [
                    { required: true, message: '请输入当前支付密码', trigger: 'blur' },
                    { validator: validatePass, trigger: 'blur' }
                ],
                newPwd: [
                    { required: true, message: '请输入新支付密码', trigger: 'blur' },
                    { validator: validatePass, trigger: 'blur' }
                ],
                passwdCheck: [
                    { required: true, message: '请再次输入新支付密码', trigger: 'blur' },
                    { validator: validatePassCheck, trigger: 'blur' }
                ],
            }
        }
    },
    methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('提交成功!');
                    } else {
                        this.$Message.error('提交失败!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
}
</script>
<style lang="less" scoped>
.form-payPwd{
    width: 400px;
    margin: 70px auto 90px auto;
}
.next{
    width: 100%;
    height: 36px;
}
</style>

