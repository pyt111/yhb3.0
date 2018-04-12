<template>
    <div class="clearfix head" :class="{allHead:allHead}">
        <div class="container">
            <div class="logo fl">
                <router-link to="/index">
                    <img class="logo-img" :src="logo" alt="">
                </router-link>
            </div>
            <nav class="fr nav-one">
                <div class="nav-item">
                    <router-link to="/index" class="level-one fl" active-class="dots" exact>首页</router-link>
                </div>
                <div class="nav-item">
                    <router-link to="/product" class="level-one fl" active-class="dots" exact>我要理财</router-link>
                </div>
                <!-- <div class="nav-item">
                    <router-link to="/borrow" class="level-one fl" active-class="dots" exact>我要借款</router-link>
                </div> -->
                <div class="nav-item">
                    <a v-if="mobile" href="/html/appDownload.html" class="level-one fl">APP下载</a>
                    <router-link v-else to="/app" class="level-one fl" active-class="dots" exact>APP下载</router-link>
                </div>
                <div class="nav-item info-show more-items">
                    <router-link to="/publicity" class="level-one fl" active-class="dots">
                        信息披露
                        <Icon type="arrow-down-b" class="drop-arrow"></Icon>
                    </router-link>
                    <nav class="nav-two clearfix">
                        <router-link to="/publicity" class="level-two">平台介绍</router-link>
                        <router-link to="/publicity/safeConduct" class="level-two">安全保障</router-link>
                        <router-link to="/publicity/news" class="level-two">新闻公告</router-link>
                        <router-link to="/publicity/aptitude" class="level-two">荣誉资质</router-link>
                        <router-link to="/publicity/partner" class="level-two">合作伙伴</router-link>
                    </nav>
                </div>
                <!-- <div class="nav-item info-show more-items">
                    <img class="user-face" :src="face" alt="">
                    <router-link to="/account" class="level-one fl">
                        我的账户
                        <Icon type="arrow-down-b" class="drop-arrow"></Icon>
                    </router-link>
                    <nav class="nav-two clearfix">
                        <router-link to="/account" class="level-two">账户总览</router-link>
                        <router-link to="/account/financing" class="level-two">我的理财</router-link>
                        <router-link to="/account/current" class="level-two">活期宝</router-link>
                        <router-link to="/account/coupon" class="level-two">我的礼券</router-link>
                        <router-link to="/account/warranty" class="level-two">我的保单</router-link>
                        <router-link to="/account/information" class="level-two">个人资料</router-link>
                        <router-link to="/account/banksupervise" class="level-two">银行卡管理</router-link>
                    </nav>
                </div> -->
            </nav>
        </div>
        <div class="fixed wrap-minw"></div>
    </div>
</template>
<script>
import { IMG } from "@/config/url";
export default {
  data() {
    return {
      logo: IMG + "/common/header/logo.png",
      face: IMG + "/common/header/logo.png",
      allHead: false,
      mobile: null
    };
  },
  mounted() {
    let VM = this;
    window.onscroll = VM.scrollEventHeight;
    if (
      navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      )
    ) {
      this.mobile = true;
      // console.log('手机端',this.mobile)
    } else {
      this.mobile = false;
      // console.log('客户端')
    }
  },
  methods: {
    scrollEventHeight() {
      // console.log("执行");
      let height =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop;
      this.height = height;
      if (height >= 28) {
        this.allHead = true;
      } else {
        this.allHead = false;
      }
    }
  }
};
</script>
<style lang="less" scoped="scoped">
@import "../../../config/base.less";
.allHead {
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
}
.head {
  min-width: 1200px;
  background: #fff;
  height: 90px;
}

.container {
  width: 1200px;
  margin: 0 auto;
  height: 100%;
}

.logo {
  display: inline-block;
  width: 290px;
  height: 100%;
  line-height: 90px;
}

.logo-img {
  display: inline-block;
  vertical-align: middle;
}

.nav-one {
  display: inline-block;
  height: 100%;
  line-height: 90px;
}

.nav-item {
  display: inline-block;
  margin-right: 18px;
  margin-left: 40px;
}

.level-one {
  font-size: 18px;
  color: #4c4c4c;
  font-weight: 600;
}

.level-one:hover {
  color: #ff7542;
}

.dots {
  color: #ff7542;
}

.info-show {
  position: relative;
}

.info-show:hover {
  color: #ff7542;
}

.nav-two {
  position: absolute;
  top: 70px;
  left: -10px;
  font-size: 14px;
  color: #4c4c4c;
  width: 120px;
  display: none;
  background: #fff;
  border-radius: @br;
  overflow: hidden;
  z-index: 10;
}

.nav-two a {
  display: block;
  line-height: 40px;
  color: #4c4c4c;
  text-indent: 1em;
  transition: text-indent 0.2s;
}

.nav-two a:hover {
  text-indent: 1.8em;
  background: #f7f7f7;
}

.more-items:hover .nav-two {
  display: block;
}

.drop-arrow {
  transition: transform 0.5s;
}

.more-items:hover .drop-arrow {
  transform: rotateZ(180deg);
}
// .user-face{
//     display: inline-block;
//     height: 40px;
//     width: 40px;
//     border-radius: 50%;
//     overflow: hidden;
//     float: left;
//     margin-top: 20%;
//     margin-right: 10px;
//     // background-image: url(../../../assets/icon/user-face-bg.png);
//     // background-size: 100% 100%;
// }
.fixed {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: -1;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0 0 10px 0 #808080;
}
</style>


