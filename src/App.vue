<template>
  <div id="app" class="clearfix">
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
    <Global></Global>  
  </div>
</template>

<script>
import Global from '@/components/page/Global'
export default {
    name: 'app',
    components:{
        Global
    },
    mounted(){
      // this.$store.dispatch('tradeSwitch') //平台是否开启交易
    }
}
</script>

<style lang="less">
@import 'config/animate.css';
@import 'config/loading.less';
</style>
