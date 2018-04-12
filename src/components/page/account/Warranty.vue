<template>
    <div class="warranty clearfix">
        <h4 class="title">我的保险</h4>
        <img class="top-bg" src="../../../assets/account/insure-top-bg.png" alt="">
        <div class="clearfix warranty-content">
            <div class="item" v-for="item,index in warranty" key="index">
                <img class="warranty-img" v-if="item.rank === 1" src="../../../assets/account/warranty-orange.png" alt="">
                <img class="warranty-img" v-if="item.rank === 2" src="../../../assets/account/warranty-blue.png" alt="">
                <span class="name">{{item.name}}</span>
                <div class="warranty-info">
                    <span class="warranty-info-item">保险期限：<span>{{item.term}}</span>年</span>
                    <span class="warranty-info-item">保险金额：<span>{{item.amountInsured}}</span>元</span>
                    <span class="warranty-info-item">保费金额：<span>{{item.amountPremium}}</span>元</span>
                </div>
                <router-link class="about-detail" to="/regist">查看详情</router-link>
                <router-link v-if="item.trade" class="warranty-btn warranty-able" to="/">查看保单</router-link>
                <button v-else  class="warranty-btn warranty-unable">周期内无法购买</button>                
            </div>
        </div>
        <HotRecommend class="hot"/>
    </div>
</template>
<script>
import HotRecommend from '@/components/pure/account/HotRecommend'
export default {
    data(){
        return{
            warranty:[
                {
                    name:'一级保险',
                    rank:1,
                    term:1,
                    amountInsured:3000,
                    amountPremium:1000000,
                    trade:true,//是否可购买
                },
                {
                    name:'二级保险',
                    rank:2,
                    term:5,
                    amountInsured:3000,
                    amountPremium:1000000,
                    trade:false,//是否可购买
                },
            ]
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
                name:'我的保单',
                url:''
            }
        ];
        this.$store.dispatch('accountBreadChange',bread);
    },
    components:{
        HotRecommend
    }
}
</script>
<style lang="less" scoped>
.warranty{
    position: relative;
}
.title{
    display: block;
    font-size: 16px;
    color:#4c4c4c;
}
.top-bg{
    display: block;
    margin: 50px auto;
}
.warranty-content{
    position: relative;
}
.item{
    width: 850px;
    height: 128px;
    line-height: 128px;
    margin-bottom: 40px;
    border: 1px solid #e5e5e5;
    border-left: 4px solid #ff7542;
}
.warranty-img{
    display: inline-block;
    width: 80px;
    height: 80px;
    background: #f5f5f5;
    border-radius: 50%;
    margin-left: 12px;
    vertical-align: middle;
}
.name{
    display: inline-block;
    font-size: 20px;
    margin-left: 30px;
    color: #4c4c4c;
}
.warranty-info{
    display: inline-block;
    width: 280px;
    height: 90px;
    line-height: 2;
    vertical-align: middle;
    margin-left: 120px;
    padding-left: 16px;
    border-left:1px solid #e5e5e5;
}
.warranty-info-item{
    display: block;
    font-size: 14px;
}
.warranty-info-item span{
    color: #ff7542;
    margin-left: .5em;
    margin-right: .5em;
}
.about-detail{
    font-size: 16px;
}
.warranty-btn{
    width: 118px;
    height: 36px;
    line-height: 34px;
    display: inline-block;
    vertical-align: middle;
    color:#fff;
    font-size: 16px;
    margin-left: 20px;
    border-radius: 6px;
}
.warranty-unable{
    background: #808080;
    border: 1px solid #808080;
    cursor: not-allowed;
}
.warranty-able{
    background: #ff7542;
    border: 1px solid #ff7542;
    text-align: center;
}

</style>


