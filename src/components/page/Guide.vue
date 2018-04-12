<template>
    <div>
        <!-- <CHeader class="guide-title"/> -->
        <AHeader/>
        <div class="content">
        </div>
        <AFooter/>
    </div>
</template>
<script>
import CHeader from "@/components/pure/common/CHeader";
import AHeader from "@/components/pure/common/AHeader";
import AFooter from "@/components/pure/common/AFooter";
export default {
  components: {
    CHeader,
    AFooter,
    AHeader
  }
};
</script>
<style lang="less" scoped>
.guide-title {
  position: fixed;
  top: 0;
  z-index: 1;
}
.content {
  height: 3196px;
  background: url("/res/publicity/novice-guide.png");
  // background-position:center;
  min-width: 1200px;
  // margin-top: 60px;
}
</style>


