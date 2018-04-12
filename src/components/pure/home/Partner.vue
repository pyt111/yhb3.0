<template>
    <div class="partner clearfix">
        <div class="container clearfix">
            <div class="title">合作伙伴</div>
            <div class="content clearfix">
                <div class="prev p-change fl" @click="prev">
                    <Icon class="sw-change-arrow" type="ios-arrow-back" size=50></Icon>
                </div>
                <div class="swiper-content clearfix">
                    <swiper class="swiper-master" :options="swiperOption" ref="mySwiper">    
                        <swiper-slide class="swiper-no-swiping swiper-item fl">
                            <a href="https://www.aliyun.com" target="_blank" class="partner-item">
                                <img src="../../../assets/home/partner/aly.jpg" alt="">
                            </a>
                        </swiper-slide>
                        <swiper-slide class="swiper-no-swiping swiper-item fl">
                            <a href="http://www.ayeshan.com" target="_blank" class="partner-item">
                                <img src="../../../assets/home/partner/ays.jpg" alt="">
                            </a>
                        </swiper-slide>
                        <swiper-slide class="swiper-no-swiping swiper-item fl">
                            <a href="http://www.fuioupay.com" target="_blank" class="partner-item">
                                <img src="../../../assets/home/partner/fy.jpg" alt="">
                            </a>
                        </swiper-slide>
                        <swiper-slide class="swiper-no-swiping swiper-item fl">
                            <a href="http://www.fjhxbank.com" target="_blank" class="partner-item">
                                <img src="../../../assets/home/partner/hx.jpg" alt="">
                            </a>
                        </swiper-slide>
                        <swiper-slide class="swiper-no-swiping swiper-item fl">
                            <a href="http://www.umpay.com" target="_blank" class="partner-item">
                                <img src="../../../assets/home/partner/ld.jpg" alt="">
                            </a>
                        </swiper-slide>
                        <swiper-slide class="swiper-no-swiping swiper-item fl">
                            <a href="http://www.cqxig.com" target="_blank" class="partner-item">
                                <img src="../../../assets/home/partner/qx.jpg" alt="">
                            </a>
                        </swiper-slide>
                        <swiper-slide class="swiper-no-swiping swiper-item fl">
                            <a href="https://www.thgo8.com" target="_blank" class="partner-item">
                                <img src="../../../assets/home/partner/th.jpg" alt="">
                            </a>
                        </swiper-slide>
                        <swiper-slide class="swiper-no-swiping swiper-item fl">
                            <a href="http://www.ips.com" target="_blank" class="partner-item">
                                <img src="../../../assets/home/partner/xf.jpg" alt="">
                            </a>
                        </swiper-slide>
                        <swiper-slide class="swiper-no-swiping swiper-item fl">
                            <a href="http://cn.unionpay.com" target="_blank" class="partner-item">
                                <img src="../../../assets/home/partner/yl.jpg" alt="">
                            </a>
                        </swiper-slide>
                        <swiper-slide class="swiper-no-swiping swiper-item fl">
					  		<a href="http://www.epicc.com.cn/" target="_blank" class="partnet-item">
					  			<img src="../../../assets/home/partner/zgrm.jpg"/>
					  		</a>
					  </swiper-slide>
					  <swiper-slide class="swiper-no-swiping swiper-item fl">
					  		<a href="http://www.cmbchina.com/" target="_blank" class="partnet-item">
					  			<img src="../../../assets/home/partner/zs.jpg"/>
					  		</a>
					  </swiper-slide>
					  <swiper-slide class="swiper-no-swiping swiper-item fl">
					  		<a href="http://bank.ecitic.com/" target="_blank" class="partnet-item">
					  			<img src="../../../assets/home/partner/zx.jpg"/>
					  		</a>
					  </swiper-slide>
                    </swiper>
                </div>
                <div class="next p-change fr" @click="next">
                    <Icon class="sw-change-arrow" type="ios-arrow-forward" size=50></Icon>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "carrousel",
  data() {
    return {
      swiperOption: {
        // notNextTick: true,
        autoplay: 5000,
        speed: 1000,
        loop: true,
        loopedSlides: 12,
        autoplayDisableOnInteraction: false,
        slidesPerView: "auto",
        // direction: "vertical"
        pagination: ".swiper-pagination",
        observeParents:true,
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  methods: {
    prev() {
      this.swiper.slidePrev();
    },
    next() {
      this.swiper.slideNext();
    }
  }
};
</script>
<style lang="less" scoped>
.partner {
  background: #fff;
  margin-top: 20px;
  height: 152px;
  overflow: hidden;
}
.container {
  width: 1200px;
  margin: 0 auto;
}
.title {
  font-size: 20px;
  margin-top: 20px;
  color: #4c4c4c;
}
.p-change {
  height: 60px;
  line-height: 60px;
  width: 30px;
  cursor: pointer;
  text-align: center;
}
.p-change:hover i{
    color:#ff7542;
}
.p-change i{
    vertical-align: middle;
}
.swiper-content {
  width: 1100px;
  display: inline-block;
}
.swiper-master {
  width: 900px;
  height: 60px;
}
.swiper-item {
  width: 300px;
  display: inline-block;
//   height: 30px;
}
.partner-item{
    display: inline-block;
    width: 300px;
    height: 60px;
}

</style>


