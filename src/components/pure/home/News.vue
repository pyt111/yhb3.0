<template>
    <div class="container clearfix">
        <div class="news fl" :class="{'whole-width' : !trade}">
            <div class="title">
                <span class="goods-title">惠宝新闻</span>
                <span class="goods-info">惠生活，惠理财</span>
            </div>
            <div class="content">
                <div class="p fl clearfix">
                    <template v-for="item,index in newList">
                        <router-link class="to-news clearfix" :to="'/publicity/news/'+item.id">
                            <img :src="item.image" class="news-img" alt="">
                            <span class="hidden-msg">{{item.title}}</span>
                        </router-link>
                        <!-- <a v-if="item.type === 'out'" class="to-news clearfix" :href="item.link">
                            <img :src="item.img" class="news-img" alt="">
                            <span class="hidden-msg">{{item.title}}</span>
                        </a> -->
                    </template> 
                </div>                                                        
                <div class="text fr clearfix">
                    <ul v-if="this.$store.state.home.textList != ''" class="clearfix">
                        <li v-for="item,index in textList" class="text-list">
                            <router-link :to="'/publicity/news/'+item.id" class="to-text clearfix">
                                <span class="time">{{item.time}}</span>
                                <em></em>
                                <span class="news-title">{{item.title}}！</span>
                            </router-link>
                            <!-- <a v-if="item.type === 'out'" class="to-text clearfix" :href="item.link">
                                <span class="time">{{item.time}}</span>
                                <em></em>
                                <span class="news-title">{{item.title}}！</span>
                            </a> -->
                        </li>
                    </ul>
                    <Spin v-else size="large" fix></Spin>                                  
                    <div class="more">
                        <router-link class="fr clearfix" to="/publicity/news">
                            查看更多>>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="fr record">
            <div class="title">
                <span class="goods-title">投资记录</span>
                <span class="goods-info">惠生活 &nbsp 惠理财</span>
            </div>  
            <div class="record-list">
              <ul v-if="this.$store.state.home.record != ''" class="clearfix">
                  <swiper v-if="recordList.length > 0 " class="swiper-group fl" :options="swiperOption" ref="mySwiper">
                      <swiper-slide class="swiper-no-swiping swiper-item" v-for="item,index in recordList" key="index">       
                          <li class="clearfix" >
                              <!-- <span v-if="item.day != null">{{item.userName}}在<span class="money">{{item.day}}</span>天前投资了<span class="money">{{item.orderMoney}}</span>元</span>
                              <span v-else-if="item.hour != null">{{item.userName}}在<span class="money">{{item.hour}}</span>小时前投资了<span class="money">{{item.orderMoney}}</span>元</span>
                              <span v-else-if="item.minutes != null">{{item.userName}}在<span class="money">{{item.minutes}}</span>分钟前投资了<span class="money">{{item.orderMoney}}</span>元</span>
                              <span v-else-if="item.sec != null">{{item.userName}}在<span class="money">{{item.sec}}</span>投资了<span class="money">{{item.orderMoney}}</span>元</span>                               -->
                              <span class="fl">{{item.userName}} 在平台投资 <span class="money">{{item.orderMoney}}</span>元</span>
                              <span v-if="item.day != null" class="fr">{{item.day}}天前</span>
                              <span v-else-if="item.hour != null" class="fr">{{item.hour}}小时前</span>
                              <span v-else-if="item.minutes != null" class="fr">{{item.minutes}}分钟前</span>
                              <span v-else class="fr">{{item.sec}}</span>
                          </li>
                      </swiper-slide>
                  </swiper>
              </ul>
              <Spin v-else size="large" fix></Spin>              
            </div>
        </div>
    </div>
</template>
<script>
import { IMG } from "@/config/url";
import {threePointControl} from '@/tools/algorithm'
export default {
  props: ['newList','textList','recordList'],
  name: "carrousel",
  data() {
    return {
      trade: false,
      swiperOption: {
        autoplay: 500,
        speed: 1000,
        loop: true,
        loopedSlides: 11,
        slidesPerView: "auto",
        direction: "vertical",
        pagination: ".swiper-pagination"
      },
    };
  },
  computed: {
  },
  mounted(){
  }
};
</script>
<style lang="less" scoped>
.container {
  width: 1200px;
  margin: 0 auto;
}
.news {
  width: 840px;
}
.news .whole-width {
  width: 100%;
}
.title {
  margin: 10px 0;
}
.goods-title {
  font-size: 20px;
  color: #4c4c4c;
}
.goods-info {
  font-size: 14px;
  margin-left: 30px;
  color: #808080;
  vertical-align: -1px;
}
.content {
  height: 280px;
  border: 1px solid #f7f7f7;
  background: #fff;
  overflow: hidden;
  position: relative;
}
.p {
  width: 230px;
  height: 100%;
  position: relative;
}
.to-news {
  display: block;
  width: 180px;
  height: 112px;
  margin: 18px auto 0 auto;
  overflow: hidden;
  position: relative;
}
.to-news:hover .hidden-msg {
  bottom: 0;
}
.to-news > img {
  width: 100%;
  height: 100%;
}
.to-news>span{
  display: block;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.hidden-msg {
  width: 100%;
  position: absolute;
  display: block;
  bottom: 0;
  padding: 0 5%;
  background: rgba(0, 0, 0, 0.5);
  margin-left: auto;
  margin-right: auto;
  height: 36px;
  line-height: 36px;
  overflow: hidden;
  left: 0;
  right: 0;
  color: white;
  font-size: 18px;
  text-align: center;
}
.text {
  font-size: 14px;
  width: 560px;
  margin-left: 38px;
  //   height: 34px;
  //   line-height: 34px;
  margin-top: 26px;
  position: relative;
  height: 254px;
}
.text > ul {
  margin-left: -30px;
  list-style: square;
}
.text > ul > li {
  list-style: square;
  color: #ff7542;
  height: 34px;
  line-height: 34px;
}
.to-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #4c4c4c;
}
.to-text:hover {
  color: #ff7542;
}
.to-text em {
  height: 18px;
  width: 1px;
  background: #808080;
  display: inline-block;
  vertical-align: -4px;
  margin: 0 8px;
}
.more a {
  display: inline-block;
  color: #ff7542;
  margin-right: 10px;
}
.record {
  width: 340px;
}
.record-list {
  width: 340px;
  height: 280px;
  border: 1px solid #f7f7f7;
  background: #fff;
  position: relative;
  // display: inline-block;
}

.swiper-group {
  width: 100%;
  height: 250px;
}
.swiper-item {
  height: 32px;
}
.record-list ul {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6%;
  width: 85%;
  // list-style: direct;
  overflow: hidden;  
}
.record-list ul li {
  font-size: 14px;
  // list-style-type: square;
  color: #4c4c4c;
  margin: 5px auto;
  display: block;
}
.money {
  color: #ff7542;
}
</style>


