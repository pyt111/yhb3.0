<template>
	<div class="container clearfix">
		<div class="title">
			<span class="goods-title">区域代理</span>
			<span class="goods-info">惠生活，惠理财</span>
		</div>
		<div class="content">
			<div class="prev sw-change fl" @click="prev"></div>
			<swiper v-if="this.$store.state.home.agentMessage != ''" class="swiper-group fl" :options="swiperOption" ref="mySwiper">
				<swiper-slide class="swiper-no-swiping swiper-item fl" v-for="item,index in agentMessage" key="index">
					<div class="agent-item ">
						<div class="face">
							<img class="agent-img" :src="item.emk4" alt="" />
							<div v-if="item.lvlID === 0" class="face-bg bg-copper"></div>
							<div v-else-if="item.lvlID === 1" class="face-bg bg-silver"></div>								
							<div v-else-if="item.lvlID === 2" class="face-bg bg-gold"></div>
						</div>
						<div class="agent-info">
							<span :title="item.provinceName+'省'+item.countCity+'市'">地区：{{item.provinceName}}省{{item.countCity}}市</span>
							<span>姓名：{{item.emk1}}</span>
							<span>电话：{{item.username}}</span>
						</div>
					</div>
				</swiper-slide>
			</swiper>
			<Spin v-else size="large" fix></Spin>              
			<div class="next sw-change fr" @click="next"></div>
		</div>
	</div>
</template>

<script>
	import {IMG} from '@/config/url'
	export default {
		props: ['agentMessage'],
	  	name: 'carrousel',
	 	 data() {
	    	return {
				swiperOption: {
					autoplay: 2000,
					speed: 1000,
					loop:true,
					loopedSlides: 15,
					slidesPerView : 'auto',
					// autoplayDisableOnInteraction : false,
					pagination : '.swiper-pagination',
					// observeParents:true,
				},
			}
		},
		computed: {
			swiper() {
				return this.$refs.mySwiper.swiper;
			}
		},
		methods: {
			prev () {
				this.swiper.slidePrev();
			},
			next () {
				this.swiper.slideNext();
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
@import '../../../config/base.less';
.container{
	width: 1200px;
	margin:0 auto;
	// background-color: @white;
	padding: 12px 0;
	margin-bottom: 10px;
}
.content{
	height: 230px;
	background: #fff !important;
	position: relative;
}
.title{
	margin: 10px 0;
}
.goods-title{
	font-size: 20px;
	color: #4c4c4c;
}
.goods-info{
	font-size: 14px;
	margin-left: 30px;
	color: #808080;
	vertical-align: -1px;
}
.swiper-item{
	width: 183px;
}
.agent-info>span{
	display: block;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.agent-info{
	width: 118px;
	margin-top: 10px;
	margin-left: auto;
	margin-right: auto;
}
.bg-gold{
	background-image: url(../../../assets/home/gold.png);
}
.bg-silver{
	background-image: url(../../../assets/home/silver.png);
}
.bg-copper{
	background-image: url(../../../assets/home/copper.png);
}
.face-bg{
	width: 100%;
	height: 100%;
	position: absolute;
}
.face{
	width: 118px;
	height: 144px;
	margin-left: auto;
	margin-right: auto;
	margin-top: 8px;
	position: relative;
}
.agent-img{
	width: 104px;
	height: 104px;
	border-radius: 50%;
	overflow: hidden;
	position: absolute;
	background-image: url(../../../assets/home/agent-default.png);
	background-size: 100% 100%;
	left: 0;
	right: 0;
	margin: 0 auto;
	top: 2px;
}
.prev:hover{
	background-image: url(../../../assets/home/swiper-prev-hover.png);
}
.prev{
	background-image: url(../../../assets/home/swiper-prev.png);
}
.next:hover{
	background-image: url(../../../assets/home/swiper-next-hover.png);
}
.next{
	background-image: url(../../../assets/home/swiper-next.png);
}
.sw-change{
	width: 50px;
	height: 230px;
	display: inline-block;
	cursor: pointer;
	background-repeat: no-repeat;
	background-position: center;
}
.swiper-group{
	width: @mw - 100;
	height: 230px;
	overflow: hidden;
	display: inline-block;
	border-left: 1px solid @border-two;
	border-right: 1px solid @border-two;
}
.agent-item{
	height: 230px;
	cursor: pointer;
}
</style>