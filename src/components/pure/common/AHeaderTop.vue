<template>
    <div class="clearfix top-bar">
        <div class="container">
            <span class="phone">
                <Icon class="icon-top" type="ios-telephone" size="14"></Icon>
                客服专线：400-838-8304
            </span>
            <span class="phone app-dl">
                <Icon class="icon-top" type="android-phone-portrait" size="14"></Icon>
                手机客户端
                <img class="app-download" :src="appDownloadImg" alt="">
            </span>
            <div class="clearfix fr">
                <div class="fl user-option">
                    <span>
                        您好，
                        <router-link class="to-login" to="/login">请登录</router-link>
                        <a v-if="mobile" class="to-regist" @click="regist">注册</a>
                        <router-link v-else class="to-regist" to="/">注册</router-link>
                    </span>
                </div>
                <div class="fr">
                    <div class="icon-w wechat">
                        <img class="wechat-img" :src="wechatImg" alt="">
                    </div>
                    <div class="icon-w microblog" @click="weibo"></div>
                    <span class="cue">市场有风险，投资需谨慎</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { IMG, WEIBO } from "@/config/url";
export default {
  data() {
    return {
      appDownloadImg: IMG + "/common/header/appDownload.png",
      wechatImg: IMG + "/common/header/wechat.png",
      mobile: null
    };
  },
  mounted() {
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
    weibo() {
      window.open(WEIBO, "微博");
    },
    regist() {
      window.location.href = "/member/regist";
    }
  }
};
</script>
<style lang="less" scoped="scoped">
@import "../../../config/base.less";
.top-bar {
  background-color: #f7f7f7;
  color: #808080;
  height: 28px;
  line-height: 28px;
}

.container {
  width: 1200px;
  min-width: 1000px; // background: green;
  margin: 0 auto;
}

.phone {
  margin-right: 34px;
}

.icon-top {
  margin-right: 5px;
}

.app-dl {
  cursor: pointer;
  position: relative;
}

.app-download {
  position: absolute;
  top: 0;
  width: 0;
  opacity: 0;
  left: -100px;
  transition: top 0.8s, opacity.8s;
  z-index: 10;
}

.app-dl:hover .app-download {
  top: 1rem;
  opacity: 1;
  width: 270px;
}

.user-option {
  margin-right: 68px;
}

.to-login {
  // color: #808080; // margin-left: 20px;
  color: @theme;
}

.to-regist {
  color: #808080;
  margin-left: 16px;
}

.icon-w {
  display: inline-block;
  width: 16px;
  height: 1em;
  cursor: pointer;
  background-size: 100% 100%;
  margin-right: 34px;
}

.wechat-img {
  position: absolute;
  top: 0;
  width: 0;
  left: -125px;
  opacity: 0;
  transition: opacity 0.8s, top.8s;
  z-index: 10;
}

.wechat:hover .wechat-img {
  display: block;
  opacity: 1;
  width: 270px;
  top: 12px;
}

.wechat {
  position: relative;
  background-image: url(../../../assets/icon/top-wechat-default.png);
}

.wechat:hover {
  background-image: url(../../../assets/icon/top-wechat-active.png);
}

.microblog {
  position: relative;
  background-image: url(../../../assets/icon/top-weibo-default.png);
}

.microblog:hover {
  background-image: url(../../../assets/icon/top-weibo-active.png);
}
.cue {
  color: #000;
}
</style>


