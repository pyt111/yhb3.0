<template>
    <div class="main">
        <Form id="form-two" class="step-form-two" ref="FormTwo" :model="FormTwo" :rules="rules" :label-width="80">
            <FormItem label="姓名" prop="name">
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
            <FormItem>
                <Button class="next" type="primary" @click="handleSubmit('FormTwo')">提交</Button>
                <Button class="reset" type="ghost" @click="handleReset('FormTwo')" style="margin-left: 8px">重置</Button>
                <router-link class="skip fr" to="/product" >跳过，以后设置 > </router-link>
            </FormItem>
        </Form>
    </div>
</template>
<script>
import { validateIdcard } from '@/tools/regx'
export default {
    data(){
        return{
            FormTwo:{
                name:'',
                idCard:'',
                gender:'',
                type:0//0代表个人账户 1代表企业账户
            },
            rules: {
                name: [
                    { required: true, message: '请输入您的真实姓名', trigger: 'blur' },
                ],
                idCard: [
                    { required: true, message: '请输入您的身份证号', trigger: 'blur' },
                    { validator: validateIdcard, trigger: 'blur' }
                ],
                gender: [
                    { required: true, message: '请选择性别', trigger: 'change' }
                ],
            }
        }
    },
    methods: {
        handleSubmit(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    let obj = {
                        name:this.FormTwo.name,
                        idCard:this.FormTwo.idCard,
                        gender:this.FormTwo.gender,
                        type:this.FormTwo.type,
                        phone:this.$parent.$data.phone
                    }
                    // this.$Message.success('提交成功!');
                    console.log(this.FormTwo.type,obj)
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
    },
    // component(anchor){
        
    // },
    // render:function(creatElement){

    // }
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
    margin-top: 75px;
    margin-left: auto;
    margin-right: auto;
}
.skip{
    color:#ff7542;
    // text-decoration: underline;
    font-weight:600;
    // vertical-align:baseline; 

}
</style>


