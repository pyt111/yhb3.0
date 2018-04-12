<template>
	<div class="clearfix">
		<div class="top-img">
			<img :src="img" alt="">
		</div>
		<span class="title">
			<em class="fl"></em>
			荣誉资质
			<em class="fr"></em>
		</span>
		<Tabs value="name1">
			<TabPane v-for="item,index in items" :key="item.id" :label="item.label" :name="item.name">
				<div class="content">
					<Card v-for="seditem,index in item.list" :key="seditem.id">
						<div class="imgBox">
							<img :src="seditem.small" alt="" style="" @click="modalShow">
						</div>
						<h4 class="text-f">{{seditem.explain}}</h4>
					</Card>
				</div>
			</TabPane>
		</Tabs>
		<Modal v-model="modal1" width='700'>
			<Carousel v-model="value1" loop>
			<CarouselItem >
				<div class="demo-carousel">1</div>
			</CarouselItem>
			<!-- <CarouselItem>
				<div class="demo-carousel">2</div>
			</CarouselItem>
			<CarouselItem>
				<div class="demo-carousel">3</div>
			</CarouselItem>
			<CarouselItem>
				<div class="demo-carousel">4</div>
			</CarouselItem> -->
		</Carousel>
		<div slot="footer" >
           <!-- <button disabled="disabled"></button> -->
        </div>
		</Modal>
		
	</div>
</template>
<script>
import { IMG } from "@/config/url";
export default {
    data() {
        return {
			modal1:false,
			value1:0,
            img: IMG + "/publicity/aptitude/aptitude-banner.png",
            modelSwitch: false,
            modelImg: "",
            items: [
                {
                    name: "name1",
                    label: "获得奖项",
                    list: [
                        {
                            small:
                                "/static/images/zizhirongyu/awards_one_small.png",
                            img:
                                "/static/images/zizhirongyu/awards_one_big.png",
                            alt: "卓越风控奖",
                            explain: "2017年互联网金融卓越风控奖"
                        }
                    ]
                },
                {
                    name: "name2",
                    label: "企业许可证",
                    list: [
                        {
                            small: "/static/images/zizhirongyu/awards_one.png",
                            img: "/static/images/zizhirongyu/awards_one.png",
                            alt: "卓越风控奖",
                            explain: "2017年互联网金融卓越风控奖"
                        }
                    ]
                },
                {
                    name: "name3",
                    label: "荣誉称号",
                    list: [
                        {
                            small: "/static/images/zizhirongyu/awards_one.png",
                            img: "/static/images/zizhirongyu/awards_one.png",
                            alt: "卓越风控奖",
                            explain: "2017年互联网金融卓越风控奖"
                        }
                    ]
                },
                {
                    name: "name4",
                    label: "荣誉证书",
                    list: [
                        {
                            small: "/static/images/zizhirongyu/awards_one.png",
                            img: "/static/images/zizhirongyu/awards_one.png",
                            alt: "卓越风控奖",
                            explain: "2017年互联网金融卓越风控奖"
                        }
                    ]
                }
            ]
            // apts: [
            //     {
            //         thumbnail: IMG + "/publicity/aptitude/sm-one.png",
            //         amplify: IMG + "/publicity/aptitude/l-one.jpg",
            //         desc: "营业执照"
            //     },
            //     {
            //         thumbnail: IMG + "/publicity/aptitude/sm-six.png",
            //         amplify: IMG + "/publicity/aptitude/l-six.png",
            //         desc: "荣誉证书"
            //     },
            //     {
            //         thumbnail: IMG + "/publicity/aptitude/sm-seven.png",
            //         amplify: IMG + "/publicity/aptitude/l-seven.png",
            //         desc: "荣誉证书"
            //     },
            //     {
            //         thumbnail: IMG + "/publicity/aptitude/sm-eight.png",
            //         amplify: IMG + "/publicity/aptitude/l-eight.png",
            //         desc: "荣誉证书"
            //     }
            // ]
        };
    },
    mounted() {
        console.log(process.env);
        let bread = [
            {
                name: "余惠宝",
                url: "/"
            },
            {
                name: "信息披露",
                url: "/publicity"
            },
            {
                name: "荣誉资质",
                url: ""
            }
        ];
        this.$store.dispatch("publicityBreadChange", bread);
        this.$store.dispatch("publicityNavChange", 3);
    },
    methods: {
		modalShow() {
			this.modal1 = true;
		},
        isShow(src) {
            // this.modelImg = src;
            // this.modelSwitch = true;
        }
    }
};
</script>
<style lang="less">
.clearfix {
    .ivu-card {
        // margin: 0 auto 40px;
        .imgBox {
            text-align: center;
            width: 305px;
            height: 146px;
        }
        .text-f {
            text-align: center;
            padding: 10px 0;
        }
        img {
            cursor: pointer;
            // display: inherit;
            border-radius: 4px 4px 0 0;
            width: 100%;
            height: 100%;
        }
    }
    .cards {
        // width: 320px;
        // height: 150px;
    }
    .ivu-card:hover {
        box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.5);
    }
    .ivu-card-body {
        padding: 0;
    }
    .ivu-tabs-nav {
        width: 95%;
        .ivu-tabs-tab {
            text-align: center;
            width: 25%;
        }
	}
	
}
.ivu-modal-close{
	display: none;
}
.ivu-modal-footer{
		display: none;
	}
#apt-model .ivu-modal-header-inner {
    text-align: left;
}
#apt-model .ivu-modal-wrap {
    text-align: center;
}
#apt-model .ivu-modal {
    display: inline-block;
    width: auto !important;
}
#apt-model .ivu-modal-body {
    padding: 0;
    line-height: 0;
}
#apt-model .ivu-modal-header,
#apt-model .ivu-modal-footer,
#apt-model .ivu-modal-close {
    display: none;
}
.vertical-center-modal {
    display: flex;
    align-items: center;
    justify-content: center;

    .ivu-modal {
        top: 0;
    }
}
</style>

<style lang="less" scoped>
.title {
    display: block;
    font-size: 18px;
    text-align: center;
    margin: 54px 0 30px 0;
    position: relative;
}
.title > em {
    display: inline-block;
    width: 30px;
    height: 2px;
    background: #4d4d4d;
    margin-top: 12px;
}
.title > em:nth-child(1) {
    position: absolute;
    left: 38%;
}
.title > em:nth-child(2) {
    position: absolute;
    right: 38%;
}
.content {
    margin-top: 35px;
    padding: 0 48px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.apt-item {
    width: 350px;
    height: 140px;
    margin-bottom: 52px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.apt-item > img {
    width: 100%;
}
.apt-item:hover .cover {
    transform: translate(0);
}
.apt-item:hover .cover-circle {
    transform: scale(2.5);
}
.cover {
    width: 100%;
    height: 140px;
    position: absolute;
    line-height: 140px;
    top: 0;
    left: 0;
    text-align: center;
    transform: translate(120%);
}
.cover-circle {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    left: -50%;
    top: -105px;
    background: #88c0ff;
    padding-top: 100%;
    transform: scale(0);
    transform-origin: 50% 50%;
    transition: all 0.5s cubic-bezier(0.22, 0.58, 0.12, 0.98);
    overflow: hidden;
}
.desc {
    color: #fff;
    font-size: 16px;
}
</style>


