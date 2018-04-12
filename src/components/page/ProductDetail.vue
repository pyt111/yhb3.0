<template>
    <div style="position:relative">
       <AHeader/>
       <div class="container">
			<Breadcrumb class="breadcrumbs" separator=">">
				<Breadcrumb-item v-for="nav in breadcrumbs" :href="nav.url" key="nav">{{nav.name}}</Breadcrumb-item>
			</Breadcrumb>
			<div class="clearfix">
				<ProInfor class="info fl" :product="product" />
				<div class="buy fr">
					<span class="pro-left">剩余可投：
					<span>{{product.left}}</span>元</span>
                    <div class="appQR">
                        <img src="../../assets/icon/QR code.png" alt="">
                    </div>
					<router-link v-if="product.left > product.min" class="buy-now" to="/app">下载APP进行购买</router-link>
					<router-link v-else class="buy-now" to="/app">下载APP了解更多</router-link>
				</div>
			</div>
			<div class="taps-detail">
				<ProInforTaps :taps="product.productItems" :record="records"/>
			</div>
            <ModelAgreement/>
            <div class="hackneyed-quesition">
                <HackneyedQuesition/>
            </div>
		</div>
        <AFooter/>
    </div>
</template>
<script>
import AHeader from '@/components/pure/common/AHeader'
import ProInfor from '@/components/pure/prodetail/ProInfor'
import ProInforTaps from '@/components/pure/prodetail/ProInforTaps'
import ModelAgreement from '@/components/pure/prodetail/ModelAgreement'
import HackneyedQuesition from '@/components/pure/common/HackneyedQuesition'
import AFooter from '@/components/pure/common/AFooter'
export default {
    data(){
        return{
            product1:{
                left:1000,
                name:'年中特惠',
                day:720,
                percent:87.5,
                time:'2017-11-06',
                rate:14,
                memberRate:14,
                min:5000,
                total:1000000,
                productItems:{
                    receive:'<p><strong>●还款计划</strong></p><p><br /><strong>1.还款来源：企业经营收入作为本金及利息的还款来源，所有收入及订单尾款优先偿还本次借款。</strong></p>',
                    safeInsur:'<p><strong>●项目简介<br />&nbsp;<br />本项目由日照日瑞物流有限公司发起，用于企业扩大发展融资。</strong></p><p><br /><strong>●项目编号</strong></p><p><br /><strong>LR20170606</strong></p><p><br /><strong>●融资方简介<br />&nbsp;<br />日照日瑞物流有限公司，日照物流公司行业内知名，企业办公室地址位于日照市东港区涛雒工业园，于2009年05月19日在日照工商局注册成立，在公司发展壮大的8年里，始终为客户提供最好的产品、良好的技术支持、健全的售后服务，公司主要经营物流服务；仓储服务，企业拥有最好的产品和近10年经验的专业的销售和技术团队。</strong></p><p>&nbsp;</p><p><strong>●产品详情<br />&nbsp;<br />1.标的介绍：日照日瑞物流有限公司发起，本项目融资金额为人民币壹佰万元。<br />&nbsp;<br />2.还款方式：投资期内，按每日还&ldquo;预期利率&rdquo;利息，到期偿还本金的方式进行还款。本项目不支持借款公司提前还款。<br />&nbsp;<br />3.募集方式：本项目采用线上渠道进行融资。<br />&nbsp;<br />4.融资用途：本项目融资主要用于借款企业扩大发展融资。</strong></p>',
                    enterprise:'<p><br /><strong>●保障措施<br />&nbsp;<br />1.项目自发起之日起，至项目回款结束，全程均由风控部门进行资金监管。<br />&nbsp;<br />2.本次借款由借款企业以其司所拥有的运输车辆进行质押提供担保，其市值高于项目总融资额度3倍左右。同时，借款企业法人以个人资产及收入为此借款项目提供个人无限连带责任担保。<br />&nbsp;<br />3.客户隐私信息都经过加密处理，防止任何人包括公司员工获取用户信息。</strong></p>'
                }
            },
            breadcrumbs:[
                {
                    name:'余惠宝首页',
                    url:'/'
                },
                {
                    name:'产品详情',
                    url:''
                }
            ]
        } 
    },
    created(){
        let id = this.$route.params.id    
        this.$store.dispatch('getProDetailInfo',{id:id})
        this.$store.dispatch('getInvestRecord',{id:id})
    },
    computed:{
        product(){
            return this.$store.state.prodetail.details
        },
        records(){
            return this.$store.state.prodetail.records
        }
    },
    destroyed(){

    },
    components:{
        AHeader,
        ProInfor,
        ProInforTaps,
        ModelAgreement,
        HackneyedQuesition,
        AFooter
    },
}
</script>
<style lang="less" scoped>
.container{
    width: 1200px;
    margin: 0 auto;
}
.breadcrumbs{
    margin: 10px 0;
}
.info{
    width: 812px;
    height: 330px;
    border: 1px solid #e5e5e5;
    border-top: 3px solid #ff7542;
    padding: 0 30px;
    background: #fff;
}
.buy{
    width: 350px;
    height: 330px;
    padding: 0 34px;
    border: 1px solid #e5e5e5;
    background-color: #fff;
}
.pro-left{
    font-size: 16px;
    display: block;
    color: #4c4c4c;
    margin-top: 12px;
}
.pro-left span{
    font-size: 26px;
    padding-right: 5px;
}
.appQR{
    width: 72%;
    margin: 0 auto;
}
.buy-now{
    display: block;
    width: 280px;
    height: 44px;
    line-height: 44px;
    cursor: pointer;
    background: #ff7542;
    color: #fff;
    border: 1px solid #ff7542;
    border-radius: 4px;
    text-align: center;
    margin-top: 12px;
    font-size: 16px;
}
.buy-now:hover {
	background-color:lighten(#ff7542,5%);
}
.taps-detail{
    // height: 578px;
    background: #fff;
    margin: 40px 0;
    // overflow: auto;
}
</style>


