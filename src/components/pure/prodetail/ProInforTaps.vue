<template>
    <div class="proinfo-tabs">
		<div class="tab-title">
			<div class="tab-title-item">
				<ul class="clearfix">
					<li class="fl tab-desc" v-for="item,index in tabs" @click="tabClick(index)" :class="{show:active === item.active}">{{item.name}}</li>
				</ul>
			</div>
		</div>
		<div class="tab-info">
			<div v-if="active === 1" class="tab-item safeinsur" :class="{showInfo:active === 1}">
				<p v-if="taps.safeInsur" v-html="taps.safeInsur"></p>
				<div v-else class="no-dope">
					<img class="no-msg " src="../../../../static/news/no-image.png" alt="">	
					<span class="no-desc">此处还没有借款企业信息，请耐心等待！</span>
				</div>
			</div>
			<div v-else-if="active === 2" class="tab-item" :class="{showInfo:active === 2}">
				<p v-if="taps.enterprise" v-html="taps.enterprise"></p>
				<div v-else class="no-dope">
					<img class="no-msg" src="../../../../static/news/no-image.png" alt="">
					<span class="no-desc">此处还没有安全保障信息，请耐心等待！</span>
				</div>
			</div>
			<div v-else-if="active === 3" class="tab-item" :class="{showInfo:active === 3}">
				<ul v-if="this.$store.state.prodetail.records != '' " class="recordT-item clearfix">
					<div class="record-title">
						<span class="re-col">投资人</span>
						<span class="re-col">投资人电话</span>
						<span class="re-col">投资金额（元）</span>
						<span class="re-col">投资时间</span>
					</div> 
					<swiper class="swiper-group" :options="swiperOption" ref="mySwiper">
						<swiper-slide class="swiper-no-swiping swiper-item" v-for="item,index in this.$store.state.prodetail.records" key="index">
							<li class="record-item ">
								<span class="re-col">{{item.name}}</span>
								<span class="re-col">{{item.phone}}</span>
								<span class="re-col">
									<span class="re-money">{{item.money}}</span>元</span>
								<span class="re-col">{{item.time}}</span>
							</li>
						</swiper-slide>
						<div class="swiper-pagination" slot="pagination"></div>
					</swiper>
				</ul>
				<div v-else>
					<div class="no-dope records">
						<img class="no-msg" src="../../../../static/news/no-image.png" alt="">
						<span class="no-desc">目前还没有投资记录，赶快行动起来吧！</span>
					</div>
				</div>
			</div>
			<div v-else class="tab-item" :class="{showInfo:active === 4}">
				<p v-if="taps.receive" v-html="taps.receive"></p>
				<div v-else class="no-dope">
					<img class="no-msg" src="../../../../static/news/no-image.png" alt="">	
					<span class="no-desc">此处还没有回款计划信息，请耐心等待！</span>
				</div>
			</div>
		</div>
    </div>
</template>
<script>
export default {
	props: ['taps','record'],
	name: "carrousel",
    data(){
        return{
			active:1,
            swiperOption:{
				autoplay:true,
				autoplayDisableOnInteraction:false,
                speed:1000,
                loop:true,
                loopedSlides:12,
                slidesPerView:'auto',
				direction:'vertical',
				// observeParents:true,
				// observer:true,
				// slidesPerColumnFill:'row',
				// pagination:'.swiper-pagination',
            },
			// swiperSlides:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
			tabs:[
				{
					name:'借款企业信息',
					active:1,
				},
				{
					name:'安全保障',
					active:2,
				},
				{
					name:'投资记录',
					active:3
				},
				{
					name:'回款计划',
					active:4
				}
			]
        }
	},
	methods:{
		tabClick(e){
			console.log("666"+e)
			this.active = e + 1;
		}
	}
}
</script>
<style lang="less">
.proinfo-tabs .ivu-tabs-nav .ivu-tabs-tab:hover {
	color: #ff7542;
}

.proinfo-tabs>.ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab {
	border-radius: 0;
	background: #fff;
}

.proinfo-tabs>.ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab-active {
	border-top: 1px solid #3399ff;
}

.proinfo-tabs>.ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab-active:before {
	content: '';
	display: block;
	width: 100%;
	height: 1px;
	background: #3399ff;
	position: absolute;
	top: 0;
	left: 0;
}

.proinfo-tabs .ivu-tabs-tabpane {
	padding-left: 50px;
}

.proinfo-tabs .ivu-tabs-tabpane {
	font-size: 14px !important;
}
</style>
<style lang="less" scoped>
.tab-title{
	border-bottom:1px solid #dddee1;
	margin-bottom:16px;
	outline:none;
}
.tab-title-item{
	height: 35px;
	margin-bottom:-1px;
	line-height:1.5;
	font-size:14px;
	box-sizing:border-box;
	position: relative;
	overflow: hidden;
	white-space: nowrap;	
}
.tab-title ul{
	padding-left:0;
	margin:0;
	float: left;
}
.tab-desc{
	height: 34px;
	line-height:24px;
	padding:5px 16px 4px;
	border:1px solid #e5e5e5;
	border-bottom:0;		
	cursor: pointer;
	margin-right:5px;
}
.tab-desc.show{
	border-top:2px solid #39f;
	// border-bottom:none;
	color:#ff7542;
	height: 36px;
}
.tab-desc.show::before{
	content:"";
	display: block;
	// width:100%;
	height: 1px;
	background:#39f;
	position: absolute;
	top:0;
	left: 0;
}
.tab-desc.show::after{
	clear: both;
}
.tab-info{
	padding-bottom:20px;
}
.tab-item{
	position: relative;
	padding-left:50px;
	font-size:14px !important;
	color:#495060;
}
.showInfo{
	min-height:280px;
}
.recordT-item{
	max-height:511px;
	overflow: auto;
}
.swiper-container{
	z-index: 0;
}
.swiper-group{
	width:100%;
    min-height: 258px;
    margin-top: 10px;
}
.swiper-item{
    height: 40px;
    font-size: 12px;
}
.re-col{
    display: inline-block;
    width:22%;
    // font-size:12px;
    text-align:center;
}
.re-money{
    color:#ff7542;
}
.card-item{
	max-height:530px;
	overflow: auto;
	position: relative;
}
.no-dope{
	margin-top:8%;
	padding-left:27%;
}
.no-desc{
	display:inline-block;
	font-size:24px;
	width:26%;
	vertical-align:30px;
}
.records .no-desc{
	width:30%;
}
</style>


