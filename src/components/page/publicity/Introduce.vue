<template>
	<div class="container">
		<img src="../../../assets/publicity/banner-title.png" alt="">
		<div class="company-synopsis item-title">
			<span>平</span>
			<i></i>
			<span>台</span>
			<i></i>
			<span>简</span>
			<i></i>
			<span>介</span>
		</div>
		<div class="company-content item-content">
			<p>余惠宝公司全称为"上海岚儒金融信息服务有限公司"，注册资金1亿元，总部位于上海。余惠宝致力于中小微企业解决融资难的问题，提供中间市场支持，构筑轻松自由的投融资环境；通过提供金融平台，余惠宝致力于为中小微企业解决融资难的问题投资结构，加强防范市场风险，推动资本多渠道引入和合规流动;已成为覆盖全国的专业化、标准化的金融交易投资平台，争当中国金融产品的创新工厂，促进中国融资市场的发展和产品的创新。</p>
			<p>余惠宝是"上海岚儒金融信息服务有限公司"倾力打造的第一个理财中介平台，2015年成立于上海。健康、安全、稳定是余惠宝的根基，自信、乐观、精益求精是余惠宝人的态度，让客户满意、相信、支持是余惠宝人的宗旨。</p>
			<p>余惠宝奉行诚信为尊的理念，追求安全、高效、共赢。专注于为高净值人群及企业提供定制化服务及综合金融解决方案，包括财富管理产品开发、设计及销售。主管业务有理财管理、资本投资、资管、海外项目等第三方机构产品。余惠宝重视培养自己的投资研发团队，造就特有的敬业、专业和具有强烈归属感的文化。注重创新、注重为客户创造价值并富有社会责任感。我们始终坚持“专业创造价值、客户利益为上”的经营思想，致力成为管理规范、具有可持续发展能力、全能型的财富管理公司，建立起产品开发、投资管理和风险控制的完善体系，为投资者谋求长期稳定的保值增值的资金收益。</p>
			<p>立足当下，面向未来，余惠宝正在朝着争当覆盖全国的专业化、标准化的金融交易投资平台、中国金融产品的创新工厂，以及促进中国金融市场的发展和产品的创新方向不断前行。</p>
		</div>
		<div class="company-datum item-title">
			<span>公</span>
			<i></i>
			<span>司</span>
			<i></i>
			<span>资</span>
			<i></i>
			<span>料</span>
		</div>
		<div class="company-datum item-content">
			<img src="../../../assets/publicity/company-information.png" alt="">
		</div>
		<div class="ambient-show item-title">
			<span>环</span>
			<i></i>
			<span>境</span>
			<i></i>
			<span>展</span>
			<i></i>
			<span>示</span>
		</div>
		<div class="ambient-content item-content">
			<img src="../../../assets/publicity/ambient-show-one.png" alt="">	
			<img src="../../../assets/publicity/ambient-show-two.png" alt="">	
			<img src="../../../assets/publicity/ambient-show-three.png" alt="">	
			<img src="../../../assets/publicity/ambient-show-four.png" alt="">	
			<img src="../../../assets/publicity/ambient-show-five.png" alt="">	
			<img src="../../../assets/publicity/ambient-show-six.png" alt="">	
			<img src="../../../assets/publicity/ambient-show-seven.png" alt="">	
			<img src="../../../assets/publicity/ambient-show-eight.png" alt="">	
			<img src="../../../assets/publicity/ambient-show-nine.png" alt="">				
		</div>
	</div>
</template>
<script>
import {IMG} from '@/config/url'
export default {
    data(){
        return{
			// img:IMG + '/publicity/platformintroduction.png'
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
					name: '平台介绍',
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
	display: inline-block;
	height: 25px;
	background: #000;
	width: 3px;
	vertical-align: -5px;
	margin: 0 1px;
}
.container{
	width: 910px;
	min-height:1973px; 
}
.item-title{
	display: block;
	margin: 0 auto;
	margin-top: 40px;
	text-align: center;
	font-size: 22px;
	font-weight: 900;
	text-shadow: 1px 0px;
	color: #000;
}
.company-content{
	display: block;
	width: 780px;
	margin: 0 auto;
	font-size: 16px;
	text-indent: 32px;
	p{
		margin-top: 30px;
		letter-spacing: 1px;
	}
}
.company-datum{
	img{
		display: block;
		margin: 0 auto;
		margin-top: 30px;
	}
}
.ambient-content{
	width: 730px;
	display: flex;
	margin: 0 auto;
	margin-top: 30px;
	justify-content: space-between;
	flex-wrap: wrap;
	img{
		margin-bottom: 30px;
	}
}
</style>

 