<template>
    <div class="container clearfix">
        <AHeader/>
        <Banner :banner="banner"/>
        <Notice :notice="notice"/>
        <!-- <Bases :general="general"/> -->
        <Hot :main="main" :time="countSec" />
        <Products :products="products"/>
        <!-- <Agent :agentMessage="agentMessage"/> -->
        <News :newList="newList" :textList="textList" :recordList="recordList"/>
        <!-- <Partner/> -->
        <AFooter/>
        <div class="sidebar-right" :class="{bitter:goTop}">
            <div class="customer-service sidebar-item">
                <!-- 在线客服 -->
                <div class="customer-icon sidebar-icon">
                    <img class="customer-show sidebar-show" src="../../assets/home/customer-service.png" alt="">
                    <img class="customer-hover sidebar-hover" src="../../assets/home/customer-service-hover.png" alt="">
                </div>
                <div class="customer-msg">

                </div>
            </div>
            <div class="app-download sidebar-item">
                <div class="app-icon sidebar-icon">
                    <img class="app-show sidebar-show" src="../../assets/home/APP-download.png" alt="">
                    <img class="app-hover sidebar-hover" src="../../assets/home/APP-download-hover.png" alt="">
                </div>
                <div class="app-msg">
                    <img src="../../assets/home/app-download-min.png" alt="">
                    <span>下载APP</span>
                </div>
            </div>
            <div class="service-phone sidebar-item">
                <div class="service-icon sidebar-icon">
                    <img class="service-show sidebar-show" src="../../assets/home/service-phone.png" alt="">
                    <img class="service-hover sidebar-hover" src="../../assets/home/service-phone-hover.png" alt="">
                </div>
                <div class="service-msg">
                    <p class="work-time">
                        <span>服务时间(工作日)</span>
                        <span>24小时为您服务</span>
                    </p>
                    <p class="hot-phone">
                        <span>热线电话:</span>
                        <span>400-838-8304</span>
                    </p>
                </div>
            </div>
            <div v-if="goTop" class="goTop sidebar-item" @click="goTopHeight">
                <img src="../../assets/home/come-back.png" alt="">
            </div>
        </div>
    </div>
</template>
<script>
import AHeader from "@/components/pure/common/AHeader";
import AFooter from "@/components/pure/common/AFooter";
import Banner from "@/components/pure/home/Banner";
import Notice from "@/components/pure/home/Notice";
import Bases from "@/components/pure/home/Bases";
import Hot from "@/components/pure/home/Hot";
import Products from "@/components/pure/home/Products";
import Agent from "@/components/pure/home/Agent";
import News from "@/components/pure/home/News";
import Partner from "@/components/pure/home/Partner";
import { countDownSec, countDownMiliSec } from "@/tools/date";

function getScrollTop() {
  //滚动条在Y轴上的滚动距离
  let scrollTop = 0,
    bodyScrollTop = 0,
    documentScrollTop = 0;
  if (document.body) {
    bodyScrollTop = document.body.scrollTop;
  }
  if (document.documentElement) {
    documentScrollTop = document.documentElement.scrollTop;
  }
  scrollTop =
    bodyScrollTop - documentScrollTop > 0 ? bodyScrollTop : documentScrollTop;
  return scrollTop;
}
function getScrollHeight() {
  //文档总高度
  let scrollHeight = 0,
    bodyScrollHeight = 0,
    documentScrollHeight = 0;
  if (document.body) {
    bodyScrollHeight = document.body.scrollHeight;
  }
  if (document.documentElement) {
    documentScrollHeight = document.documentElement.scrollHeight;
  }
  scrollHeight =
    bodyScrollHeight - documentScrollHeight > 0
      ? bodyScrollHeight
      : documentScrollHeight;
  return scrollHeight;
}
function getWindowHeight() {
  //浏览器视口高度
  let windowHeight = 0;
  if (document.compatMode == "CSS1Compat") {
    windowHeight = document.documentElement.clientHeight;
  } else {
    windowHeight = document.body.clientHeight;
  }
  return windowHeight;
}

export default {
  data() {
    return {
      goTop: false
    };
  },
  components: {
    AHeader,
    AFooter,
    Banner,
    Notice,
    Bases,
    Hot,
    Products,
    Agent,
    News,
    Partner
  },
  computed: {
    countSec() {
      let timeObj = null;
      let secKilling = false;
      // console.log(this.$store.state.home.main.startMilliseconds)
      if (this.$store.state.home.main.startMilliseconds > 0) {
        if (
          this.$store.state.home.main.startMilliseconds >
          this.$store.state.home.main.startMillFlag
        ) {
          secKilling = false;
          timeObj = countDownSec(this.$store.state.home.main.startMilliseconds);
        } else {
          secKilling = true;
          timeObj = countDownMiliSec(
            this.$store.state.home.main.startMilliseconds
          );
        }
      } else {
        if (
          this.$store.state.home.main.endMilliseconds >
          this.$store.state.home.main.endMillFlag
        ) {
          secKilling = false;
          timeObj = countDownSec(this.$store.state.home.main.endMilliseconds);
        } else {
          secKilling = true;
          timeObj = countDownMiliSec(
            this.$store.state.home.main.endMilliseconds
          );
        }
      }
      // console.log(typeof(this.$store.state.home.main.endMilliseconds),typeof(this.$store.state.home.main.endMillFlag))
      // console.log(secKilling)
      return Object.assign(timeObj, { secKilling: secKilling });
    },
    recordList() {
      return this.$store.state.home.record;
    },
    agentMessage() {
      return this.$store.state.home.agentMessage;
    },
    notice() {
      return this.$store.state.home.notice;
    },
    textList() {
      return this.$store.state.home.textList;
    },
    newList() {
      return this.$store.state.home.afficheList;
    },
    products() {
      return this.$store.state.home.products;
    },
    main() {
      // console.log('成功')
      return this.$store.state.home.main;
    },
    general() {
      return this.$store.state.home.general;
    },
    banner() {
      return this.$store.state.home.banners;
    }
  },
  mounted() {
    this.$store.dispatch("HOMERECORD");
    this.$store.dispatch("HOMEAGENT");
    this.$store.dispatch("HOMENOTICE");
    this.$store.dispatch("HOMETEXTLIST");
    this.$store.dispatch("HOMEPRODUCT");
    this.$store.dispatch("HOMEGENERAL");
    this.$store.dispatch("HOMEBANNER");
  },
  created() {
    setTimeout(() => {
      window.addEventListener("scroll", () => {
        // console.log(window.scrollY)
        if (getScrollTop() + getWindowHeight() == getScrollHeight()) {
          // 　　　　console.log("已经到底部了！!");
          this.goTop = true;
        } else {
          this.goTop = false;
        }
      });
    }, 1000);
  },
  methods: {
    goTopHeight() {
      // window.addEventListener('scrollTo',0)
      // window.scrollTo(0,0)
      var gotoTop = function() {
        var currentPosition =
          document.documentElement.scrollTop || document.body.scrollTop;
        currentPosition -= 10;
        if (currentPosition > 0) {
          window.scrollTo(0, currentPosition);
        } else {
          window.scrollTo(0, 0);
          clearInterval(timer);
          timer = null;
        }
      };
      var timer = setInterval(gotoTop, 1);
    }
  }
};
</script>
<style lang="less" scoped>
.container {
  position: relative;
}
.sidebar-right.bitter {
  height: 168px;
}
.sidebar-right {
  width: 50px;
  height: 140px;
  position: fixed;
  right: 0;
  top: 50%;
  background: #fff;
  z-index: 99999;
}
.sidebar-item {
  padding: 7px 10px;
  cursor: pointer;
  position: relative;
}
.sidebar-icon {
  width: 30px;
  height: 30px;
}
.customer-service {
  cursor: auto;
}
.customer-hover,
.app-hover,
.service-hover {
  display: none;
}
// .customer-service:hover{
//     background: #ff7542;
// }
// .customer-service:hover .customer-show{
//     display: none;
// }
// .customer-service:hover .customer-hover{
//     display: block;
// }
.app-msg {
  width: 110px;
  height: 140px;
  position: absolute;
  top: 0;
  right: 50px;
  background: #ff7542;
  display: none;
}
.app-msg img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  // margin-top: 5px;
  width: 100%;
}
.app-msg > span {
  font-size: 14px;
  color: #fff;
  display: block;
  text-align: center;
  margin-top: 7px;
}
.app-download:hover .app-msg {
  display: block;
}
.app-download:hover {
  background: #ff7542;
}
.app-download:hover .app-show {
  display: none;
}
.app-download:hover .app-hover {
  display: block;
}
.service-msg {
  color: #fff;
  width: 140px;
  height: 90px;
  position: absolute;
  top: 0;
  right: 50px;
  background: #ff7542;
  font-weight: 600;
  display: none;
}
.work-time {
  padding-left: 10px;
  margin-top: 10px;
}
.hot-phone {
  padding-left: 10px;
  margin-top: 5px;
}
.service-msg span {
  display: block;
}
.service-phone:hover .service-msg {
  display: block;
}
.service-phone:hover {
  background: #ff7542;
}
.service-phone:hover .service-show {
  display: none;
}
.service-phone:hover .service-hover {
  display: block;
}
</style>


