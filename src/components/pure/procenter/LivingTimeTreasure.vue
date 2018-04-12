<template>
    <div class="container clearfix">
        <div class="living-time">
            <div class="apellation">活期宝</div>
            <div class="icon-btm"></div>
            <div class="info">
                <span>期短金额多</span>
            </div>
            <div class="main-icon">
                <img src="../../../assets/product-center/current-pro.png" alt="">
            </div>
        </div>
        <div class="living-time-message fr">
            <div class="rate">
                <span class="rate-info">预期年化收益率</span> 
                <span class="value">{{Number(livingTime.rate).toFixed(2)}}<span>&nbsp%</span></span>
            </div>
            <div class="vigour">
                <span class="fr">期限灵活,随存随取!</span>
                <div class="wide"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['livingTime'],
    data(){
        return{

        }
    },
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
    margin-bottom: 40px;
    border: 1px solid #e5e5e5;
    background: #fff;
    display: flex;
}
.living-time{
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
    height: 18px;
    background: url(../../../assets/product-center/line-pro.png) no-repeat 47px 1px;
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
.main-icon>img{
    position: absolute;
    bottom: 13px;
    left: 80px;
    width: 60px;
}
.living-time-message{
    width: 953px;
    background: url(../../../assets/product-center/current-background.png);
    position: relative;
}
.living-time-item{
    height: 217px;
    border: 1px solid #e5e5e5;
    border-top: 0;
}
.rate{
    width: 170px;
    height: 120px;
    color: #fff;
    position: absolute;
    top: 19%;
    left: 7%;
}
.rate-info{
    display: block;
    font-size: 24px;
}
.value{
    display: block;
    font-size: 52px;
    margin-top: 10px;
    text-align: center;
    font-weight: 600;
}
.value>span{
    font-weight: normal;
    font-size: 40px;
}
.vigour{
    width: 465px;
    height: 65px;
    position: absolute;
    right: 20%;
    top: 35%;
    border-left: 1px solid #fff;
}
.vigour>span{
    font-size: 40px;
    color: #fff;
    margin-right: 30px;
}
.wide{
    width: 80px;
    height: 4px;
    background: #fff;
    position: absolute;
    bottom: 0;
    left: 20%;
    border-radius:2px;
}
</style>


