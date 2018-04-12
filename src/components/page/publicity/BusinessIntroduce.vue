<template>
    <!-- <img :src="img" class="fl" alt="">     -->
    <div class="container">
        <img src="../../../assets/publicity/businessintroduction-title.png" alt="">
        <div class="service-recommend item-title">
            <span>业</span>
            <i></i>
            <span>务</span>
            <i></i>
            <span>介</span>
            <i></i>
            <span>绍</span>
        </div>
        <div class="service-content item-content">
            <p>上海岚儒目前主营P2B业务，只针对中小微企业提供投融资服务，平台帮助企业融资，由合作机构或政府推荐融资企业，平台会对于融资企业进行初步筛选，选定意向合作企业之后，企业需要提交近三年的经财政部门或会计师事务所审计的财务报表(包括资产负债表、损益表和财务状况变动表)等其他企业自身资质等资料，初审通过后派风控调查专员前往借款企业进行初期的接洽、基本信息采集、所有资产采集，资料收集过后由整体风控部门进行尽调，主要考量企业提供抵押物的价值以及企业三年内的盈利能力、再由项目审计人员计算对于整体项目的还款能力评估，决定最终可匹配贷款金额及相应利率并反馈给借款企业，借款企业提供抵质押物等降低作为风控保障，企业确认无误后进行合同签署。签约完毕后，产品部进行资料整理、打包上线，通过线上的形式让客户进行购买，客户资金通过第三方支付进入到存管银行，经由存管银行将企业所需借款资金给到企业，借款完成后由企业将利息和本金回款至存管银行，最后由托管银行经由第三方支付对客户进行返本付息平台负责将客户资金对接到企业的中短期融资项目当中，平台收取一定量的平台服务费。</p>
        </div>
		<div class="safe-item item-title">
			<span>项</span>
			<i></i>
			<span>目</span>
			<i></i>
			<span>安</span>
			<i></i>
			<span>全</span>
		</div>
		<div class="safe-content item-content">
			<img src="../../../assets/publicity/safe-conduct-flow.png" alt="">
		</div>
    </div>
</template>
<script>
import { IMG } from "@/config/url";
export default {
  data() {
    return {
      img: IMG + "/publicity/businessintroduction.png"
    };
  },
  mounted () {
		let bread = [
				{
					name: '余惠宝',
					url: '/'
				},
				{
					name: '信息披露',
					url: '/publicity'
				},
				{
					name: '业务介绍',
					url: ''
				},
			];
		this.$store.dispatch('publicityBreadChange', bread)
		this.$store.dispatch('publicityNavChange', 1)
	},
};
</script>
<style lang="less" scoped>
i{
	display: inline-block;
	height: 25px;
	background: #000;
	width: 4px;
	vertical-align: -5px;
	margin: 0 1px;
}
.item-title{
	display: block;
	margin: 0 auto;
	margin-top: 70px;
	text-align: center;
	font-size: 22px;
	font-weight: 900;
	text-shadow: 1px 0px;
	color: #000;
}
.item-content{
	margin-top: 25px;
	p{
		font-size: 16px;
		text-indent: 32px;
		margin: 0 65px;
		line-height: 2;
	}
}
.safe-content{
	img{
		display: block;
		margin: 30px auto 40px;
		// margin-top: 30px;
	}
}
</style>


