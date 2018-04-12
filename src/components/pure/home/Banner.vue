<template>
    <div class="container">
        <Carousel  v-if="this.$store.state.home.banners != ''" class="home-banner wrap clearfix" autoplay :autoplay-speed="space" :trigger="trigger">
        <CarouselItem v-for="item,index in banner" key="index">
            <div class="carousel-demo" :style="{backgroundImage:'url('+item.img+')'}">
              <a :href="item.url" target="_blank"></a>
            </div>
        </CarouselItem>
        <!-- <CarouselItem>
                <div class="demo-carousel">1</div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel">2</div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel">3</div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel">4</div>
            </CarouselItem> -->
        </Carousel>
        <Spin v-else size="large" fix></Spin>
    </div>
</template>
<script>
import { IMG } from "@/config/url";
export default {
  props: ["banner"],
  data() {
    return {
      banners: [
        {
          img: IMG + "/home/banner/banner-one.jpg",
          url: "a"
        },
        {
          img: IMG + "/home/banner/banner-two.jpg",
          url: "b"
        },
        {
          img: IMG + "/home/banner/banner-three.jpg",
          url: "c"
        },
        {
          img: IMG + "/home/banner/banner-four.jpg",
          url: "d"
        }
      ],
      trigger: "hover",
      space: 5000
    };
  },
  methods: {
    location(url) {
      if (url == null) {
        console.log("不是链接");
      } else {
        window.location.href = url;
      }
    }
  }
};
</script>
<style>
.home-banner .ivu-carousel-dots {
  z-index: 0;
}
</style>

<style lang="less" scoped>
.container {
  height: 430px;
}
.home-banner {
  min-width: 1200px;
  /* height:430px; */
}
.carousel-demo {
  cursor: pointer;
  width: 100%;
  height: 430px;
  position: relative;
  background-position: center;
  a {
    display: block;
    width: 100%;
    height: 430px;
  }
}
</style>



