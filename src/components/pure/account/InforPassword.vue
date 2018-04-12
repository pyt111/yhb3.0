<template>
    <div class="clearfix">
        <div class="clearfix form-pwd">
            <Form id="formCustom" class="formCustom" ref="formCustom" :model="formCustom" :rules="rules" :label-width="100">
                <FormItem label="当前密码" prop="oldPwd">
                    <Input size="large" type="password" placeholder="6~18位数组字母组合" v-model="formCustom.oldPwd"></Input>
                </FormItem>
                <FormItem label="设置新密码" prop="newPwd">
                    <Input size="large" type="password" placeholder="6~18位数组字母组合" v-model="formCustom.newPwd"></Input>
                </FormItem>
                <FormItem label="确认新密码" prop="passwdCheck">
                    <Input size="large" type="password" placeholder="6~18位数组字母组合" v-model="formCustom.passwdCheck"></Input>
                </FormItem>
                <FormItem>
                    <Button class="next" type="primary" @click="handleSubmit('formCustom')">提交</Button>
                </FormItem>
            </Form>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        const validatePass = (rule, value, callback) => {
            let regx = /^(?![^a-zA-Z]+$)(?!\D+$).{6,18}$/;
            if (value === '') {
                callback(new Error('请输入密码'));
            } else if (!regx.test(value)) {
                callback(new Error('密码为6~18位数字字母组合'));
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
                callback(new Error('请再次输入密码'));
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
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { validator: validatePass, trigger: 'blur' }
                ],
                newPwd: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { validator: validatePass, trigger: 'blur' }
                ],
                passwdCheck: [
                    { required: true, message: '请再次输入密码', trigger: 'blur' },
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
.form-pwd{
    width: 400px;
    margin: 70px auto 90px auto;
}
.next{
    width: 100%;
    height: 36px;
}
</style>


