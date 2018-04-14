
<template>

	<div id="imageView" v-bind:style="{ width: viewWith + 'px', height: viewHeight + 'px' }" v-show="showImageView">

		<div class="close" @click="close"><img src="/static/images/vectorIcion/cha.png" alt=""></div>
		<div class="left" @click="left">
			<span><img src="/static/images/vectorIcion/left.png" alt="" class="lefts"></span>
		</div>
		<div class="right" @click="right">
			<span><img src="/static/images/vectorIcion/right.png" alt="" class="rights"></span>
		</div>
		<div>
			<ul class="imageBox" v-bind:style="ulStyleObj">
				<li v-for="item,x in imgArr" v-bind:style="{ width: viewWith + 'px'}">
					<span><img :src="item" alt="123" class="imgs"></span>
				</li>
			</ul>
		</div>
		<!-- <div id="buttonBox">
			<Tag>全屏<img src="/static/images/vectorIcion/qp.png" alt=""></Tag>
			<Tag type="dot" color="blue"><img src="/static/images/vectorIcion/cha.png" alt=""></Tag>
		</div> -->
	</div>
</template>

<script>
export default {
    props: {
        imgArr: {
            type: Array
        },
        showImageView: {
            type: Boolean
        },
        imageIndex: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            imgStyle: [],
            viewWith: 800,
            viewHeight: 800,
            imageView: null,
            indexLeft: 10,
            showIndex: 0,
            point: {
                startX: 0,
                changeX: 0
            },
            ulStyleObj: {
                width: "800px",
                transition: "0.5s",
                transform: "scaleZ(1.01) translate3d(0, 0, 0)"
            },
            startTimeStap: null,
            endTimeStap: null,
            pEvent: {
                TOUCHSTART: "touchstart",
                TOUCHMOVE: "touchmove",
                TOUCHEND: "touchend"
            },
            flag: false,
            browser: "phone",
            // 拖拽距离配置
            dragConfig: {
                // 拖拽距离
                distance: 100,
                // 拖拽间隔
                timeStap: 200
            }
        };
    },
    methods: {
        //点击切换
        left(e) {
            if (this.showIndex > 0) {
                this.showIndex--;
            }
            this.transaletConfig();
        },
        right() {
            if (this.showIndex < this.imgArr.length - 1) {
                this.showIndex++;
            }
            this.transaletConfig();
        },
        transaletConfig() {
            let translate = -(this.showIndex * this.viewWith);
            this.ulStyleObj.transform =
                "scaleZ(1.01) translate3d(" + translate + "px, 0, 0)";
        },
        close() {
            this.$emit("hideImage");
        },
        // 计算布局
        initLayout() {
            this.ulStyleObj.width = this.imgArr.length * this.viewWith + "px";
            let translate = -(this.showIndex * this.viewWith);
            this.ulStyleObj.transform =
                "scaleZ(1.01) translate3d(" +
                (translate + this.point.changeX) +
                "px, 0, 0)";
            this.eventHandle();
        },
        // 事件处理
        eventHandle() {
            // const self = this;
            // if (!this.imageView) {
            //     return;
            // }
            // this.imageView.addEventListener(self.pEvent.TOUCHSTART, e => {
            // 	if(e.target.tagName == 'SPAN') {
            // 		  self.flag = true;
            //     if (this.browser === "pc") {
            //         self.point.StartX = e.clientX;
            //     } else {
            //         self.point.StartX = e.changedTouches[0].pageX;
            //     }
            // 	self.startTimeStap = new Date();
            // 	return false;
            // 	}
            // });
            // this.imageView.addEventListener(self.pEvent.TOUCHMOVE, e => {
            // 	console.log('111111111111');
            // 	if(e.target.tagName == 'SPAN') {
            // 		 if (!self.flag) {
            //         return;
            //     }
            //     // console.log(self);
            //     self.ulStyleObj.transition = "";
            //     if (this.browser === "pc") {
            //         self.point.changeX = e.clientX - self.point.StartX;
            //     } else {
            //         self.point.changeX =
            //             e.changedTouches[0].pageX - self.point.StartX;
            //     }
            //     var translate = -(self.showIndex * self.viewWith);
            //     self.ulStyleObj.transform =
            //         "scaleZ(1.01) translate3d(" +
            //         (translate + self.point.changeX) +
            // 		"px, 0, 0)";
            // 			return false;
            // 	}
            // });
            // this.imageView.addEventListener(self.pEvent.TOUCHEND, e => {
            // 	if(e.target.tagName == 'SPAN') {
            // 		 self.flag = false;
            //     self.ulStyleObj.transition = "0.5s";
            //     if (this.browser === "pc") {
            //         self.point.changeX = e.clientX - self.point.StartX;
            //     } else {
            //         self.point.changeX =
            //             e.changedTouches[0].pageX - self.point.StartX;
            //     }
            //     self.endTimeStap = new Date();
            //     var timeStap = self.endTimeStap - self.startTimeStap;
            //     var changeX = Math.abs(self.point.changeX);
            //     // console.log(changeX);
            //     if (
            //         changeX >= self.dragConfig.distance ||
            //         (timeStap < self.dragConfig.timeStap && changeX > 30)
            //     ) {
            //         if (self.point.changeX > 0) {
            //             self.showIndex--;
            //             if (self.showIndex <= 0) {
            //                 self.showIndex = 0;
            //             }
            //         } else {
            //             self.showIndex++;
            //             if (self.showIndex >= self.imgArr.length - 1) {
            //                 self.showIndex = self.imgArr.length - 1;
            //             }
            //         }
            //     }
            //     var translate = -(self.showIndex * self.viewWith);
            //     self.ulStyleObj.transform =
            //         "scaleZ(1.01) translate3d(" + translate + "px, 0, 0)";
            //     if (changeX < 5) {
            //         self.$emit("hideImage");
            //     }
            // 	}
            //     return false;
            // });
        },
        // 平台判断
        browserRedirect() {
            const userAgentInfo = navigator.userAgent;
            let Agents = [
                "Android",
                "iPhone",
                "SymbianOS",
                "Windows Phone",
                "iPad",
                "iPod",
                "Mobile"
            ];
            let flag = true;
            for (let v = 0; v < Agents.length; v++) {
                if (userAgentInfo.indexOf(Agents[v]) > 0) {
                    flag = false;
                    break;
                }
            }
            return flag ? "pc" : "phone";
        }
    },
    created() {
        // console.log(this);
        //  let tt = document.getElementById("imageView");
        // let vW = parseInt(tt.offsetWidth);
        // let vH = parseInt(document.getElementById("imageView").offsetHeight);
        // this.viewWith = vW;
        // this.viewHeight = vH;
    },
    mounted() {
        let tt = document.getElementById("imageView");
        // tt.style.width = '100%';
        // let heightT = document.getElementById('imageView');
        // tt.style.height = '90%';
        // let vW = parseInt(document.getElementById("imageView").offsetWidth);
        // let vH = parseInt(document.getElementById("imageView").offsetHeight);
        console.log(vW);
        console.log(window.innerWidth);
        let vW = window.innerWidth;
        let vH = window.innerHeight;
        // console.log(widthT,heightT);
        this.showIndex = this.imageIndex;

        this.$nextTick(function() {
            this.imageView = document.querySelector(".imageBox");
            this.viewWith = vW;
            this.viewHeight = vH;
            this.browser = this.browserRedirect();
            switch (this.browser) {
                case "pc":
                    this.pEvent.TOUCHSTART = "mousedown";
                    this.pEvent.TOUCHMOVE = "mousemove";
                    this.pEvent.TOUCHEND = "mouseup";
                    this.dragConfig.timeStap = 200;
                    this.dragConfig.distance =
                        parseInt(this.viewWith / 2) < 400
                            ? parseInt(this.viewWith / 2)
                            : 400;
                    break;
                case "phone":
                    this.pEvent.TOUCHSTART = "touchstart";
                    this.pEvent.TOUCHMOVE = "touchmove";
                    this.pEvent.TOUCHEND = "touchend";
                    this.dragConfig.timeStap = 150;
                    this.dragConfig.distance = parseInt(this.viewWith / 2);
                    break;
                default:
                    this.pEvent.TOUCHSTART = "touchstart";
                    this.pEvent.TOUCHMOVE = "touchmove";
                    this.pEvent.TOUCHEND = "touchend";
                    this.dragConfig.timeStap = 150;
                    this.dragConfig.distance = parseInt(this.viewWith / 2);
                    break;
            }
            // let imgWH = {}
            // let imgs = document.getElementsByClassName("imgs");

            // for (let i = 0; i < this.imgArr.length; i++) {
            //     // console.log(this.imgArr[i]);
            //     // console.log(imgs[i].style);
            //     let img = new Image();
            //     let img_url = this.imgArr[i];
            //     img.src = img_url;
            //     img.onload = () => {
            //         // console.log('width:'+img.width+',height:'+img.height);
            //         imgs[i].style.marginTop = "-" + img.height / 2 + "px";
            //         imgs[i].style.marginLeft = "-" + img.width / 2 + "px";
            //     };
            //     // this.imgStyle.push(imgWH)
            // }
            // let lefts = document.getElementsByClassName("lefts");
            // let rights = document.getElementsByClassName("rights");
            // let imgarr = [lefts,rights];

            //  for (let i = 0; i < imgarr.length; i++) {
            //    let img = new Image();
            //     let img_url = imgarr[i];
            //     img.src = img_url;
            //     img.onload = () => {
            //         // console.log('width:'+img.width+',height:'+img.height);
            //         lefts.style.marginTop = "-" + img.height / 2 + "px";
            //         rights.style.marginLeft = "-" + img.width / 2 + "px";
            //     };
            //  }

            // img2.src = lefts[0].src
            // console.log(lefts[0].src);
            // console.log(this.imgStyle);

            this.initLayout();
        });
    }
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
ul,
li {
    margin: 0;
    padding: 0;
}

#imageView {
    position: fixed;
    // width: 100%;
    // height: 100%;
    margin: auto;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    background: rgba(70, 69, 69, .9);
    z-index: 9999;
    overflow: hidden;
    & > div {
        width: 100%;
        height: 100%;
    }
    .imageBox {
        position: relative;
        z-index: 100;
        height: 100%;
        li {
            list-style: none;
            height: 100%;
            float: left;
            overflow: hidden;
            text-align: center;
            display: table;
            span {
                display: table-cell;
                vertical-align: middle;
            }
            .imgs {
                z-index: 1000;
            }
        }
    }
    .left,
    .right,
    .close {
        z-index: 1000;
        cursor: pointer;
        position: absolute;
        // height: 100%;
        width: 100px;
        display: table;
		text-align: center;
		opacity: .1;
        transition: all .3s;
        -moz-transition: all .3s; /* Firefox 4 */
        -webkit-transition: all .3s; /* Safari and Chrome */
        -o-transition: all .3s; /* Opera */
        span {
            display: table-cell;
            vertical-align: middle;
        }
    }
    .left {
        left: 0;
	}
	
    .right {
		right: 0;
		
	}
	.left:hover,
    .right:hover {
		opacity: 1;
		background-color: #403c3c;
	}
	
    .close {
        width: 50px;
        height: 50px;
        right: 100px;
        top: 30px;
	}
	.close:hover{
		opacity: 1;
	}
    //底部按钮配置框
    #buttonBox {
        position: absolute;
        bottom: 0;
        z-index: 1000;
        height: 10%;
        background: #fff;
        text-align: center;
        .ivu-tag {
            font-size: 16px;
            height: 95%;
            border-top: none !important;
            border-bottom: none !important;
            // margin: 0 auto;
        }
    }
}
</style>
