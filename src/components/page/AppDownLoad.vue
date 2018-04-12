<template>
    <div class="clearfix">
        <AHeader />
        <div class="app-content clearfix wrap-minw">
            <div class="plant plant-one">
                <div class="content">
                    <div class="plant-one-img fl bottom-shadow item" :class="{show:show.one}">
                        <img :src="plantOne.img" alt="">
                    </div>
                    <img class="plant-one-msg fr item" :class="{show:show.one}" :src="plantOne.msg" alt="">
                </div>
            </div>
            <div class="plant plant-two">
                <div class="content">
                    <div class="plant-two-img fr bottom-shadow item" :class="{show:show.two}">
                        <img :src="plantTwo.img" alt="">
                    </div>
                    <img class="plant-two-msg fl item" :class="{show:show.two}" :src="plantTwo.msg" alt="">
                </div>
            </div>
            <!-- <div class="plant plant-three">
                <div class="content">
                    <div class="stack-content fl clearfix" :class="{show:show.three}">
                        按照bottom、middle、top排列是有原因的
                        <img class="stack-item bottom" :src="plantThree.bottom" alt="">
                        <img class="stack-item middle" :src="plantThree.middle" alt="">
                        <img class="stack-item top" :src="plantThree.top" alt="">
                    </div>
                    <img class="plant-three-msg fr item" :class="{show:show.three}" :src="plantThree.msg" alt="">
                </div>
            </div> -->
            <div class="plant plant-four">
                <div class="content">
                    <div class="plant-four-img fl bottom-shadow item" :class="{show:show.four}">
                        <img :src="plantFour.img" alt="">
                    </div>
                    <img class="plant-four-msg fr item" :class="{show:show.four}" :src="plantFour.msg" alt="">
                </div>
            </div>
            <!-- <div v-if="trade" class="plant plant-five">
                <div class="content">
                    <div class="plant-five-img fr bottom-shadow item" :class="{show:show.five}">
                        <img :src="plantFive.img" alt="">
                    </div>
                    <img class="plant-five-msg fl item" :class="{show:show.five}" :src="plantFive.msg" alt="">
                </div>
            </div> -->
        </div>
    </div>
</template>
<script>
import { IMG } from "@/config/url";
import CHeader from "@/components/pure/common/CHeader";
import AHeader from "@/components/pure/common/AHeader";
export default {
  data() {
    return {
      trade: true,
      plantOne: {
        img: IMG + "/app-download/p-o-img.png",
        msg: IMG + "/app-download/p-o-msg.png"
      },
      plantTwo: {
        img: IMG + "/app-download/p-t-img.png",
        msg: IMG + "/app-download/p-t-msg.png"
      },
      plantThree: {
        msg: IMG + "/app-download/p-three-msg.png",
        top: IMG + "/app-download/plant-three-top.png",
        middle: IMG + "/app-download/plant-three-middle.png",
        bottom: IMG + "/app-download/plant-three-bottom.png"
      },
      plantFour: {
        img: IMG + "/app-download/p-f-img.png",
        msg: IMG + "/app-download/p-f-msg.png"
      },
      plantFive: {
        img: IMG + "/app-download/p-five-img.png",
        msg: IMG + "/app-download/p-five-msg.png"
      },
      show: {
        one: true,
        two: false,
        three: false,
        four: false,
        five: false
      }
    };
  },
  // created(){
  //     document.title = '下载余惠宝APP，开始您的投资吧！'
  // },
  mounted() {
    let VM = this;
    window.onscroll = VM.scrollEventHeight;
  },
  methods: {
    scrollEventHeight() {
      let height =
        document.documentElement.scrollTop || document.body.scrollTop;
      this.height = height;
      this.show = {
        one: height < 840 ? true : false,
        two: height >= 660 && height < 1580 ? true : false,
        // three: height >= 1580 && height < 2490 ? true : false,
        four: height >= 1580 && height < 3400 ? true : false,
        // four: height >= 2490 && height < 3400 ? true : false,
        five: height > 3150 ? true : false
      };
    }
  },
  components: {
    CHeader,
    AHeader
  }
};
</script>
<style lang="less" scoped>
.bottom-shadow::before {
  position: absolute;
  content: "";
  height: 30px;
  top: 102%;
  left: 5%;
  width: 90%;
  background: radial-gradient(
    ellipse at center,
    rgba(0, 0, 0, 0.35) 0%,
    transparent 70%
  );
  transition-duration: 0.3s;
}
.app-title {
  position: fixed;
  top: 0;
  z-index: 1;
}
.app-content {
  width: 100%;
  // margin-top: 60px;
  // z-index: -1;
}
.plant {
  width: 100%;
  overflow: hidden;
  background-position: center;
}
.plant-one {
  height: 933px;
  background: url(/res/app-download/plant-one-bg.png);
}
.plant-two {
  height: 962px;
  background: url("/res/app-download/plant-two-bg.png");
}
.plant-three {
  height: 863px;
  background: url("/res/app-download/plant-three-bg.png");
}
.plant-four {
  height: 866px;
  background: url("/res/app-download/plant-four-bg.png");
}
.plant-five {
  height: 865px;
  background: url("/res/app-download/plant-five-bg.png");
}
.content {
  width: 1200px;
  margin: 0 auto;
  height: 100%;
  // perspective: 100vw;
}
.item {
  transition: all 1s;
}
.plant-one-img {
  margin-top: 170px;
  opacity: 0;
}
.plant-one-img.show {
  margin-left: 74px;
  opacity: 1;
  position: relative;
  animation: rowShake 2s ease 1s infinite;
}
.plant-one-msg {
  margin-top: 170px;
  opacity: 0;
}
.plant-one-msg.show {
  margin-right: 148px;
  opacity: 1;
  position: relative;
  // animation: rowShake 2s ease 1s infinite;
}
.plant-two-img {
  margin-top: 166px;
  opacity: 0;
}
.plant-two-img.show {
  margin-right: 78px;
  opacity: 1;
  position: relative;
  animation: colShake 2s ease 1s infinite;
}
.plant-two-msg {
  margin-top: 242px;
  opacity: 0;
}
.plant-two-msg.show {
  margin-left: 72px;
  opacity: 1;
}
.stack-content {
  margin-top: 202px;
  perspective: 100vw;
  perspective-origin: 50% 0%;
  transition: all 1s;
  opacity: 0;
}
.stack-content.show {
  opacity: 1;
  margin-left: 172px;
}
.stack-item {
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.8s;
  transition-delay: 1s;
}
.show .stack-item {
  box-shadow: -3px 2px 20px 0 #4c4c4c;
  // transform: rotate3d(3,2,-3,10deg);
  transform: rotateY(20deg) rotateZ(-30deg) rotateX(30deg);
  transform-origin: left center;
  // transform-style: preserve-3d;
}
.show .stack-item:hover {
  z-index: 9999;
  left: 50px;
  cursor: pointer;
  transition-delay: 0s;
}
.show .top {
  left: 0;
  top: -90px;
  animation: randomShake 4s ease 2.1s infinite;
}
.show .middle {
  animation: randomShake 4s ease 1.6s infinite;
}
.show .bottom {
  top: 90px;
  left: 0;
  animation: randomShake 4s ease 1s infinite;
}
.plant-three-msg {
  opacity: 0;
  margin-top: 178px;
}
.plant-three-msg.show {
  opacity: 1;
  margin-right: 144px;
}
.plant-four-img {
  opacity: 0;
  margin-top: 160px;
  position: relative;
  animation: rowShake 2s ease 1s infinite;
}
.plant-four-img.show {
  opacity: 1;
  margin-left: 72px;
}
.plant-four-msg {
  margin-top: 194px;
  opacity: 0;
}
.plant-four-msg.show {
  opacity: 1;
  margin-right: 154px;
}
.plant-five-img {
  opacity: 0;
  margin-top: 130px;
  position: relative;
  animation: colShake 2s ease 1s infinite;
}
.plant-five-img.show {
  opacity: 1;
  margin-right: 78px;
}
.plant-five-msg {
  margin-top: 210px;
  opacity: 0;
}
.plant-five-msg.show {
  opacity: 1;
  margin-left: 72px;
}
@keyframes colShake {
  0% {
    top: 0;
  }
  50% {
    top: 10px;
  }
  100% {
    top: 0px;
  }
}
@keyframes rowShake {
  0% {
    left: 0;
  }
  50% {
    left: 10px;
  }
  100% {
    left: 0;
  }
}
@widthRange: 5px;
@heightRange: 5px;

@keyframes randomShake {
  0% {
    margin-top: -@heightRange;
    margin-left: 0;
  }
  25% {
    margin-top: @heightRange;
    margin-left: -@widthRange;
  }
  50% {
    margin-top: @heightRange;
    margin-left: 0;
  }
  75% {
    margin-top: @heightRange;
    margin-left: @widthRange;
  }
  100% {
    margin-top: -@heightRange;
    margin-left: 0;
  }
}
</style>


