<template>
    <div class="pandect">
        <div class="pandect-top">
            <span class="total">总资产（元）：{{fund.total}}</span>
            <div class="recently">
                <span class="recently-item">昨日收益（元）：<span class="overstriking">{{fund.yesterday}}</span></span>
                <span class="recently-item">累计收益（元）：<span class="overstriking">{{fund.accumulate}}</span></span>
            </div>
            <div class="remainder">
                <span class="remainder-item fl">账户余额：{{fund.remainder}}</span>
                <span class="remainder-item fl">冻结金额：{{fund.freeze}}</span>
                <span class="remainder-item fl">
                    <span class="span-inward">活期宝：{{fund.current}}</span>
                    <router-link to="/account" class="level">详情</router-link>
                </span>
                <span class="integral fl">
                    <span class="span-inward">积分<span class="point">{{fund.points}}</span></span>
                    <router-link to="/" class="level">可购商品</router-link>
                </span>
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
            fund:{
                total:1000,
                yesterday:50,
                accumulate:120,
                remainder:5000,
                freeze:4326,
                current:111,
                points:6000,
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
                name:'账户总览',
                url:''
            }
        ];
        this.$store.dispatch('accountBreadChange',bread)
    },
    components:{
        HotRecommend
    }
}
</script>
<style lang="less" scoped>
.pandect{
    min-height: 1028px;
    position: relative;
}
.total{
    font-size: 24px;
    color:#4c4c4c;
}
.recently{
    font-size: 14px;
    border-bottom: 1px dashed #4d4d4d;
    margin-top: 32px;
    padding-bottom: 14px;
}
.recently-item{
    // margin-right: 5px;
    display: inline-block;
    width: 240px;
    color: #808080;
}
.overstriking{
    // color:#4c4c4c;
    color:#ff7542;
}
.remainder{
    margin-top: 24px;
    font-size: 14px;
}
.remainder-item{
    display: inline-block;
    width: 240px;
}
.integral{
    display: inline-block;
}
.span-inward{
    display: block;
}
.point:before{
    content:'';
    display: inline-block;
    width: 17px;
    height: 17px;
    background:url(../../../assets/account/price.png);
    margin-bottom: -.2em;
    margin-left: .3em;    
    margin-right: .4em;    
}
.hot{
    position: absolute;
    bottom: 10px;
}
</style>


