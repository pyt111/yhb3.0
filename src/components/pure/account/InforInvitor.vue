<template>
    <div class="clearfix">
        <div class="clearfix invitor">
            <Form ref="formCustom" :model="formCustom" :rules="rule" :label-width="120">
                <FormItem label="姓名">
                    <Input type="text" placeholder="请输入紧急联系人姓名" v-model="formCustom.name"></Input>
                </FormItem>
                <FormItem label="手机号码" prop='phone'>
                    <Input type="text" placeholder="请输入紧急联系人手机号码" v-model="formCustom.invitor"></Input>
                </FormItem>
                <FormItem>
                    <Button class="hold" type="primary">保存</Button>
                </FormItem>
            </Form> 
        </div>
    </div>
</template>
<script>
import {validatePhone} from '@/tools/regx'
export default {
    data(){
        return{
            formCustom:{
                name:'',
                invitor:''
            },
            rule:{
                phone:[
                    {validator: validatePhone, trigger: 'blur' }
                ]
            }
        }
    }
}
</script>
<style lang="less" scoped>
.invitor{
    width: 400px;
    margin: 70px auto 90px auto;
}
.hold{
    width: 100%;
    height: 36px;
}
</style>


