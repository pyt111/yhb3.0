<template>
    <footer class="clearfix wrap-minw">
        <div class="container clearfix">
            <ul class="link-group clearfix">
                <li class="item fl clearfix">
                    <span class="title">
                        关于我们
                    </span>
                    <div class="foot-item">
                        <router-link to="/publicity/touchUs">联系我们</router-link>
                    </div>
                    <div class="foot-item">
                        <router-link to="/publicity/aptitude">荣誉资质</router-link>
                    </div>
                </li>
                <li class="item fl clearfix">
                    <span class="title">安全保障</span>
                    <div class="foot-item">
                        <router-link to="/publicity/safeConduct">平台安全</router-link>
                    </div>
                    <div class="foot-item">
                        <router-link to="/publicity/management">服务说明</router-link>
                    </div>
                    <div class="foot-item">
                        <router-link to="/publicity/businessIntroduce">法律意见书</router-link>
                    </div>
                </li>
                <li class="item fl clearfix">
                    <span class="title">合作伙伴</span>
                    <div class="foot-item">
                        <a href="http://www.cmbc.com.cn/" target="_blank">中国民生银行</a>
                    </div>
                    <div class="foot-item">
                        <a href="http://www.cgbchina.com.cn/" target="_blank">广发银行</a>
                    </div>
                    <div class="foot-item">
                        <a href="http://www.pingan.com/" target="_blank">中国平安</a>
                    </div>
                    <div class="foot-item">
                        <a href="http://www.cmbchina.com/" target="_blank">招商银行</a>
                    </div>
                    <div class="foot-item">
                        <a href="http://www.chinapnr.com/" target="_blank">汇付天下</a>
                    </div>
                    <div class="foot-item">
                        <a href="http://www.jsfund.cn/" target="_blank">嘉实基金</a>
                    </div>
                </li>
                <li class="item-msg fl clearfix">
                    <span class="title">热线电话</span>
                    <span class="foot-phone line-phone">400-838-8304</span>
                </li>
                <li class="item-msg fl clearfix">
                    <span class="line-span">服务时间：08:00~21:00 (周一至周日)</span>
                    <span class="line-span">邮箱：info@lanrucaifu.com</span>
                    <span class="line-span">网络投诉咨询中心</span>

                </li>
                <li class="item-pic fl clearfix">
                    <img class="wechat-img" :src="wechatImg" alt="">

                </li>
            </ul>
        </div>
        <div class="copyRight">
            <div class="authentication">
                <!-- 信用评级 -->
                <span class="company-xypj">
                    <a href="http://www.itrust.org.cn/home/index/itrust_certifi/wm/132629382W" target="_blank">
                        <img class="spacing xypj" :src="xypjImg" alt="">
                    </a>
                </span>
                <!-- 客户满意度 -->
                <span class="compony-khmyd">
                    <a href="http://www.itrust.org.cn/home/index/satification_certificate/wm/MY2017081402" target="_blank">
                        <img class="khmyd spacing" :src="khmydImg">
                    </a>
                </span>
                <span class="company-kxwz" @click="ingShow()">
                    <img class="kxwz" :src="kxwz">
                </span>
                <Modal id="apt-model" title="可信网站" v-model="modalOpen" class="img-show-wrap">
                    <img :src="modalImg" class="vertical-center-modal" />
                    <div slot="footer">
                    </div>
                </Modal>
                <span class="componey-gwrz">
                    <a href="https://v.anquan.org/cert/site/?site=www.yhb118.com&at=realname" target="_blank">
                        <img class="gwrz spacing" :src="gwrz">
                    </a>
                </span>
                <span class="company-finance">
                    <a id="_pingansec_bottomimagesmall_p2p" href="http://si.trustutn.org/info?sn=105171025000613706932&certType=4" target="_blank">
                        <img class="finance" :src="finance"/>
                    </a>
                </span>
            </div>
            <span>Copyright © yhb118.com 网站备案号:沪ICP备15026013号</span>
            <!-- <span>Copyright © yhb118.com 网站备案号:沪ICP备15026013号</span> -->
            <span>上海岚儒金融信息服务有限公司</span>
        </div>
    </footer>
</template>
<script>
import { IMG } from "@/config/url";
export default {
  data() {
    return {
      wechatImg: IMG + "/common/footer/wechat.png",
      xypjImg: IMG + "/common/footer/company-xypj.jpg",
      khmydImg: IMG + "/common/footer/khmyd.jpg",
      kxwz: IMG + "/common/footer/kxwz.png",
      gwrz: IMG + "/common/footer/gwrz.png",
      finance: IMG + "/common/footer/finance.png",
      modalOpen: false,
      modalImg: IMG + "/common/footer/bigKxwz.jpg"
    };
  },
  methods: {
    ingShow() {
      this.modalOpen = true;
    }
  }
};
</script>
<style lang="less">
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
#apt-model .ivu-modal-footer {
  display: none;
}
#apt-model .ivu-modal-close {
  display: block;
  position: absolute;
  right: 8px;
  top: -5px;
}
#apt-model .ivu-modal-close .ivu-icon-ios-close-empty {
  color: #000;
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
@import "../../../config/base.less";
footer {
  width: 100%;
  background: #30373a;
}

.container {
  width: 1200px;
  margin: 0 auto;
}

.link-group {
  width: 100%;
  color: #fff;
}

.link-group > li {
  margin-top: 28px;
}

.item {
  width: 18%;
}

.foot-item {
  width: 100%;
  margin-top: 6px;
}

.item a {
  color: #fff;
  font-size: 14px;
}

.title {
  font-size: 16px;
}

.item-msg {
  width: 25%;
  font-size: 14px;
}

.foot-phone {
  display: block;
  font-size: 32px;
}

.line-span {
  display: block;
  margin-bottom: 5px;
}

.xypj {
  width: 90px;
  height: 30px;
}

.khmyd {
  width: 90px;
  height: 30px;
}

.kxwz {
  width: 90px;
  height: 30px;
  margin-left: 15px;
}

.company-kxwz {
  cursor: pointer;
}

.gwrz {
  width: 90px;
  height: 30px;
}

.finance {
  margin-left: 15px;
}
.spacing {
  margin-left: 15px;
}
.link-group .item-pic {
  width: 21%;
  text-align: center;
  margin-top: -70px;
}
.item-pic > p {
  display: flex;
  justify-content: space-between;
}
.copyRight {
  font-size: 14px;
  background: #808080;
  margin-top: 10px;
  color: #fff;
  padding: 14px 0;
}
.authentication {
  width: 542px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.copyRight > span {
  display: block;
  text-align: center;
}
</style>


