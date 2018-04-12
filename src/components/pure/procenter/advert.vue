<template>
    <div class="clearfix">
        <div class="advert-item clearfix">
            <div class="item-title fl clearfix">
                <h1>新手两大特权</h1>
                <div class="img">
                    <img src="../../../assets/product-center/index-sp.png" alt="">
                </div>
            </div>
            <div class="item-info fr clearfix">
                <div class="name sec fl">
                    <span class="desc">新手专享体验金</span>
                    <span class="value">6666<span>元</span></span>
                </div>
                <div class="rate sec fl">
                    <span class="desc">新手专享计划</span>
                    <span class="value">10.00<span>%</span>+2.00<span>%</span></span>
                    <span class="info">预期年化收益率</span>
                </div>
                <div class="day sec fl">
                    <span class="value">15<span>天</span></span>
                    <span class="info">投资期限</span>
                </div>
                <div class="buy sec fr">
                    <span class="min">起投金额：1000元</span>
                    <router-link class="invest" :to="'/product/'+advert">立即查看</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            advert:140,
        }
    }
}
</script>
<style lang="less" scoped>
.advert-item{
    height: 168px;
    position: relative;
    background: #fff;
    border: 1px solid #e5e5e5;
}
.advert-item:hover{
    box-shadow: 0 3px 10px rgba(0, 0, 0, .3)
}
.item-title{
    width: 418px;
    overflow: hidden;
    padding-top: 25px;
}
.img{
    width: 397px;
    height: 102px;
    padding-left: 11px;
}
.item-title h1{
    padding-left: 30px;
    font-size: 26px;
    text-align: center;
    // color: #363d3f;
}
.item-info{
    margin-top: 25px;
}
.name{
    width: 173px;
}
.rate{
    padding-right: 23px;
}
.day{
    margin-top: 23px;
    margin-right: 40px;
}
.desc{
    display: block;
    font-size: 16px;
    color: #000;
    font-weight: 500;
}
.day .value{
    display: block;
    margin-left: -8px;
    color: #495060;
}
.value{
    display: block;
    color: #ff7542;
    font-size: 48px;
    margin-top: 10px;
    // margin-left: -6px;
}
.value>span{
    font-size: 30px;
    padding-left: 5px;
    vertical-align: 3px;
}
.sec{
    font-size: 14px;
    color: #808080;
}
.min{
    display: block;
    text-align: center;
    color: #ccc;
}
.buy{
    margin: 20px 20px 0 0;
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
}
</style>


