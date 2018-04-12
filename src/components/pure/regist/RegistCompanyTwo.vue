<template>
    <div class="main">
        <Form id="form-two" class="step-form-two" ref="FormTwo" :model="FormTwo" :rules="rules" :label-width="120">
            <FormItem label="法人姓名" prop="name">
                <Input size="large" type="text" placeholder="请输入您的真实姓名" v-model="FormTwo.name"></Input>
            </FormItem>
            <FormItem label="身份证号" prop="idCard">
                <Input size="large" type="text" placeholder="请输入您的身份证号" v-model="FormTwo.idCard"></Input>
            </FormItem>
            <FormItem class="sex" label="性别" prop="gender">
                <RadioGroup v-model="FormTwo.gender">
                    <Radio label="male">男</Radio>
                    <Radio label="female">女</Radio> 
                </RadioGroup>
            </FormItem>
            <FormItem label="企业名称" prop="company">
                <Input size="large" type="text" placeholder="请输入企业名称" v-model="FormTwo.company"></Input>
            </FormItem>
            <FormItem label="开户银行许可证" prop="licence">
                <Input size="large" type="text" placeholder="请输入开户银行许可证编码" v-model="FormTwo.licence"></Input>
            </FormItem>
            <FormItem label="统一社会信用代码" prop="creditCode">
                <Input size="large" type="text" placeholder="请输入统一社会信用代码" v-model="FormTwo.creditCode"></Input>
            </FormItem>
            <FormItem>
                <Button class="next" type="primary" @click="handleSubmit('FormTwo')">提交</Button>
                <Button class="reset" type="ghost" @click="handleReset('FormTwo')" style="margin-left: 8px">重置</Button>
                <router-link class="skip fr" to="/product" >跳过，以后设置 > </router-link>
            </FormItem>
        </Form>
    </div>
</template>
<script>
import { validateIdcard, validateLicenceCode, validateSocialCreditCode } from '@/tools/regx'
export default {
    data(){
        return{
            FormTwo:{
                name:'',
                idCard:'',
                gender:'',
                company:'',
                licence:'',
                creditCode:'',
                type:1//0代表个人 1代表企业
            },
            rules: {
                name: [
                    { required: true, message: '请输入法人姓名', trigger: 'blur' },
                ],
                idCard: [
                    { required: true, message: '请输入身份证号', trigger: 'blur' },
                    { validator: validateIdcard, trigger: 'blur' }
                ],
                gender: [
                    { required: true, message: '请选择性别', trigger: 'change' }
                ],
                company:[
                    { required: true, message: '请输入您的企业名称', trigger: 'blur' },                    
                ],
                licence:[
                    { required: true, message: '请输入您的开户银行许可证核准号', trigger: 'blur' }, 
                    { validator: validateLicenceCode, trigger: 'blur' }                                                           
                ],
                creditCode:[
                    { required: true, message: '请输入您的统一社会信用编码', trigger: 'blur' },
                    { validator: validateSocialCreditCode, trigger: 'blur'}                                                            
                ]
            }
        }
    },
    methods: {
        handleSubmit(name) {
            this.$refs[name].validate((valid) => {
                console.log(this.$parent.$data.phone)
                if (valid) {
                    let obj = {
                        name:this.FormTwo.name,
                        idCard:this.FormTwo.idCard,
                        gender:this.FormTwo.gender,
                        company:this.FormTwo.company,
                        licence:this.FormTwo.licence,
                        creditCode:this.FormTwo.creditCode,
                        type:this.FormTwo.type,
                        phone:this.$parent.$data.phone
                    }
                    // this.$Message.success('提交成功!');
                    this.$store.dispatch('registTwoSumbit',obj)
                    setTimeout(() => {
                        if(this.$store.state.regist.twoSumbit){
                            this.$emit('next', 2)                        
                        }
                    }, 2000);
                } else {
                    this.$Message.error('表单验证失败!');
                }
            })
        },
        handleReset(name) {
            this.$refs[name].resetFields();
        }
    }
}
</script>
<style lang="less">
.sex .ivu-form-item-content{
    padding-left: 5px;
}
</style>
<style lang="less" scoped>
.main{
    width: 400px;
    // margin-top: 37px;
    margin-left: auto;
    margin-right: auto;
}
</style>


