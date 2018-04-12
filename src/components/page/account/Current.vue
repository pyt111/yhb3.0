<template>
    <div class="clearfix">
        <h4 class="title">活期宝</h4>
        <div class="content clearfix">
            <div class="fl count">
                <span>活期宝余额（元）<em class="eye" :class="{'eye-close': !eyeSwitch}" @click="eyeSwitch = !eyeSwitch"></em></span>
                <div class="operate clearfix">
                    <span v-if="eyeSwitch" class="money">{{current.money}}</span>
                    <span v-else class="money">***</span>
                </div>
                <div class="acc-money">
                    <div class="fl balance">
                        <span class="desc">账户金额（元）</span>
                        <span v-if="eyeSwitch" class="value">{{current.balance}}</span>
                        <span v-else class="value">***</span>
                    </div>
                    <div class="fl freeze">
                        <span class="desc">不可用金额（元）</span>
                        <span v-if="eyeSwitch" class="value">{{current.freeze}}</span>
                        <span v-else class="value">***</span>
                    </div>
                </div>
            </div>
            <div class="recently fr">
                <div class="former">
                    <div class="yesterday">
                        <span class="desc">昨日收益（元）</span>
                        <span v-if="eyeSwitch" class="value">{{current.yesterday}}</span>
                        <span v-else class="value">***</span>
                    </div>
                    <div class="history">
                        <span class="desc">历史累计收益（元）</span>
                        <span v-if="eyeSwitch" class="value">{{current.total}}</span>
                        <span v-else class="value">***</span>
                    </div>
                    <div class="rate-year">
                        <span class="desc">年化收益率（%）</span>
                        <span class="value">{{current.rate}}</span>
                    </div>
                </div>
                <router-link to="/" class="fr">关于活期宝</router-link>
            </div>
        </div>
        <CurrentRecord/>
    </div>
</template>
<script>
import CurrentRecord from '@/components/pure/account/CurrentRecord'
export default {
    data(){
        return{
            eyeSwitch:false,
            current:{
                money:600000,
                balance:100000,
                freeze:100000,
                yesterday:543,
                total:5000.68,
                rate:"3.20"
            }   
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
                name:'活期宝',
                url:''
            }
        ];
        this.$store.dispatch('accountBreadChange',bread)
    },
    components:{
        CurrentRecord
    }
}
</script>
<style lang="less" scoped>
.title{
    display: block;
    color:#4c4c4c;
    font-size: 16px;
}
.content{
    font-size: 14px;
    background: url(../../../assets/account/current-wave-bg.png) no-repeat;
    background-position-y: bottom;
    padding-bottom: 45px; 
}
.count{
    width: 538px;
    margin-top: 40px;
    border-right: 1px solid #e5e5e5;
}
.eye{
    width: 21px;
    height: 12px;
    display: inline-block;
    background: url(../../../assets/icon/eye-open.png);
    background-size: 100% 100%;
    margin-left: .5em;
    cursor: pointer;
}
.eye.eye-close{
    background: url(../../../assets/icon/eye-close.png);
    background-size: 100% 100%;
}
.operate{
    width: 524px;
    margin-top: 20px;
    padding-bottom: 32px;
    border-bottom: 1px dashed #e5e5e5;
}
.money{
    font-size: 32px;
    display: inline-block;
    color: #ff7542;
    width: 200px;
}
.acc-money{
    margin-top: 12px;
}
.acc-money .value{
    font-size: 24px;
    display: block;
    margin-top: 10px;
    color:#4c4c4c;
}
.acc-money .desc{
    display: block;
    color:#808080;
}
.balance{
    width: 238px;
    height: 100%;
    padding-top: 12px;
    border-right: 1px dashed #e5e5e5;
}
.freeze{
    height: 100%;
    padding: 12px 0 0 36px;
}
.recently{
    padding-left: 24px;
    width: 310px;
    margin-top: 40px;
}
.recently .value{
    display: block;
    text-align: left;
    font-size: 24px;
    color: #4c4c4c;
    margin-top: 14px;
}
.former{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
.former>div{
    width: 50%;
    margin-bottom: 32px;
}
</style>


