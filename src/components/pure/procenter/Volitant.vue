<template>
    <div class="container clearfix">
        <div class="volitant">
            <div class="apellation">活期产品</div>
            <div class="icon-btm"></div>
            <div class="info">
                <span>期限很灵活</span>
                <span>收益节节高</span>
            </div>
            <div class="main-icon"></div>
            <router-link to="/app" class="fixed-app">
                <span>下载APP</span>
                <span>查看更多产品</span>
            </router-link>
        </div>
        <div class="volitant-message fr">
            <div v-for="item,index in volitant" class="volitant-item" key="index">
                <div class="item-title">
                    <span class="name">{{item.name}}</span>
                    <span class="certificate" v-if="item.certificate === 0">礼券不可用</span>
                    <span class="certificate" v-else>礼券可用</span>
                </div>
                <div class="item-info clearfix">
                    <div class="item-msg fl">
                        <div class="rate fl clearfix">
                            <span class="desc">预期年化收益率</span>
                            <span class="value">{{Number(item.rate).toFixed(2)}}<span>&nbsp%</span></span>
                        </div>
                        <div class="day fl clearfix">
                            <span class="desc">期限</span>
                            <span class="value">{{item.day}}<span>&nbsp天</span></span>
                        </div>
                        <div class="min fl clearfix">
                            <span class="desc">起投金额</span>
                            <span class="value">{{item.min}}<span>&nbsp起投</span></span>
                        </div>
                        <div class="left fl clearfix">
                            <span class="desc">剩余可投：<span class="left-value">{{item.left}}</span>元</span>
                            <Progress class="p-i-progress" :title="item.percent + '%'" :percent="Number(item.percent)" :stroke-width="10" status="active" hide-info></Progress>
                            <span>{{item.percent}}%</span>
                        </div>
                    </div>
                    <div class="item-btn fr clearfix">
                        <router-link class="go-pro" :to="'/product/'+ item.id">立即查看</router-link>
                    </div>  
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['volitant'],
    data(){
        return{

        }
    }
}
</script>
<style>
.ivu-progress{
    width: 80%;
    padding-top: 5px;
}
.ivu-progress .ivu-progress-bg{
    background: #ff7542;
}
</style>
<style lang="less" scoped>
.container{
    width: 100%;
    margin-bottom:20px;
    border: 1px solid #e5e5e5; 
    background: #fff;
    display: flex;
}
.volitant{
    width: 245px;
    position: relative;
    background: #40CEFD;
}
.apellation{
    width: 100%;
    font-size: 28px;
    color: #fff;
    font-weight: 600;
    text-align: center;
    padding-top: 60px;
    letter-spacing: 2px;
}
.icon-btm{
    background: url(../../../assets/product-center/line-pro.png) no-repeat 47px 1px;
    height: 18px;
    margin-top: 5px;
}
.info{
    margin-top: 20px;
}
.info>span{
    display: block;
    font-size: 18px;
    color: #fff;
    text-align: center;
}
.main-icon{
    background: url(../../../assets/product-center/current-pro.png) no-repeat 62px 1px;
    height: 126px;
}
.fixed-app{
    width: 115px;
    height: 40px;
    border: 2px solid #fff;
    border-radius: 5px;
    color: #fff;
    text-align: center;
    position: absolute;
    bottom: 30px;
    left: 25%;
}
.fixed-app>span{
    display: block;
}
.volitant-message{
    width: 953px;
}
.volitant-item{
    height: 217px;
    border: 1px solid #e5e5e5;
    border-top: 0;
}
.item-info{
    width: 100%;
    height: 100px;
    margin-top: 35px;
    padding-left: 40px;
}
.item-title{
    padding: 30px 0 0 30px;
}
.name{
    font-size: 20px;
    font-weight: 700;
}
.certificate{
    font-size: 14px;
    color: #ff7919;
    border: 1px solid #ff7919;
    padding: 3px 4px;
    margin-left: 5px;
}
.item-msg{
    width: 80%;
    height: 100%;
    border-right: 1px solid #e5e5e5;
}
.item-btn{
    width: 20%;
    height: 100%;
}
.rate{
    width: 105px;
    height: 100%;
}
.rate,
.day,
.min{
    margin-right: 75px;
}
.desc{
    display: block;
    font-size: 14px;
    text-align: center;
    color: #999;
}
.value{
    display: block;
    padding-top: 25px;
    font-size: 30px;
    text-align: center;
    color: #ff7542;
    font-weight: 600;
}
.value>span{
    font-size: 24px;
}
.day .value{
    color: #616161;
}
.day .value>span{
    color: #999;
}
.min .value>span{
    color: #999;
}
.left{
    width: 200px;
    margin-top: 25px;
}
.left .desc{
    text-align: left;
}
.left>span{
    color: #999;
}
.left-value{
    color: #ff7542;
}
.go-pro{
    display: block;
    width: 130px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 20px;
    border-radius: 5px;
    border: 1px solid #ff7542;
    margin-left: 23px;
    margin-top: 20px;
    color: #ff7542;
}
</style>




