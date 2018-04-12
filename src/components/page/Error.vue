<template>
	<div>
		<AHeader/>
			<!-- <div class="container clearfix">
				<img class="developing-bg" src="../../assets/other/404-error.png" alt="" />
			</div> -->
		<div class="mid">
			<div style="width: 660px; margin: 0 auto;">
				<iframe scrolling='no' frameborder='0' src='http://yibo.iyiyun.com/Home/Distribute/ad404/key/1333916' width='654' height='470' style='display:block;'></iframe>
				<p>
					<a href="/index">余惠宝</a> <br>
					<span>&copy; 2018 YHB118.COM 版权所有</span>
					<!-- &copy; 2018 YHB118.COM 版权所有 -->
				</p>
			</div>
		</div>
		<AFooter/>
	</div>
</template>

<script>
import AHeader from "@/components/pure/common/AHeader";
import AFooter from "@/components/pure/common/AFooter";
export default {
  data() {
    return {};
  },
  mounted() {
    // let vm = this
    // setTimeout(function () {
    // 	vm.$router.push('/')
    // },3000)
  },
  components: {
    AHeader,
    AFooter
  }
};
</script>

<style scoped="scoped" lang="less">
@import url("../../config/base.less");
// .container{
// 	width: @mw;
// 	margin: 0 auto;
// 	text-align: center;
// 	min-height: 571px;
// }
.developing-bg {
  display: inline-block;
  margin: 120px auto;
}
h1 {
  color: #e64257;
}
h1,
p {
  text-align: center;
}
.mid {
  background: rgb(255, 255, 235);
  padding: 20px 0;
}
</style>
