<template>
    <div class="container">
        <div class="introduce">
            <div class="content">
                <div class="introduce-item borrow-big">
                    <img class="item-img fl" src="../../../assets/borrow/borrow-big.png" alt="">
                    <div class="item-msg fr">
                        <span class="msg-tit">借款额度大</span>
                        <span class="msg-info">最高额度达2000万元</span>
                    </div>
                </div>
                <div class="introduce-item">
                    <img class="item-img fl" src="../../../assets/borrow/faster-end.png" alt="">
                    <div class="item-msg fr">
                        <span class="msg-tit">到款速度快</span>
                        <span class="msg-info">即刻上线 &nbsp开启借款</span>
                    </div>
                </div>
                <div class="introduce-item">
                    <img class="item-img fl" src="../../../assets/borrow/rate-low.png" alt="">
                    <div class="item-msg fr">
                        <span class="msg-tit">借款费率低</span>
                        <span class="msg-info">资质更高 &nbsp费率更低</span>
                    </div>
                </div>
                <div class="introduce-item">
                    <img class="item-img fl" src="../../../assets/borrow/cill-low.png" alt="">
                    <div class="item-msg fr">
                        <span class="msg-tit">门槛要求低</span>
                        <span class="msg-info">资质资产合格 即可申请</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
.container{
    width:1200px;
    margin: 0 auto;
    height: 115px;
    margin-bottom: 20px;
    position: relative;
}
.introduce{
    position: absolute;
    top: -35px;
}
.content{
    display: flex;
}
.introduce-item{
    width: 295px;
    height: 150px;
    margin-right: calc(20/3px);
    background: #fff;
    border: 1px solid #e5e5e5;
}
.item-img{
    padding: 35px 0px 34px 30px;
}
.item-msg{
    width: 58%;
    margin-top: 45px;
}
.item-msg>span{
    display: block;
    text-align: center;
}
.msg-tit{
    font-size: 20px;
}
.msg-info{
    font-size: 16px;
    color:#808080;
    margin-top: 10px;
}
</style>


