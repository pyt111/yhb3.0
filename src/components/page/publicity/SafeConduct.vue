<template>
    <div class="container">
        <!-- <img class="fl" :src="img" alt=""> -->
		<img src="../../../assets/publicity/safe-conduct-banner.png" alt="">
		<div class="safe-item">
			<div class="item-title">
				<i></i>
				<h3>项目安全</h3>
				<i></i>
			</div>
			<img src="../../../assets/publicity/safe-conduct-flow.png" alt="">
		</div>
		<div class="alone-auditing">
			<div class="item-title">
				<i></i>
				<h3>独立审核</h3>
				<i></i>
			</div>
			<div class="item-content clearfix">
				<img class="fl" src="../../../assets/publicity/safe-conduct-auditing.png" alt="">
				<p class="fr">"余惠宝"平台独立审核发标项目，对项目公司提供项目的验资报告及运营流水，确保项目的真实性、合规性并进行审核及风险评判。要求项目公司提供项目的尽职调查材料，审核该笔项目公司所涉及的各类合同（包括但不限于《担保合同》等）相关信息并提供足额的股权抵押。</p>
			</div>
		</div>
		<div class="safe-law">
			<div class="item-title">
				<i></i>
				<h3>法律安全</h3>
				<i></i>
			</div>
			<div class="law-content clearfix">
				<img class="fl" src="../../../assets/publicity/safe-conduct-law.png" alt="">
				<div class="fr">
					<p class="">余惠宝为投资人和项目公司提供专业的投融服务，是第三方信息服务平台。根据《中华人民共和国合同法》第424条关于居间合同、严格遵守居间合同的规定，余惠宝符合法律规定，且受到法律保护。</p>
					<p class="">更多信息请见《关于余惠宝业务模式之法律意见书》</p>
				</div>
			</div>
		</div>
    </div>
</template>
<script>
import {IMG} from '@/config/url'
export default {
    data(){
        return{
            img:IMG + '/publicity/safe-conduct.png'
        }
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
					name: '安全保障',
					url: ''
				},
			];
		this.$store.dispatch('publicityBreadChange', bread)
		this.$store.dispatch('publicityNavChange', 1)
	},
}
</script>
<style lang="less" scoped>
i{
	width: 36px;
	height: 3px;
	background: #000;
	display: inline-block;
	vertical-align: 4px;
	margin: 0 20px;
}
h3{
	display: inline-block;
}
.container{
	// width: 910px;
	min-height: 1485px;
}
.safe-item,.alone-auditing,.safe-law{
	margin-top: 100px;
	img{
		display: block;
		margin: 50px auto 40px;
	}
}
.item-title{
	font-size: 16px;
	font-weight: 900;
	color: #000;
	font-family: "PingFang";
	text-align: center;
}
.item-content{
	margin-top: 50px;
	display: flex;
	img{
		display: block;
		margin: 0 40px 0 30px;
		// margin-left: 40px;
	};
	p{
		display: block;
		font-size: 15px;
		text-indent: 30px;
		line-height: 2;
	}
}
.law-content{
	margin-top: 50px;
	display: flex;
	img{
		display: block;
		margin: 0 66px 0 75px;
	}
	p{
		display: block;
		font-size: 15px;
		line-height: 2;
	}
}
</style>

