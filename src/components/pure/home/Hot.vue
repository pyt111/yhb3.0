<template>
    <div class="container clearfix">
        <router-link class="clearfix fl pic-link" to="/regist">
            <img src="../../../assets/home/xinshoulibao.png" alt="">
        </router-link>
        <Spin v-if="this.$store.state.home.main.name == ''||this.$store.state.home.main.name == undefined " class="spin" size="large" fix></Spin>                              
        <div v-else class="main-content">
            <img v-if="this.$store.state.home.actived" src="../../../assets/home/stay-tuned.png" alt="">
            <div v-else> 
                <!-- 热门 -->
                <div v-if="main.isSkill === 0" class="main-product">
                    <span class="label">热门</span>
                    <span class="title fl">{{main.name}}</span>
                    <div class="content clearfix fl"> 
                        <div class="rate fl clearfix">
                            <span class="rate-value">{{main.rate}}%</span>                         
                            <span class="desc">预期年化收益率</span>
                        </div>
                        <div class="day fl clearfix">
                            <span class="day-value">{{main.day}}
                                <span>天</span>
                            </span>
                            <span class="desc">投资期限</span>
                        </div>
                        <div class="buy fr clearfix">
                            <router-link v-if="trade" to="/product" class="buy-now">了解更多</router-link>
                            <router-link v-else to="/app" class="buy-now">立即购买</router-link>
                            <span class="desc">已购：{{main.people}}人</span>
                        </div>
                    </div>
                </div>
                <!-- 秒杀 -->
                <div v-else class="main-product">
                    <span class="label">限时</span>           
                    <div class="time-count">
                        <img class="fl" src="../../../assets/product-center/i-icon.png" alt="">
                        <img class="click fl" src="../../../assets/home/seckill-clock.png" alt="">
                        <span v-if="time.secKilling" class="time-area fl">
                            {{main.startMilliseconds >= 0 ? '离结束':'距开始'}}
                            <span class="time-interval t-one">{{time.min}}</span>分
                            <span class="time-interval t-one">{{time.sec}}</span>秒
                            <span class="time-interval t-two">{{time.mili}}</span>毫秒
                        </span>
                        <span v-else class="time-area fl">
                            {{main.startMilliseconds >= 0 ? '倒计时':'离结束'}}
                            <span class="time-interval t-one">{{time.day}}</span>天 
                            <span class="time-interval t-one">{{time.hour}}</span>时
                            <span class="time-interval t-one">{{time.min}}</span>分
                            <span class="time-interval t-one">{{time.sec}}</span>秒
                        </span>
                    </div>
                    <div class="content clearfix fl">
                        <div class="rate clearfix fl">
                            <span class="rate-value">{{main.rate}}%</span>
                            <span class="desc">预期年化收益率</span>
                        </div>
                        <div class="day clearfix fl">
                            <span class="day-value">{{main.day}}
                                <span>天</span>
                            </span> 
                            <span class="desc">投资期限</span>
                        </div>
                        <div class="buy clearfix fr">
                            <router-link class="buy-now" :to="'/product/'+main.id">了解更多</router-link>
                            <!-- <router-link class="buy-now" to="/app">立即购买</router-link> -->
                            <span class="desc">已购：{{main.people}}人</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <router-link class="clearfix fr pic-link" to="/guide">
            <img src="../../../assets/home/xinshouyindao.png" alt="">                            
        </router-link>
    </div>
</template>
<script>
export default {
    props: ['time', 'main'],
    data() { 
        return {
            trade: false,
        }
    }
}
</script>
<style lang="less" scoped>
.container {
    width: 1200px;
    margin: 20px auto 0;
    text-align: center;
    position: relative;
}
.main-content{
    display: inline-block;
}
.main-product {
    width: 580px;
    height: 222px;
    display: inline-block;
    border: 1px solid #ff7542;
    background: #fff;
    position: relative;
    overflow: hidden;
}
.spin{
    z-index: 0;
    width: 580px;
    margin-left:310px;
}
.main-product .label {
    background: #ff7542;
    color: #fff;
    font-size: 16px;
    position: absolute;
    width: 100px;
    left: -35px;
    top: 5px;
    transform: rotateZ(-45deg)
}

.title {
    font-size: 24px;
    color: #4c4c4c;
    margin-top: 38px;
    margin-left: 50px;
}

.content {
    display: block;
    width: 100%;
    text-align: center;
    margin-top: 10px;
    padding: 0 26px 0 48px;
}

.content>div>span {
    display: block;
}

.rate-value {
    font-size: 50px;
    color: #ff7542;
}

.desc {
    margin-top: 10px;
    font-size: 14px;
    color: #808080;
}

.day {
    margin-left: 55px;
}

.day-value {
    color: #4c4c4c;
    font-size: 30px;
    height: 75px;
    line-height: 85px;
}

.day-value span {
    font-size: 18px;
    vertical-align: 4px;
}

.buy-now {
    display: block;
    color: #fff;
    background: #ff7542;
    padding: 8px 23px;
    border-radius: 6px;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
    margin-top: 16px;
    margin-bottom: 28px;
}

.time-count {
    height: 76px;
    line-height: 76px;
}

.click {
    margin-top: 10px;
    margin-left: 10px;
}

.time-area {
    color: #ff7f7c;
    font-size: 24px;
    margin-left: 20px;
}

.time-interval {
    display: inline-block;
    height: 42px;
    line-height: 42px;
    font-size: 32px;
    text-align: center;
    border: 1px solid #ff7f7c;
    border-radius: 6px;
    padding: 2px 4px 2px 5px;
    margin-right: 5px;
    color: #7447ff;
}

.t-one {
    width: 48px;
}

.t-two {
    width: 60px;
}
</style>


