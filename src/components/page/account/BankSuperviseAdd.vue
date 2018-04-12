<template>
    <div class="clearfix">
      <h4 class="title">添加银行卡</h4>
      <Form class="my-form" ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="120">
            <FormItem label="真实姓名" prop="name">
                <Input size="large" v-model="formValidate.name" placeholder="请填写您的真实姓名"></Input>
            </FormItem>
            <FormItem label="身份证号" prop="idCard">
                <Input size="large" v-model="formValidate.idCard" placeholder="请填写您的身份证号" :maxlength="18"></Input>
            </FormItem>
            <FormItem label="选择银行" prop="bank">
                <Select size="large" v-model="formValidate.bank" placeholder="请选择银行">
                    <Option value="zgyh">中国银行</Option>
                    <Option value="zggsyh">中国工商银行</Option>
                    <Option value="zgnyyh">中国农业银行</Option>
                    <Option value="zgjtyh">中国交通银行</Option>                    
                    <Option value="zgyzcxyh">中国邮政储蓄银行</Option>                    
                </Select>
            </FormItem>
            <FormItem label="开户所在地" prop="area" class="area">
                <Input size="large" v-model="formValidate.area" placeholder="例如：XX省XX市"></Input>                
            </FormItem>
            <FormItem label="开户支行" prop="branch">
                <Input size="large" v-model="formValidate.branch" placeholder="请输入开户支行"></Input>                
            </FormItem>
            <FormItem label="开户分行" prop="subbranch">
                <Input size="large" v-model="formValidate.subbranch" placeholder="请输入开户分行"></Input>                
            </FormItem>
            <FormItem label="银行卡号" prop="card">
                <Input size="large" v-model="formValidate.card" placeholder="请输入银行卡号" :maxlength="19"></Input>                
            </FormItem>
            <FormItem label="预留手机号" prop="phone">
                <Input size="large" v-model="formValidate.phone" placeholder="请输入银行预留手机号" :maxlength="11"></Input>                
            </FormItem>
            <FormItem label="验证码" prop="phoneCode" class="plant">
                <Input size="large" v-model="formValidate.phoneCode" placeholder="请输入验证码"></Input>                
                <span class="send-code">发送验证码</span>
            </FormItem>
            <FormItem>
                <Button class="submit" type="primary" @click="handleSubmit('formValidate')">提交</Button>
                <Button class="reset" type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
            </FormItem>
        </Form>  
    </div>
</template>
<script>
import {validateBankcard,validateIdcard,validatePhone} from '@/tools/regx' 
export default {
        data () {
            return {
                formValidate: {
                    name: '',
                    idCard: '',
                    bank:'',
                    area: '',
                    branch:'',
                    subbranch:'',
                    card:'',
                    phone:'',
                    phoneCode:''
                },
                ruleValidate: {
                    name: [
                        { required: true, message: '姓名不能为空', trigger: 'blur' }
                    ],
                    idCard:[
                        { required: true, message: '身份证号不能为空', trigger: 'blur' },                        
                        { validator: validateIdcard, trigger : 'blur' }                        
                    ],
                    bank:[
                        { required: true, message: '请选择银行', trigger: 'change' }                        
                    ],
                    area: [
                        { required: true, message: '请注意填写格式', trigger: 'blur' }
                    ],
                    branch:[
                        { required: true, message: '开户支行不能为空', trigger: 'blur' }                        
                    ],
                    subbranch:[
                        { required: true, message: '开户分行不能为空', trigger: 'blur' }                        
                    ],
                    card:[
                        { required: true, message: '银行卡号不能为空', trigger: 'blur' },                        
                        { validator: validateBankcard, trigger: 'blur' }
                    ],
                    phone:[
                        { required: true, message: '手机号码不能为空', trigger: 'blur' },                                                
                        { validator: validatePhone, trigger: 'blur'}
                    ],
                    phoneCode:[
                        { required: true, message: '验证码不能为空', trigger: 'blur' },
                    ]
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
        },
        mounted(){
            let bread = [
                {
                    name:'余惠宝',
                    url:'/'
                },
                {
                    name:'我的账户',
                    url:'/account'
                },
                {
                    name:'银行卡管理',
                    url:'/account/banksupervise'
                },
                {
                    name:'添加银行卡',
                    url:''
                }
            ];
            this.$store.dispatch('accountBreadChange',bread);
        }
    }
</script>
<style type="text/css">
	.add-bankcard-pro-city label:before{
		content: '*';
		display: inline-block;
		margin-right: 4px;
		line-height: 1;
		font-family: SimSun;
		font-size: 12px;
		color: #ff3300;
	}
</style>
<style lang="less" scoped>
.title {
  display: block;
  color: #4c4c4c;
  font-size: 16px;
}
.my-form {
  width: 340px;
  margin: 50px auto 0px auto;
  color: #4c4c4c;
}
// .submit,
// .reset {
//   width: 47%;
// }
.plant{
    position: relative;
}
.send-code{
    position: absolute;
    right: 10px;        
    top: 1px;
    cursor: pointer;
    height: 32px;
    line-height: 34px;
    border-left: 1px solid #ccc;
    padding-left: 10px;
}
</style>


