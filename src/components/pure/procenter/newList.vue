<template>
    <div class="clearfix">
        <div class="new-list clearfix">
            <div v-for="item,index in newList" class="new-item" key="index">
                <img class="new-img" src="../../../assets/product-center/new-hand.png" alt="">
                <div class="item-title clearfix">
                    <span class="name">{{item.name}}</span>
                </div>
                <div class="item-info clearfix">
                    <div class="rate sec fl">
                        <span class="desc">预期年化收益率</span>
                        <span class="value">{{item.rate.toFixed(2)}}<span>%</span></span>
                    </div>
                    <div class="day sec fl">
                        <span class="desc">投资期限</span>
                        <span class="value">{{item.day}}<span>天</span></span>
                    </div>
                    <div class="money sec fl">
                        <span class="desc">投资金额</span>
                        <span class="value">{{item.total}}<span>元</span></span>
                    </div>
                    <div class="left sec fl">
                        <span class="desc">剩余可投</span>
                        <span class="value">{{item.left}}<span>元</span></span>
                    </div>
                    <div class="buy fr">
                        <span class="min">起投金额：{{item.min}}元</span>
                        <router-link class="invest" v-if="item.left != '0.00'" :to="'/product/'+item.id">立即投资</router-link>
                        <button v-else class="unable">已售罄</button>
                    </div>
                </div>
                <Progress class="p-i-progress" :title="item.percent + '%'" :percent="item.percent" :stroke-width="6" status="active" hide-info />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['newList'],
    data(){
        return{

        }
    }
}
</script>
<style lang="less">
.p-i-progress .ivu-progress-bg{
    border-radius: 0 !important;
    background: #ff7542;
}
</style>
<style lang="less" scoped>
.new-item{
    height: 150px;
    // margin-bottom: 20px;
    position: relative;
    background: #fff;
    border: 1px solid #e5e5e5;
}
.new-item:hover{
    box-shadow: 0 3px 10px rgba(0,0,0,.3);
}
.new-img{
    // display:inline-block;
    position: absolute;
}
.item-title{
    margin-top:10px;
    padding-left:20px;    
}
.name{
    margin-left:45px;
    font-size:20px;
    color:#4c4c4c;
}
.item-info{
    margin-top:18px;
    padding-left:20px;
}
.rate{
    margin-left:45px;
    width:120px;
    margin-right:70px;
}
.day{
    width:80px;
    margin-right:70px;
}
.money{
    width:220px;
    margin-right:70px;
}
.value{
    font-size:28px;
}
.value span{
    margin-left:5px;
    font-size:20px;
    vertical-align:2px;
}
.rate .value,
.money .value{
    color:#ff7542;
    font-weight:600;
}
.rate .value{
    font-size:36px;
}
.day .value,
.money .value,
.left .value{
    margin-top:10px;
}
.left .value{
    color:#169BD5;
    font-weight:600;
}
.sec .desc{
    font-size:14px;
    color:#808080;
}
.sec>span{
    display:block;
}
.buy{
    margin-right:45px;
}
.min{
    display: block;
    text-align:center;
    color:#ccc;
}
.buy .invest{
    display: inline-block;
    margin-top:10px;
    width:134px;
    height: 44px;
    line-height:44px;
    font-size:16px;
    background:#ff7542;
    color:#fff;
    text-align:center;
    border:1px solid #ff7542;
    border-radius:4px;
    cursor: pointer;
}
.buy button{
    margin-top:10px;
    width:134px;
    height: 44px;
    // line-height:44px;
    font-size:16px;
    background:#ff7542;
    border:1px solid #ff7542;
    border-radius:4px;
    color:#fff;
    cursor: pointer;
}
.buy button.unable{
    background:#ccc;
    border:1px solid #ccc;
    cursor:not-allowed;
}
.p-i-progress{
    position: absolute;
    bottom: -5px;
    cursor: pointer;
}
</style>


