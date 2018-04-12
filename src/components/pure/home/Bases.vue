<template>
    <div class="container clearfix">
        <!-- <router-link class="base-item" to="/regist">
            <div class="base-pic">
                <img src="../../../assets/home/Keyhole-Shield.png" alt="">
            </div>
            <div class="info">
                <span class="title">安全保障</span>
                <span class="content">上海银行托管，资金账户安全有保障</span>
            </div>
        </router-link><router-link class="base-item" to="/regist">
            <div class="base-pic">
                <img src="../../../assets/home/Transaction-Amount.png" alt="">
            </div>
            <div class="info">
                <span class="title">交易总额</span>
                <span class="content">累计交易总额{{enroll()}}元</span>
            </div>
        </router-link><router-link class="base-item" to="/regist">
            <div class="base-pic">
                <img src="../../../assets/home/Registry-Editor.png" alt="">
            </div>
            <div class="info">
                <span class="title">注册量</span>
                <span class="content">迄今，平台注册量已突破{{enroll()}}次</span>
            </div>
        </router-link> -->
        <div class="base-info clearfix">
            <div class="fl base-item">
                <img class="fl base-img" src="../../../assets/home/setting-company.png" alt="">
                <div class="base-msg">
                    <div class="base-tit">集团背景</div>
                    <p>AAA级信用集团全资控股银行信用授信数百亿</p>
                </div>
            </div>
            <div class="fl base-item">
                <img class="fl base-img" src="../../../assets/home/trade-authority.png" alt="">
                <div class="base-msg">
                    <div class="base-tit">行业权威</div>
                    <p>中小企业贷,平台项目三年零逾期</p>
                </div>
            </div>
            <div class="fl base-item">
                <img class="fl base-img" src="../../../assets/home/big-control.png" alt="">
                <div class="base-msg">
                    <div class="base-tit">强大风控</div>
                    <p>银行级线下分层风控体系，加我EIS大数据风控系统</p>
                </div>
            </div>
            <div class="fl base-item">
                <img class="fl base-img" src="../../../assets/home/bank-storagetube.png" alt="">
                <div class="base-msg">
                    <div class="base-tit">银行存管</div>
                    <p class="bann-s">签约上海银行存管，保障用户资金安全</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// import {soFarTime} from '@/tools/date'
import {threePointControl} from '@/tools/algorithm'
export default {
    props: ['general'],
    data() {
        return {
            
        }
    },
    methods:{
        enroll(){
            let num = threePointControl(this.general.allAmount)
            return num
        },
        allMoney(){
            let num = threePointControl(this.allReg)
            return num
        }
    },
}
</script>
<style lang="less" scoped>
.container {
    width: 1200px;
    margin: 0 auto;
    // height: 122px;
    margin-top: 5px;
    border: 1px solid #e5e5e5;
}
.base-info{
    width: 100%;
    height: 120px;
}
.base-item {
    width: calc((1200-2)/4px);
    height: 120px;
    background: #fff;
    position: relative;
}
.base-img{
    margin: 12%;
}
.base-msg{
    position: absolute;
    top: 29px;
    right: 40px;
    width: 49%;
}
.base-item:nth-child(4) .base-msg{
    width:40%; 
    right: 50px;
}
.base-tit{
    font-size: 1.5em;
    color: #000;
}
.base-msg>p{
    color: #999;
}
// .base-pic {
//     display: inline-block;
//     width: 164px;
//     height: 120px;
//     float: left;
//     text-align: center;
// }

// .base-pic img {
//     width: 72px;
//     position: relative;
//     top: 50%;
//     margin-top: -36px;
// }

// .info {
//     display: inline-block;
//     float: left;
//     width: 170px;
//     height: 100%;
// }

.title {
    display: block;
    font-size: 16px;
    margin-top: 30px;
    color: #4c4c4c;
}

.content {
    font-size: 14px;
    color: #999;
}
</style>


