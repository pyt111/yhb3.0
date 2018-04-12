<template>
    <div class="container">
        <div class="logo fl">
            <router-link to="/index" class="to-index"><img :src="logo" alt=""></router-link>
        </div>
        <div class="index-help fr">
            <span>市场有风险，投资需谨慎</span>
            <router-link to="/index" class="fl">余惠宝首页</router-link>
            <router-link to="/guide" class="fl">帮助中心</router-link>
        </div>
    </div>
</template>
<script>
import { IMG } from "@/config/url";
export default {
  data() {
    return {
      logo: IMG + "/common/header/logo.png"
    };
  }
};
</script>
<style scoped="scoped">
.container {
  width: 1200px;
  margin: 0 auto;
  height: 108px;
  line-height: 108px;
  position: relative;
}
.logo {
  width: 290px;
  height: 90px;
  margin-top: 10px;
}
.to-index {
  height: 100%;
  display: block;
}
.index-help {
  height: 100%;
  font-size: 16px;
}
.index-help a {
  color: #808080;
  margin-left: 40px;
}
span {
  position: absolute;
  top: -31px;
  right: 0;
  /* opacity: 0.7; */
  font-size: 12px;
  color: #000;
}
</style>


