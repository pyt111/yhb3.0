<template>
    <div class="clearfix notice-item-container">
        <div class="notice-top">
            <span class="title">{{noticeItemLists.title}}</span>
            <div class="notice-msg clearfix">
                <span class="origin fl">来源：{{noticeItemLists.origin}}</span>
                <span class="time fr">发布时间：{{noticeItemLists.time}}</span>
            </div>
        </div>
        <div class="notice-content" v-html="noticeItemLists.content"></div>
        <div class="notice-foot">
            <router-link v-if="!!noticeItemLists.previous.title" class="notice-nav fl" :to="'/publicity/proclamation/'+ noticeItemLists.previous.id">上一篇：{{noticeItemLists.previous.title}}</router-link>
            <span v-else class="notice-nav fl">上一篇：无</span>
            <router-link v-if="!!noticeItemLists.next.title" class="notice-nav fr" :to="'/publicity/proclamation/' + noticeItemLists.next.id">下一篇：{{noticeItemLists.next.title}}</router-link>
            <span v-else class="notice-nav fr">下一篇：无</span>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            noticeItemList:{
                content:'<p style="margin-top:0;margin-right:0;margin-bottom:25px;margin-left:0;text-indent:28px;padding:0 0 0 0 ;text-align:justify;text-justify:inter-ideograph;line-height:24px;background:rgb(255,255,255)"><strong><span style=";font-family:宋体;color:rgb(43,43,43);letter-spacing:0;font-weight:bold;font-style:normal;font-size:14px;background:rgb(255,255,255)"><span style="font-family:宋体">【余惠宝】</span>“关注</span></strong><strong><span style=";font-family:宋体;color:rgb(43,43,43);letter-spacing:0;font-weight:bold;font-style:normal;font-size:14px;background:rgb(255,255,255)"><span style="font-family:宋体">办公室亚健康人群</span>”员工关怀周，顺利完成！</span></strong></p><p style="margin-top:0;margin-right:0;margin-bottom:25px;margin-left:0;text-indent:28px;padding:0 0 0 0 ;text-align:justify;text-justify:inter-ideograph;line-height:24px;background:rgb(255,255,255)"><span style=";font-family:宋体;color:rgb(43,43,43);letter-spacing:0;font-weight:normal;font-style:normal;font-size:14px;background:rgb(255,255,255)"><span style="font-family:宋体">这周</span></span><span style=";font-family:宋体;color:rgb(43,43,43);letter-spacing:0;font-weight:normal;font-style:normal;font-size:14px;background:rgb(255,255,255)"><span style="font-family:宋体">，</span></span><span style=";font-family:宋体;color:rgb(43,43,43);letter-spacing:0;font-weight:normal;font-style:normal;font-size:14px;background:rgb(255,255,255)"><span style="font-family:宋体">我们特地</span></span><span style=";font-family:宋体;color:rgb(43,43,43);letter-spacing:0;font-weight:normal;font-style:normal;font-size:14px;background:rgb(255,255,255)"><span style="font-family:宋体">邀请</span></span><span style=";font-family:宋体;color:rgb(43,43,43);letter-spacing:0;font-weight:normal;font-style:normal;font-size:14px;background:rgb(255,255,255)"><span style="font-family:宋体">了专业</span></span><span style=";font-family:宋体;color:rgb(43,43,43);letter-spacing:0;font-weight:normal;font-style:normal;font-size:14px;background:rgb(255,255,255)"><span style="font-family:宋体">的中医</span></span><span style=";font-family:宋体;color:rgb(43,43,43);letter-spacing:0;font-weight:normal;font-style:normal;font-size:14px;background:rgb(255,255,255)"><span style="font-family:宋体">理疗专家</span></span><span style=";font-family:宋体;color:rgb(43,43,43);letter-spacing:0;font-weight:normal;font-style:normal;font-size:14px;background:rgb(255,255,255)"><span style="font-family:宋体">张</span></span><span style=";font-family:宋体;color:rgb(43,43,43);letter-spacing:0;font-weight:normal;font-style:normal;font-size:14px;background:rgb(255,255,255)"><span style="font-family:宋体">医师</span></span><span style=";font-family:宋体;color:rgb(43,43,43);letter-spacing:0;font-weight:normal;font-style:normal;font-size:14px;background:rgb(255,255,255)"><span style="font-family:宋体">在</span></span><span style=";font-family:宋体;color:rgb(43,43,43);letter-spacing:0;font-weight:normal;font-style:normal;font-size:14px;background:rgb(255,255,255)"><span style="font-family:宋体">公司内部</span></span><span style=";font-family:宋体;color:rgb(43,43,43);letter-spacing:0;font-weight:normal;font-style:normal;font-size:14px;background:rgb(255,255,255)"><span style="font-family:宋体">开展</span>“关心</span><span style=";font-family:宋体;color:rgb(43,43,43);letter-spacing:0;font-weight:normal;font-style:normal;font-size:14px;background:rgb(255,255,255)"><span style="font-family:宋体">办公室亚健康人群</span></span><span style=";font-family:宋体;color:rgb(43,43,43);letter-spacing:0;font-weight:normal;font-style:normal;font-size:14px;background:rgb(255,255,255)">”为主题的中医养生</span><span style=";font-family:宋体;color:rgb(43,43,43);letter-spacing:0;font-weight:normal;font-style:normal;font-size:14px;background:rgb(255,255,255)"><span style="font-family:宋体">理疗周</span></span><span style=";font-family:宋体;color:rgb(43,43,43);letter-spacing:0;font-weight:normal;font-style:normal;font-size:14px;background:rgb(255,255,255)"><span style="font-family:宋体">。</span></span><span style=";font-family:宋体;color:rgb(43,43,43);letter-spacing:0;font-weight:normal;font-style:normal;font-size:14px;background:rgb(255,255,255)"><span style="font-family:宋体">在这一周期间用中医的方式对全公司的员工做了一个基础的中医检查，帮助大家发现了很多生活中不良的习惯，并以辅助手段帮全体员工进行了简单的中医理疗，帮所有同事简单的缓解平时的一些不适</span></span><span style=";font-family:宋体;color:rgb(43,43,43);letter-spacing:0;font-weight:normal;font-style:normal;font-size:14px;background:rgb(255,255,255)"><span style="font-family:宋体">针</span></span><span style=";font-family:宋体;color:rgb(43,43,43);letter-spacing:0;font-weight:normal;font-style:normal;font-size:14px;background:rgb(255,255,255)"><span style="font-family:宋体">。</span></span></p><p style="margin-top:0;margin-right:0;margin-bottom:25px;text-indent:28px;padding:0 0 0 0 ;text-align:justify;text-justify:inter-ideograph;line-height:24px;background:rgb(255,255,255)"><span style=";font-family:宋体;color:rgb(43,43,43);letter-spacing:0;font-weight:normal;font-style:normal;font-size:14px;background:rgb(255,255,255)">8月10日（周五），针对全队员工所常见的问题，特地开展了一次中医养生讲座，讲座进行中，员工全体到齐，</span><span style=";font-family:宋体;color:rgb(43,43,43);letter-spacing:0;font-weight:normal;font-style:normal;font-size:14px;background:rgb(255,255,255)"><span style="font-family:宋体">张</span></span><span style=";font-family:宋体;color:rgb(43,43,43);letter-spacing:0;font-weight:normal;font-style:normal;font-size:14px;background:rgb(255,255,255)"><span style="font-family:宋体">医师</span></span><span style=";font-family:宋体;color:rgb(43,43,43);letter-spacing:0;font-weight:normal;font-style:normal;font-size:14px;background:rgb(255,255,255)"><span style="font-family:宋体">从</span>“脊椎常见问题”、“肠胃如何护理”、“常见不适是如何引起”等方面，通过形象生动的例子，深入浅出地向听讲的员工讲解了日常习惯在人类健康中的作用。</span><span style=";font-family:宋体;color:rgb(43,43,43);letter-spacing:0;font-weight:normal;font-style:normal;font-size:14px;background:rgb(255,255,255)"><span style="font-family:宋体">张</span></span><span style=";font-family:宋体;color:rgb(43,43,43);letter-spacing:0;font-weight:normal;font-style:normal;font-size:14px;background:rgb(255,255,255)"><span style="font-family:宋体">医师</span></span><span style=";font-family:宋体;color:rgb(43,43,43);letter-spacing:0;font-weight:normal;font-style:normal;font-size:14px;background:rgb(255,255,255)"><span style="font-family:宋体">指出，办公室人群最大关键问题在于</span>“吃的不好，喝的不好”，旨在提高我们对不好的日常习惯容易引起身体不适的认识，呼吁通过合理膳食、适量运动、心理平衡和充足睡眠等健康的生活方式，摆脱身体亚健康状态，也针对员工在</span><span style=";font-family:宋体;color:rgb(43,43,43);letter-spacing:0;font-weight:normal;font-style:normal;font-size:14px;background:rgb(255,255,255)"><span style="font-family:宋体">中医、中药方面提出的疑问进行了详细解答。</span></span></p><p style="margin-top:0;margin-right:0;margin-bottom:25px;margin-left:0;text-indent:28px;padding:0 0 0 0 ;text-align:justify;text-justify:inter-ideograph;line-height:24px;background:rgb(255,255,255)"><span style=";font-family:宋体;color:rgb(43,43,43);letter-spacing:0;font-weight:normal;font-style:normal;font-size:14px;background:rgb(255,255,255)"><span style="font-family:宋体">中医养生重在整体性和系统性，目的是提前预防疾病，治未病。所谓养，即保养、调养、补养之意。所谓</span>“生”，就是生命、生存、生长之意。讲座上，张</span><span style=";font-family:宋体;color:rgb(43,43,43);letter-spacing:0;font-weight:normal;font-style:normal;font-size:14px;background:rgb(255,255,255)"><span style="font-family:宋体">医师</span></span><span style=";font-family:宋体;color:rgb(43,43,43);letter-spacing:0;font-weight:normal;font-style:normal;font-size:14px;background:rgb(255,255,255)"><span style="font-family:宋体">将中医养生保健知识与</span></span><span style=";font-family:宋体;color:rgb(43,43,43);letter-spacing:0;font-weight:normal;font-style:normal;font-size:14px;background:rgb(255,255,255)"><span style="font-family:宋体">员工</span></span><span style=";font-family:宋体;color:rgb(43,43,43);letter-spacing:0;font-weight:normal;font-style:normal;font-size:14px;background:rgb(255,255,255)"><span style="font-family:宋体">实际</span></span><span style=";font-family:宋体;color:rgb(43,43,43);letter-spacing:0;font-weight:normal;font-style:normal;font-size:14px;background:rgb(255,255,255)"><span style="font-family:宋体">工作生活</span></span><span style=";font-family:宋体;color:rgb(43,43,43);letter-spacing:0;font-weight:normal;font-style:normal;font-size:14px;background:rgb(255,255,255)"><span style="font-family:宋体">相结合，从日常饮食、运动、心态调整等方面进行了生动地讲解，指出养生首先是精神养生，要保持心胸开阔，乐观向上，保持心境恬静的好心态。并劝诫大家要爱惜身体，遵循自然规律。再就是饮食养生，多吃些新鲜蔬菜、水果，禁忌油腻、生冷、黏硬食物。</span></span></p><p style="margin-top:0;margin-right:0;margin-bottom:25px;margin-left:0;text-indent:28px;padding:0 0 0 0 ;text-align:justify;text-justify:inter-ideograph;line-height:24px;background:rgb(255,255,255)"><span style=";font-family:宋体;color:rgb(43,43,43);letter-spacing:0;font-weight:normal;font-style:normal;font-size:14px;background:rgb(255,255,255)"><span style="font-family:宋体">此次健康知识讲座通俗易懂，互动性极强，</span></span><span style=";font-family:宋体;color:rgb(43,43,43);letter-spacing:0;font-weight:normal;font-style:normal;font-size:14px;background:rgb(255,255,255)"><span style="font-family:宋体">员工</span></span><span style=";font-family:宋体;color:rgb(43,43,43);letter-spacing:0;font-weight:normal;font-style:normal;font-size:14px;background:rgb(255,255,255)"><span style="font-family:宋体">们听得津津有味，更有细心的</span></span><span style=";font-family:宋体;color:rgb(43,43,43);letter-spacing:0;font-weight:normal;font-style:normal;font-size:14px;background:rgb(255,255,255)"><span style="font-family:宋体">同事</span></span><span style=";font-family:宋体;color:rgb(43,43,43);letter-spacing:0;font-weight:normal;font-style:normal;font-size:14px;background:rgb(255,255,255)"><span style="font-family:宋体">认真做好笔记。张医</span></span><span style=";font-family:宋体;color:rgb(43,43,43);letter-spacing:0;font-weight:normal;font-style:normal;font-size:14px;background:rgb(255,255,255)"><span style="font-family:宋体">师</span></span><span style=";font-family:宋体;color:rgb(43,43,43);letter-spacing:0;font-weight:normal;font-style:normal;font-size:14px;background:rgb(255,255,255)"><span style="font-family:宋体">教会了大家简便的保健方法，受到了</span></span><span style=";font-family:宋体;color:rgb(43,43,43);letter-spacing:0;font-weight:normal;font-style:normal;font-size:14px;background:rgb(255,255,255)"><span style="font-family:宋体">全体员工</span></span><span style=";font-family:宋体;color:rgb(43,43,43);letter-spacing:0;font-weight:normal;font-style:normal;font-size:14px;background:rgb(255,255,255)"><span style="font-family:宋体">的一致好评，听课的</span></span><span style=";font-family:宋体;color:rgb(43,43,43);letter-spacing:0;font-weight:normal;font-style:normal;font-size:14px;background:rgb(255,255,255)"><span style="font-family:宋体">同事</span></span><span style=";font-family:宋体;color:rgb(43,43,43);letter-spacing:0;font-weight:normal;font-style:normal;font-size:14px;background:rgb(255,255,255)"><span style="font-family:宋体">们纷纷表示，通过医生的讲解，学到了养生保健的方法，对保持身体健康起到了很大的帮助。现场在与</span></span><span style=";font-family:宋体;color:rgb(43,43,43);letter-spacing:0;font-weight:normal;font-style:normal;font-size:14px;background:rgb(255,255,255)"><span style="font-family:宋体">员工</span></span><span style=";font-family:宋体;color:rgb(43,43,43);letter-spacing:0;font-weight:normal;font-style:normal;font-size:14px;background:rgb(255,255,255)"><span style="font-family:宋体">的互动中，</span></span><span style=";font-family:宋体;color:rgb(43,43,43);letter-spacing:0;font-weight:normal;font-style:normal;font-size:14px;background:rgb(255,255,255)"><span style="font-family:宋体">员工们</span></span><span style=";font-family:宋体;color:rgb(43,43,43);letter-spacing:0;font-weight:normal;font-style:normal;font-size:14px;background:rgb(255,255,255)"><span style="font-family:宋体">就食补及气候变化对人体的影响向张医</span></span><span style=";font-family:宋体;color:rgb(43,43,43);letter-spacing:0;font-weight:normal;font-style:normal;font-size:14px;background:rgb(255,255,255)"><span style="font-family:宋体">师</span></span><span style=";font-family:宋体;color:rgb(43,43,43);letter-spacing:0;font-weight:normal;font-style:normal;font-size:14px;background:rgb(255,255,255)"><span style="font-family:宋体">提问，张医生均耐心细致地为居民们作答，并教给居民正确的养生观念。</span></span></p><p style="margin-top:0;margin-right:0;margin-bottom:25px;margin-left:0;text-indent:28px;padding:0 0 0 0 ;text-align:justify;text-justify:inter-ideograph;line-height:24px;background:rgb(255,255,255)"><span style=";font-family:宋体;color:rgb(43,43,43);letter-spacing:0;font-weight:normal;font-style:normal;font-size:14px;background:rgb(255,255,255)"><span style="font-family:宋体">希望</span></span><span style=";font-family:宋体;color:rgb(43,43,43);letter-spacing:0;font-weight:normal;font-style:normal;font-size:14px;background:rgb(255,255,255)"><span style="font-family:宋体">讲座结束后，</span></span><span style=";font-family:宋体;color:rgb(43,43,43);letter-spacing:0;font-weight:normal;font-style:normal;font-size:14px;background:rgb(255,255,255)"><span style="font-family:宋体">我们全体岚儒金融的员工，能在平日做好自身工作的同时不能懈怠对自己身体的关注，公司也会不断安排更多关注员工健康的活动让大家参加，让我们一起为</span>“把企业做好，把平台做好，让自己更好”的目标作出努力！！！！！</span></p><p style="margin-top:0;margin-right:0;margin-bottom:25px;margin-left:0;text-indent:28px;padding:0 0 0 0 ;text-align:left;line-height:24px;background:rgb(255,255,255)"><span style=";font-family:宋体;color:rgb(43,43,43);letter-spacing:0;font-weight:normal;font-style:normal;font-size:14px;background:rgb(255,255,255)">&nbsp;</span></p><p style="margin-top:0;margin-right:0;margin-bottom:25px;margin-left:0;text-indent:0;padding:0 0 0 0 ;text-autospace:ideograph-numeric;text-align:left;line-height:16px;background:rgb(255,255,255)"><span style=";font-family:宋体;color:rgb(43,43,43);letter-spacing:0;font-weight:normal;font-style:normal;font-size:14px;background:rgb(255,255,255)"><span style="font-family:宋体">余惠宝媒体新闻部</span></span></p><p style="margin-top:0;margin-right:0;margin-bottom:25px;margin-left:0;text-indent:0;padding:0 0 0 0 ;text-autospace:ideograph-numeric;text-align:left;line-height:16px;background:rgb(255,255,255)"><span style=";font-family:宋体;color:rgb(43,43,43);letter-spacing:0;font-weight:normal;font-style:normal;font-size:14px;background:rgb(255,255,255)">2017年08月11日（宣）</span></p><p><br/></p>',
                origin:'余惠宝',
                time:'2017-10-25 11:43:25',
                title:'【余惠宝】“关注办公室亚健康人群”讲座',
                next:{
                    id:322,
                    title:'余惠宝公告11-01'
                },
                previous:{
                    id:320,
                    title:'余惠宝国庆假期公告'
                }
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
                name:'惠宝公告',
                url:''
            }
        ];
        this.$store.dispatch('publicityBreadChange',bread);
        this.$store.dispatch('publicityNavChange',2)
    },
    watch:{
        '$route'(to,from){
            this.$store.dispatch('publicityAnnouncementDetails',{id:this.$route.params.id})
        }
    },
    created(){
        this.$store.dispatch('publicityAnnouncementDetails',{id:this.$route.params.id})//公告详情页
    },
    computed:{
        noticeItemLists(){
            return this.$store.state.publicity.announcementDetails
        }
    }
}
</script>
<style lang="less" scoped>
.notice-item-container{
    width: 100%;
    padding: 48px 48px 0 48px;
}
.notice-top{
    height: 114px;
    border-bottom: 1px dashed #ccc;
    overflow: hidden;
}
.title{
    display: block;
    font-size: 18px;
    color:#4c4c4c;
    text-align: center;
    font-weight: 600;
}
.notice-msg{
    color:#808080;
    margin-top: 60px;
}
.notice-content{
    min-height: 790px;
    padding-top: 34px;
    border-bottom: 1px solid #e5e5e5;
}
.notice-foot{
    height: 72px;
    line-height: 72px;
    color:#808080;
}
.notice-nav{
    color:#808080;
}
.notice-nav:hover{
    color:#3399ff;
}
</style>


