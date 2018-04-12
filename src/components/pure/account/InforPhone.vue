<template>
    <div class="clearfix">
        <div class="amend clearfix">
            <div class="step clearfix">
                <div class="step-top">
                    <Steps :current="step">
                        <Step title="步骤1" content="验证旧的手机号码"></Step>
                        <Step title="步骤2" content="验证新的手机号码"></Step>
                        <Step title="步骤3" content="重置手机号码成功"></Step>
                    </Steps>
                </div>
                <div v-if="step === 0" class="step-first">
                    <Form id="form-one" ref="FormOne" :model="FormOne" :rules="ruleValidate" :label-width="100">
                        <FormItem label="旧手机号码" prop="name">
                            <Input size="large" type="text" v-model="FormOne.name" placeholder="请输入已绑定手机号码"></Input>
                        </FormItem>
                        <FormItem class="rela-plant" label="手机验证码" prop="phoneCode">
                            <Input size="large" type="text" v-model="FormOne.phoneCode" placeholder="请输入手机验证码"></Input>
                            <span class="send-code" @click="sendCodeOld">{{text}}</span>
                        </FormItem>
                        <FormItem>
                            <Button class="next" type="primary" @click="handleSubmit('FormOne')">下一步</Button>
                        </FormItem>
                    </Form>
                </div>
                <div v-if="step === 1" class="step-second">
                    <Form id="form-two" ref="FormTwo" :model="FormTwo" :rules="ruleValidate" :label-width="100">
                        <FormItem label="新手机号码" prop="name">
                            <Input size="large" type="text" v-model="FormTwo.name" placeholder="请输入已绑定手机号码"></Input>
                        </FormItem>
                        <FormItem class="rela-plant" label="手机验证码" prop="phoneCode">
                            <Input size="large" type="text" v-model="FormTwo.phoneCode" placeholder="请输入手机验证码"></Input>
                            <span class="send-code" @click="sendCodeNew">{{text}}</span>
                        </FormItem>
                        <FormItem>
                            <Button class="next" type="primary" @click="handleSubmit('FormTwo')">下一步</Button>
                        </FormItem>
                    </Form>
                </div>
                <div v-if="step === 2" class="step-third">
                    <Icon class="result" size="60" type="checkmark-circled"></Icon>
					<span class="result-msg">手机绑定修改成功</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { validatePhone, checkPhone } from '@/tools/regx'
export default {
    data(){
        return{
            step:0,
            text:'发送验证码',
            FormOne:{
                name:'',
                phoneCode:''
            },
            FormTwo:{
                name:'',
                phoneCode:''
            },
            ruleValidate: {
                    name: [
                        { required: true, message: '请填写手机号码', trigger: 'blur' },
                        { validator: validatePhone, trigger: 'blur' }
                    ],
                    phoneCode: [
                        { required: true, message: '请填写手机验证码', trigger: 'blur' },
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


