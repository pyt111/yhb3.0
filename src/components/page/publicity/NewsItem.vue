<template>
    <div class="clearfix news-item-container">
        <div class="news-top">
            <span class="title">{{news.title}}</span>
            <div class="notice-msg">
                <span class="origin fl">来源：{{news.origin}}</span>
                <span class="time fr">发布时间：{{news.time}}</span>
            </div>
        </div>
        <div class="news-content " v-html="news.content"></div>
        <div class="news-foot">
            <router-link v-if="!!news.previous.title" class="news-nav fl" :to="'/publicity/news/'+ news.previous.id">上一篇：{{news.previous.title}}</router-link>
            <span v-else class="news-nav fl">上一篇：无</span>
            <router-link v-if="!!news.next.title" class="news-nav fr" :to="'/publicity/news/'+ news.next.id">下一篇：{{news.next.title}}</router-link>
            <span v-else class="news-nav fr">下一篇：无</span>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            newsList:{
                content:'<p>尊敬的余惠宝用户：</p><p style="text-align:left;text-indent:28px">余惠宝将于今天（6月10日）晚间对官网www.yhb118.com进行系统更新（在此期间内，手机app将不受影响）。</p><p style="text-align:left;text-indent:28px">此次更新后，网页版余惠宝的功能定位将变更为产品信息展示，且近期暂时不能进行登录及注册的操作。</p><p style="text-align:left;text-indent:28px">后续如需进行充值、提现、购买产品等相关操作，请在余惠宝手机app中进行。</p><p style="text-align:left">&nbsp;</p><p style="text-align:left;text-indent:28px">余惠宝App下载方式如下：</p><p style="text-align: left; text-indent: 28px; margin-top: 5px;">1、 通过官网上方的“app下载”，扫描二维码进行下载。</p><p style="text-align: left; text-indent: 28px; margin-top: 5px;">2、 安卓手机可在360手机助手、应用宝等应用市场中，搜索“余惠宝”进行下载；</p><p style="text-align: left; text-indent: 28px; margin-top: 5px;">3、苹果手机可在手机内置的App store中，搜索“余惠宝”进行下载。</p><p style="text-align:left;text-indent:28px">&nbsp;</p><p style="text-align:left;text-indent:28px">备注：更新后建议使用IE9以上版本的浏览器打开网页。</p><p style="text-align:left">&nbsp;</p><p style="text-align:left">&nbsp;</p><p style="text-align:right">余惠宝运营中心</p><p style="text-align:right">2017年6月10日</p><p><br/></p>',
                next:{
                    id:302,
                    title:'平台提现手续费调整公告'
                },
                previous:{
                    id:300,
                    title:'2017年元旦假期运营公告'
                },
                origin:'余惠宝',
                title:'余惠宝网站更新公告',
                time:'2017-10-24 10:00:00'
            }
        }
    },
    mounted(){
        let bread = [
            {
                name:'余惠宝',
                url:'/'
            },
            {
                name:'信息披露',
                url:'/publicity'
            },
            {
                name:'惠宝新闻',
                url:''
            }
        ];
        this.$store.dispatch('publicityBreadChange',bread);
        this.$store.dispatch('publicityNavChange',2);
    },
    watch: {
	    '$route' (to, from) {
	    	this.$store.dispatch('publicityNewsDetails', {id: this.$route.params.id})
	    }
	},
    created(){
        this.$store.dispatch('publicityNewsDetails',{id:this.$route.params.id})//新闻详情页  
    },
    computed:{
        news(){
            return this.$store.state.publicity.newsDetails
        }
    }
}
</script>
<style lang="less" scoped>
.news-item-container{
    width: 100%;
    padding: 48px 48px 0 48px;
}
.news-top{
    height: 114px;
    border-bottom: 1px dashed #808080;
}
.title{
    display: block;
    font-size: 18px;
    text-align: center;
    color:#4c4c4c;
    font-weight: 600;
}
.notice-msg{
    color:#808080;
    margin-top: 60px;
}
.news-content{
    min-height: 790px;
    padding-top: 34px;
    border-bottom:1px solid #e5e5e5;
}
.news-foot{
    height: 72px;
    line-height: 72px;
    color:#808080;
}
.news-nav{
    color:#808080;
}
.news-nav:hover{
    color:#3399ff;
}
</style>


