<template>
    <div class="clearfix">
        <div class="pro-list clearfix">
            <div v-for="item,index in products" class="pro-item" key="index">
                <img v-if="item.type != 3" class="greet" src="../../../assets/product-center/greet.png" alt="">
                <img v-else class="new-img" src="../../../assets/product-center/new-hand.png" alt="">
                <div class="item-title clearfix">
                    <span class="name">{{item.name}}</span>
                    <span v-if="item.type === 1" class="confirm label">定期</span>  
                    <span v-else-if="item.type === 2" class="exclusive label">经销商专属</span>                  
                    <span v-else class="new label">新手</span>
                    <span v-if="item.isSkill === 1" class="seckill label">秒杀</span>                    
                    <span v-else class="convert label">兑换</span>
                </div>
                <div class="item-info clearfix">
                    <div class="rate sec fl"> 
                        <span class="desc">预期年化收益率</span>
                        <span class="value">{{item.rate}}<span>%</span></span>
                    </div>
                    <div class="day sec fl">
                        <span class="desc">投资期限</span>
                        <span class="value">{{item.day}}<span>天</span></span>
                    </div>
                    <div class="money sec fl">
                        <span class="desc">目标金额</span>
                        <span class="value">{{item.total}}<span>元</span></span>
                    </div>
                    <div class="left sec fl">
                        <span class="desc">剩余可投</span>
                        <span class="value">{{item.left}}<span>元</span></span>
                    </div>
                    <div class="buy fr">
                        <span class="min">起投金额：{{item.min}}元</span>
                        <router-link v-if="item.left != '0.00'" class="invest" :to="'/product/'+item.id">立即查看</router-link>
                        <button v-else class="unable">已售罄</button>
                    </div>
                </div>
                <Progress class="p-i-progress" :title="item.percent + '%'" :percent="item.percent" :stroke-width="6" status="active" hide-info></Progress>
            </div>
        </div>
    </div>
</template>
<script>
export default {  
    props: ['products'],
    data(){
        return{

        }
    },
}
</script>
<style lang="less">
.p-i-progress .ivu-progress-bg{
    border-radius: 0 !important;
    background: #ff7542;
}
</style>

<style lang="less" scoped>
.pro-item{
    height: 150px;
    margin-bottom: 20px;
    position: relative;
    background: #fff;
    border:1px solid #e5e5e5;       
}
.pro-item:hover{
    // box-shadow:1px 1px 2px #e5e5e5; 
    box-shadow: 0 3px 10px rgba(0, 0, 0, .3);       
}
.greet{
    position: absolute;
}
.new-img{
    position: absolute;
}
.item-title{
    margin-top: 10px;
    padding-left:20px;
}
.name{
    margin-left: 45px;
    font-size: 20px;
    color: #4c4c4c;
}
.label{
    display: inline-block;
    margin-left: 20px;
    width: 35px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    color: #fff;
    border-radius: 5px;
    vertical-align: 2px; 
}
.new{
    background: #98D1FF;
}
.confirm{
    background: #ff7542;
}
.exclusive{
    width:70px;
    background:#43a047;
}
.convert,.seckill{
    margin-left:5px;
    background: #A498FF;
}
.item-info{
    margin-top: 18px;
    padding-left:20px;
}
.rate{
    margin-left: 45px;
    width: 120px;
    margin-right: 70px;
}
.day{
    width: 80px;
    margin-right: 70px;
}
.money{
    width: 220px;
    margin-right: 70px;
}
.value{
    font-size: 28px;
}
.value span{
    margin-left: 5px;
    vertical-align: 2px;
    font-size: 20px;
}
.rate .value,.money .value{
    color: #ff7542;
    font-weight: 600;        
}
.rate .value{
    font-size: 36px;
}
.day .value,.money .value,.left .value{
    margin-top: 10px;
}
.left .value{
    color:#169BD5;
    font-weight: 600;
}
.sec .desc{
    font-size: 14px;
    color: #808080;
}
.sec>span{
    display: block;
}
.buy{
    margin-right: 45px;
}
.min{
    display: block;
    text-align: center;
    color: #ccc;
}
.buy .invest{
    display: inline-block;
    margin-top: 10px;
    width: 134px;
    height: 44px;
    line-height: 44px;
    font-size: 16px;
    background: #ff7542;
    color: #fff;
    text-align: center;
    border: 1px solid #ff7542;
    border-radius: 4px;
    cursor: pointer;
}
.buy button{
    margin-top: 10px;
    width: 134px;
    height: 44px;
    font-size: 16px;
    background: #ff7542;
    border: 1px solid #ff7542;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
}
.buy button.unable{
    background: #ccc;
    border: 1px solid #ccc;
    cursor: not-allowed;
}
.p-i-progress{
    position: absolute;
    bottom: -5px;
    cursor: pointer;
}
</style>


