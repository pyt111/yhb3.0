<template>
    <div>
        <Form id="form-one" class="step-form-one" ref="FormOne" :model="FormOne" :rules="rules" :label-width="80">
            <Form-item label="手机号码" prop="account">
                <Input class="form-item" type="text" placeholder="请输入手机号码" v-model="FormOne.account"></Input>
            </Form-item>
            <Form-item class="rela-plant" label="手机验证码" prop="phoneCode">
                <Input type="text" placeholder="请输入手机验证码" v-model="FormOne.phoneCode"></Input>
                <span class="send-code" @click="sendCode">{{"发送验证码"}}</span>
            </Form-item>
            <Form-item>
                <Button class="next" type="primary" @click="handleSubmit('FormOne')">下一步</Button>
            </Form-item>
        </Form>
    </div>
</template>
<script>
import { validatePhone, checkPhone } from '@/tools/regx'
export default {
    data() {
        return {
            FormOne: {
                account: '',
                phoneCode: ''
            },
            rules: {
                account: [
                    { required: true, message: '请填写手机号码', trigger: 'blur' },
                    { validator: validatePhone, trigger: 'blur' }
                ],
                phoneCode: [
                    { required: true, message: '请填写手机验证码', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        sendCode() {

        },
        handleSubmit(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$Message.success('提交成功!');
                    this.$emit('next',1)
                } else {
                    // this.$Message.error('表单验证失败!');
                }
            })
        }
    }
}
</script>

<style type="text/css">
.step-form-one .ivu-form-item .ivu-form-item-content {
    margin-left: 100px !important;
}

.step-form-one .ivu-form-item .ivu-form-item-label {
    font-size: 14px;
    width: 100px !important;
    padding: 15px 12px 15px 0;
}

.step-form-one input {
    height: 44px;
    font-size: 14px;
}
</style>

<style scoped="scoped" lang="less">
#form-one {
    width: 400px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
}

.rela-plant {
    position: relative;
}

.send-code {
    font-size: 14px;
    position: absolute;
    right: 10px;
    top: 1px;
    height: 42px;
    line-height: 42px;
    cursor: pointer;
    color: #ccc;
    border-left: 1px solid #ccc;
    padding-left: 10px;
}

.next {
    width: 100%;
    height: 44px;
    font-size: 14px;
}
</style>


