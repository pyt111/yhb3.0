<template>
    <div class="container clearfix">
        <div class="news-top">
            <h4 class="news-title">{{myNewsContent.title}}</h4>
            <span class="news-time fr">发生时间：{{myNewsContent.time}}</span>
        </div>
        <div class="news-content" v-html="myNewsContent.content"></div>
        <div class="news-foot">
            <router-link v-if="!!myNewsContent.previous.title" class="news-nav fl" :to="'/publicity/news/'+ myNewsContent.previous.id">上一篇：{{myNewsContent.previous.title}}</router-link>
            <span v-else class="news-nav fl">上一篇：无</span>
            <router-link v-if="!!myNewsContent.next.title" class="news-nav fr" :to="'/publicity/news/'+ myNewsContent.next.id">下一篇：{{myNewsContent.next.title}}</router-link>
            <span v-else class="news-nav fr">下一篇：无</span>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            myNewsContent:{
                title:'订单详情',
                time:'2017-11-27 10:10:10',
                content:'<p>尊敬的余惠宝用户：<p style="text-align:left;text-indent:28px">您于XXXX年XX月XX日，在本平台发生一宗交易，交易金额为：XXXX元。</p></p>',
                next:{
                    id:3,
                    title:'系统消息',
                },
                previous:{
                    id:1,
                    title:'系统消息',
                }
            }
        }
    },
    mounted(){
        let bread = [
            {
                name:'余惠宝',
                url:'/',
            },
            {
                name:'我的账户',
                url:'/account'
            },
            {
                name:'我的消息',
                url:''
            }
        ];
        this.$store.dispatch('accountBreadChange',bread);
    }
}
</script>
<style lang="less" scoped>
.container{
    width: 100%;
    margin: 0 auto;
}
.news-top{
    height: 100px;
    border-bottom: 1px dashed #808080;
}
.news-title{
    text-align: center;
    font-size: 24px;
}
.news-time{
    padding-top: 30px;
}
.news-content{
    min-height: 790px;
    padding-top: 34px;
    border-bottom: 1px solid #e5e5e5;
    font-size: 16px;
    color: #4c4c4c;
}
.news-foot{
    height: 72px;
    line-height: 72px;
    color: #808080;
}
.news-nav{
    color: #808080;
}
.news-nav:hover{
    color:#39f;
}
</style>

