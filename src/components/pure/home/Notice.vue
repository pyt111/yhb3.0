<template>
    <div class="notice">
        <div class="now-time fl">
            <Icon class="notice-icon" type="volume-high" size='30'></Icon>
            <span>{{nowTime}}</span>
        </div>
        <em class="l-border"></em>
        <marquee class="notice-content" behavior="" direction="">{{notice}}</marquee>
        <router-link class="notice-more fr" to="/publicity/proclamation">更多>></router-link>
    </div>
</template>
<script>
export default {
    props: ['notice'],
    data() {
        return {
            nowTime:new Date().Format('yyyy年MM月dd日'),
            // noticeInfo:'余惠宝，安全便捷的网贷平台、网上投资理财、金融投资信息中介平台'
        }
    }
}
</script>
<style lang="less" scoped>
.notice {
    width: 100%;
    height: 34px;
    max-width: 1200px;
    min-width: 1000px;
    margin: 0 auto;
    line-height: 34px;
    font-size: 12px;
}
.notice-content{
    display: inline-block;
    width: 75%;
    // margin-left: 15px;
    color: #495060;
}
.notice-more{
    color:#808080;
}
.now-time {
    display: inline-block;
    padding-right: 15px;
}

.notice-icon {
    float: left;
    margin-left: 10px;
    margin-right: 20px;
    margin-top: 18px;
    line-height: 0;
    color: #ff7542;
}
// .l-border{
//     width: 1px;
//     height: 60%;
//     background:#808080;
//     float: left;
//     margin-top: 7px;
//     display: inline-block;
// }
</style>


