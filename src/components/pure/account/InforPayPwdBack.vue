<template>
    <div class="clearfix">
        <div class="clearfix amend">
            <div class="step clearfix">
                <div class="step-top">
                    <Steps :current="step">
                        <Step title="第一步" content="验证手机号码"></Step>
                        <Step title="第二步" content="重置支付密码"></Step>
                        <Step title="第三步" content="重置支付密码成功"></Step>
                    </Steps>
                </div>
                <div v-if="step === 0" class="step-first">
                    <Form id="form-one" ref="FormOne" :model="FormOne" :rules="ruleValidate" :label-width="100">
                        <FormItem label="手机号码" prop="phone">
                            <Input size="large" type="text" v-model="FormOne.phone" placeholder="请输入已绑定手机号码"></Input>
                        </FormItem>
                        <FormItem class="rela-plant" label="手机验证码" prop="phoneCode">
                            <Input size="large" type="text" v-model="FormOne.phoneCode" placeholder="请输入手机验证码"></Input>
                            <span class="send-code" @click="sendCodeOld">{{text}}</span>
                        </FormItem>
                        <FormItem label="身份证号码" prop="idCard">
                            <Input size="large" type="text" v-model="FormOne.idCard" placeholder="请输入身份证号码"></Input>
                        </FormItem>
                        <FormItem>
                            <Button class="next" type="primary" @click="handleSubmit('FormOne')">下一步</Button>
                        </FormItem>
                    </Form>
                </div>
                <div v-if="step === 1" class="step-second">
                    <Form id="form-two" ref="FormTwo" :model="FormTwo" :rules="rules" :label-width="120">
                        <FormItem label="设置新支付密码" prop="newPwd">
                            <Input size="large" type="password" placeholder="请输入新支付密码" v-model="FormTwo.newPwd"></Input>
                        </FormItem>
                        <FormItem label="确认新支付密码" prop="passwdCheck">
                            <Input size="large" type="password" placeholder="请确认新支付密码" v-model="FormTwo.passwdCheck"></Input>
                        </FormItem>
                        <FormItem>
                            <Button class="next" type="primary" @click="handleSubmit('FormTwo')">保存密码</Button>
                        </FormItem>
                    </Form>
                </div>
                <div v-if="step === 2" class="step-third">
                    <Icon class="result" size="60" type="checkmark-circled"></Icon>
					<span class="result-msg">支付密码修改成功</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { validatePhone,validateIdcard} from '@/tools/regx'
export default {
    data(){
        const validatePass = (rule, value, callback) => {
            let regx = /^\d{6}$/;
            if (value === '') {
                callback(new Error('请输入支付密码'));
            } else if (!regx.test(value)) {
                callback(new Error('密码为6位数字'));
            } else {
                if (this.FormTwo.passwdCheck !== '') {
                    // 对第二个密码框单独验证
                    this.$refs.FormTwo.validateField('passwdCheck');
                }
                callback();
            }
        };
        const validatePassCheck = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入新支付密码'));
            } else if (value !== this.FormTwo.newPwd) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        return{
            step:0,
            text:'send Code',
            FormOne:{
                phone:'',
                phoneCode:'',
                idCard:''
            },
            FormTwo:{
                newPwd:'',
                passwdCheck:''
            },
            ruleValidate: {
                phone: [
                    { required: true, message: '请填写手机号码', trigger: 'blur' },
                    { validator: validatePhone, trigger: 'blur' }
                ],
                phoneCode: [
                    { required: true, message: '请填写手机验证码', trigger: 'blur' },
                ],
                idCard:[
                    { required: true, message: '请填写身份证号码', trigger: 'blur' },
                    { validator: validateIdcard, trigger: 'blur' }                        
                ]
            },
            rules: {
                newPwd: [
                    { required: true, message: '请输入新支付密码', trigger: 'blur' },
                    { validator: validatePass, trigger: 'blur' }
                ],
                passwdCheck: [
                    { required: true, message: '请确认新支付密码', trigger: 'blur' },
                    { validator: validatePassCheck, trigger: 'blur' }
                ],
            }
        }
    },
    methods:{
        handleSubmit(obj){
            this.$refs[obj].validate((valid) => {
                if (valid) {
                    this.$Message.success('提交成功!');
                    this.step++
                } else {
                    // this.$Message.error('表单验证失败!');
                }
            })          
        },
        sendCodeOld(){
            if (checkPhone(this.oneForm.account)) {
        		/*this.$emit('sendCode',{account:this.oneForm.account})*/
        		console.log(this.oneForm.account)
        	} else {
        		this.$refs.oneForm.validateField('account');
        	}
        },
        sendCodeNew(){
            if (checkPhone(this.oneForm.account)) {
        		/*this.$emit('sendCode',{account:this.oneForm.account})*/
        		console.log(this.oneForm.account)
        	} else {
        		this.$refs.oneForm.validateField('account');
        	}
        }
    },
}
</script>
<style lang="less" scoped>
.amend{
    margin: 70px 0 90px 0;
}
.step{
    width: 600px;
    margin: 0 auto;
}
.step-first,.step-second,.step-third{
    width: 400px;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
}
.rela-plant{
    position: relative;
}
.send-code{
    position: absolute;
    right: 10px;
    top: 1px;
    height: 34px;
    line-height: 34px;
    font-size: 14px;
    padding-left: 10px;
    cursor: pointer;
    color: #ccc;
    border-left: 1px solid #ccc;
}
.next{
    width: 100%;
    height: 36px;
    letter-spacing: 3px;
}
.result{
    display: block;
    width: 80%;
    margin: 100px auto 0;
    color: #ff7542;
    text-align: center;
}
.result-msg{
    display: block;
    font-size: 14px;
    text-align: center;
    margin-top: 10px;
}
.step-top{
    width: 100%;
    margin-left: auto;
}
</style>


