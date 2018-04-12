<template>
    <div>
        <BHeader/>
        <div class="content clearfix">
            <div v-if="type === 0" class="pos-regist clearfix">
                <span class="pitch-on">个人账户注册</span>
                <!-- <span class="subordinate fr" @click="toPos">企业账户注册</span> -->
            </div>
            <!-- <div v-if="type === 1" class="com-regist clearfix">
                <span class="pitch-on">企业账户注册</span>
                <span class="subordinate fr" @click="toCom">个人账户注册</span>
            </div> -->
            <span class="to-login fr">已有账号？<router-link to="/app">立即登录</router-link></span>            
            <div class="step clearfix">
                <Steps v-if="current === -1" :current="current" :status="status">
                    <Step title="步骤1" content="填写账户信息"></Step>
                    <Step title="步骤2" content="填写实名信息"></Step> 
                    <Step title="步骤3" content="注册成功"></Step>
                </Steps>
            </div>
            <div class="content-left fl">
                <RegistContentOne v-if="current === 0" @next='nextTwo'/>
                <RegistPersonTwo v-if="current === 1 && type === 0" @next='nextThree'/>
                <RegistCompanyTwo v-if="current === 1 && type === 1" @next='nextThree'/>
                <RegistContentThree v-if="current === 2"/>
            </div>
            <div class="content-right fr">
                <img src="../../assets/regist/regist-figureCaptions.png" alt="">
                <!-- <span>余惠宝已与上海银行合作，</span> 
                <span>所有资金由上海银行进行存管。</span> -->
                <p>注册成功即可获得6666超值体验金</p>
            </div>
        </div> 
        <BFooter/>
    </div>
</template>
<script>
import BHeader from '@/components/pure/common/BHeader'
import BFooter from '@/components/pure/common/BFooter'
import RegistContentOne from '@/components/pure/regist/RegistContentOne'
import RegistPersonTwo from '@/components/pure/regist/RegistPersonTwo'
import RegistCompanyTwo from '@/components/pure/regist/RegistCompanyTwo'
import RegistContentThree from '@/components/pure/regist/RegistContentThree'
export default {
    data(){ 
        return{
            current: 0,
            status: 'process',
            type:0,//0 代表个人账户 1 代表企业账户
            phone:'13913244412'//注册手机号
        }
    },
    components:{
        BHeader,
        BFooter,
        RegistContentOne,
        RegistPersonTwo,
        RegistCompanyTwo,
        RegistContentThree
    },
    methods:{
        nextTwo(obj){
            this.current = obj;
        },
        nextThree(obj){
            this.current = obj;
        },
        toCom(){
            this.type = 0;
            this.current = 0;
        },
        toPos(){
            this.type = 1;
            this.current = 0;
        }
    }
}
</script>
<style scoped lang="less">
.content{
    width: 1200px;
    height: 722px;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
    background-color: #fff;
    border-radius: 6px;
    overflow: hidden;
}
.com-regist,.pos-regist{
    display: inline-block;
    width: 485px;
    // margin-left: auto;
    // margin-right: auto;
    margin-left: 250px;
    border-bottom: 2px solid #ccc;
    padding-top: 75px;
}
.pitch-on{
    font-size: 16px;
    font-weight: 600;
    color: #000;
    border-bottom: 3px solid #ff7542;
    padding-bottom: 4px;
}
.subordinate{
    font-weight: 700;
    color: #ff7542;
    cursor: pointer;
}
.to-login{
    font-size: 16px;
    padding-top: 79px;
    margin-right: 283px;
}
.content-left{
    width: 400px;
    margin-left: 250px;
    padding-top: 60px;
}
.content-right{
    width: 310px;
    padding-top: 43px;
    margin-right: 140px;
}
.content-right>span{
    display: block;
    font-size: 16px;
    text-align: center;
}
.content-right span:nth-child(3){
    margin-top: 5px;
}
.content-right>p{
    font-size: 16px;
    color: #ff7542;
    text-align: center;
    // text-shadow:1px 0px;
    font-weight: 700;
}
// .step{
//     width: 80%;
//     padding-top: 130px;
//     margin-right: auto;
// }
</style>

