<template>
    <div class="clearfix coupon">
        <h4 class="title">我的礼券</h4>
        <div class="coupon-content clearfix">
            <Tabs class="coupon-tabs" value="red-bag">
                <TabPane label="红包" name="red-bag">
                    <CouponRed/>
                </TabPane>
                <TabPane label="加息券" name="raise-rate">
                    <CouponRate/>
                </TabPane>
                <TabPane label="体验金" name="taste">
                    <CouponTaste/>
                </TabPane>
                <TabPane label="分享金" disabled name="share">标签四的内容</TabPane>                
            </Tabs>
            <router-link to="/" class="rule">使用规则</router-link>
        </div>
        <HotRecommend class="hot"/>
    </div>
</template>
<script>
import CouponRed from '@/components/pure/account/CouponRed'
import CouponRate from '@/components/pure/account/CouponRate'
import CouponTaste from '@/components/pure/account/CouponTaste'
import HotRecommend from '@/components/pure/account/HotRecommend'
export default {
    data(){
        return{
            
        }
    },
    mounted(){
        let bread = [
            {
                name:'余惠宝',
                url:'/'
            },
            {
                name:'我的账户',
                url:'/account'
            },
            {
                name:'我的礼券',
                url:''
            }
        ];
        this.$store.dispatch('accountBreadChange',bread)
    },
    components:{
        CouponRed,
        CouponRate,
        CouponTaste,
        HotRecommend
    }
}
</script>
<style lang="less">

.ivu-tabs-bar .ivu-tabs-nav .ivu-tabs-tab:hover{
	color: #ff7542;
}
.ivu-tabs-bar .ivu-tabs-nav .ivu-tabs-tab{
	padding: 8px 40px;
}
</style>
<style lang="less" scoped>
.coupon{
    position: relative;
}
.title{
    display: block;
    font-size: 16px;
    color:#4c4c4c;
}
.coupon-tabs{
    margin-top:30px;
}
.coupon-content{
    position: relative;
}
.rule{
    position: absolute;
    right: 10px;
    top:10px;
}
.hot{
    position: absolute;
    // bottom:10px;
}
</style>


