<template>
    <div class="title clearfix wrap-minw">
        <!-- <div class="container">
            <router-link class="to-home clearfix" to="/index">
                <img src="../../../assets/icon/logo-type-two.png" alt="">
            </router-link>
            <div class="block-sort fr">
                <router-link class="back-home" to="/index">首页</router-link>
                <span class="back" @click="back">返回</span>
            </div>
        </div>
        <div class="fixed wrap-minw"></div> -->
        <AHeaderBtm class="container"/>
    </div>
</template>
<script>
import router from "@/router";
import AHeaderBtm from "@/components/pure/common/AHeaderBtm";
export default {
  data() {
    return {};
  },
  methods: {
    back() {
      router.go(-1);
    }
  }
};
</script>
<style lang="less" scoped>
.title {
  width: 100%;
}
.container {
  width: 1200px;
  height: 60px;
  line-height: 60px;
  margin: 0 auto;
}
.to-home {
  margin-left: 20px;
  line-height: 0;
  display: inline-block;
  vertical-align: middle;
}
.block-sort {
  color: #4c4c4c;
  font-size: 18px;
  margin-right: 45px;
}
.back-home {
  margin-right: 38px;
  color: #4c4c4c;
}
.back {
  cursor: pointer;
}
.fixed {
  width: 100%;
  height: 100%;
  // height: 60px;
  position: absolute;
  top: 0;
  z-index: -1;
  background: rgba(234, 232, 231, 0.6);
  box-shadow: 0 0 10px 0 #808080;
}
</style>

