<template>
    <div class="clearfix">
       <div class="clearfix form-pwd">
           <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="120">
                <FormItem label="设置新支付密码" prop="passwd">
                    <Input type="password" placeholder="请输入当前支付密码" v-model="formCustom.passwd"></Input>
                </FormItem>
                <FormItem label="确认新支付密码" prop="passwdCheck">
                    <Input type="password" placeholder="请确认新支付密码" v-model="formCustom.passwdCheck"></Input>
                </FormItem>
                <FormItem>
                    <Button class="next" type="primary" @click="handleSubmit('formCustom')">保存密码</Button>
                </FormItem>
            </Form> 
       </div>
    </div>
</template>
<script>
export default {
        data () {
            const validatePass = (rule, value, callback) => {
                let regx = /^\d{6}$/;
                if (value === '') {
                    callback(new Error('请输入设置的新密码!'));
                }else if (!regx.test(value)) {
                    callback(new Error('密码为6位数字!'));
                }else {
                    if (this.formCustom.passwdCheck !== '') {
                        // 对第二个密码框单独验证
                        this.$refs.formCustom.validateField('passwdCheck');
                    }
                    callback();
                }
            };
            const validatePassCheck = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入新支付密码!'));
                } else if (value !== this.formCustom.passwd) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                formCustom: {
                    passwd: '',
                    passwdCheck: '',
                },
                ruleCustom: {
                    passwd: [
                        { required: true, message: '请设置新支付密码', trigger: 'blur' },
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    passwdCheck: [
                        { required: true, message: '请确认新支付密码', trigger: 'blur' },
                        { validator: validatePassCheck, trigger: 'blur' }
                    ],
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
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
.form-pwd{
    width: 400px;
    margin: 70px auto 90px auto;
}
.next{
    width: 100%;
    height: 36px;
}
</style>


