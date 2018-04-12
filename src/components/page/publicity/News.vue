<template>
    <div class="clearfix">
        <div class="top-img">
            <img :src="img" alt="">
        </div>
        <span class="title">惠宝公告</span>
        <div class="content clearfix">
            <ul class="clearfix">
                <li class="clearfix news-item" v-for="item in lists">
                    <router-link :to="'/publicity/news/'+item.id" class="link-item">
                        <img v-if="item.img" class="item-img" :src="item.img" alt="">
                        <img v-else src="../../../../static/news/no-image.png" alt="">
                        <div class="item-message fr">
                            <div class="item-title">
                                <span class="name fl">{{item.title}}</span>
                                <span class="time fr">{{item.time}}</span>
                            </div>
                            <span class="desc">{{item.content}}</span>
                        </div>
                    </router-link>
                </li>
            </ul>
            <div class="common-center-page-wrap">
                <Page class="common-center-page-wrap" :total="total" size="small" :page-size="size" @on-change="change"></Page>
            </div>
        </div>
    </div>
</template>
<script>
import { IMG } from "@/config/url";
export default {
  data() {
    return {
      img: IMG + "/publicity/news-top-bg.png",
      size: 4,
      list: [
        {
          id: 301,
          img: "http://www.yhb118.com/static_img/icon/notice.png",
          time: "2017-10-24 09:00:00",
          title: "2017年XXX运营公告",
          content:
            "惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻"
        },
        {
          id: 301,
          img: "http://www.yhb118.com/static_img/icon/notice.png",
          time: "2017-10-24 09:00:00",
          title: "2017年XXX运营公告",
          content:
            "惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻"
        },
        {
          id: 301,
          img: "http://www.yhb118.com/static_img/icon/notice.png",
          time: "2017-10-24 09:00:00",
          title: "2017年XXX运营公告",
          content:
            "惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻"
        },
        {
          id: 301,
          img: "http://www.yhb118.com/static_img/icon/notice.png",
          time: "2017-10-24 09:00:00",
          title: "2017年XXX运营公告",
          content:
            "惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻惠宝新闻"
        }
      ]
    };
  },
  watch: {
    total: function() {
      console.log("页数改变");
      console.log(this.total);
      this.$store.dispatch("publicityNewsList", {
        size: this.size,
        current: 1
      });
    }
  },
  mounted() {
    let bread = [
      {
        name: "余惠宝",
        url: "/"
      },
      {
        name: "信息披露",
        url: "/publicity"
      },
      {
        name: "惠宝新闻",
        url: ""
      }
    ];
    this.$store.dispatch("publicityBreadChange", bread);
    this.$store.dispatch("publicityNavChange", 2);
    this.$store.dispatch("publicityNewsTotal"); //新闻列表总数
  },
  computed: {
    total() {
      return this.$store.state.publicity.newsTotal;
    },
    lists() {
      return this.$store.state.publicity.newsList;
    }
  },
  methods: {
    change(current) {
      this.$store.dispatch("publicityNewsList", {
        size: this.size,
        current: current
      });
    }
  }
};
</script>
<style lang="less" scoped>
.title {
  display: block;
  width: 120px;
  height: 34px;
  line-height: 34px;
  margin-left: auto;
  margin-right: auto;
  background: #98d1ff;
  font-size: 16px;
  text-align: center;
  color: #fff;
  border-radius: 17px;
  margin-top: 46px;
  font-weight: 600;
  border: none;
}
.content {
  width: 810px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 76px;
}
.news-item {
  display: block;
}
.link-item {
  display: block;
  height: 172px;
  padding: 26px 0;
  font-size: 14px;
  color: #808080;
  border-bottom: 1px solid #e5e5e5;
}
.item-img {
  width: 200px;
  height: 120px;
}
.item-message {
  width: 580px;
}
.name {
  color: #4c4c4c;
  font-weight: 600;
}
.desc {
  display: inline-block;
  height: 80px;
  margin-top: 18px;
  text-indent: 2em;
  overflow: hidden;
}
</style>


