<template>
    <div class="clearfix">
        <div class="clearfix top-img">
            <img :src="img" alt="">
        </div>
        <span class="title">官方新闻</span>
        <div class="content clearfix">
            <ul class="clearfix">
                <li class="clearfix notice-item" v-for="item in noticeLists">
                    <router-link class="link-item" :to="'/publicity/proclamation/'+ item.id">
                        <span class="item-title fl">{{item.title}}</span>
                        <span class="item-time fr">{{item.time}}</span>
                    </router-link>
                </li>
            </ul>
            <div class="common-center-page-wrap">
                <Page class="common-center-page-wrap" :total="total" size="small" @on-change="change" :page-size="size"></Page>
            </div>
        </div>
    </div>
</template>
<script>
import { IMG } from "@/config/url";
export default {
  data() {
    return {
      img: IMG + "/publicity/announcement-top-bg.png",
      size: 5,
      noticeList: [
        {
          id: 321,
          img: "",
          time: "2017-10-25 09:29:30",
          title: "【余惠宝】“关注办公室亚健康人群”讲座"
        },
        {
          id: 321,
          img: "",
          time: "2017-10-25 09:29:30",
          title: "【余惠宝】“关注办公室亚健康人群”讲座"
        },
        {
          id: 321,
          img: "",
          time: "2017-10-25 09:29:30",
          title: "【余惠宝】“关注办公室亚健康人群”讲座"
        },
        {
          id: 321,
          img: "",
          time: "2017-10-25 09:29:30",
          title: "【余惠宝】“关注办公室亚健康人群”讲座"
        },
        {
          id: 321,
          img: "",
          time: "2017-10-25 09:29:30",
          title: "【余惠宝】“关注办公室亚健康人群”讲座"
        },
        {
          id: 321,
          img: "",
          time: "2017-10-25 09:29:30",
          title: "【余惠宝】“关注办公室亚健康人群”讲座"
        },
        {
          id: 321,
          img: "",
          time: "2017-10-25 09:29:30",
          title: "【余惠宝】“关注办公室亚健康人群”讲座"
        },
        {
          id: 321,
          img: "",
          time: "2017-10-25 09:29:30",
          title: "【余惠宝】“关注办公室亚健康人群”讲座"
        }
      ]
    };
  },
  watch: {
    total: function() {
      console.log("下一页");
      console.log(this.total);
      this.$store.dispatch("publicityAnnouncementList", {
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
        name: "惠宝公告",
        url: ""
      }
    ];
    this.$store.dispatch("publicityBreadChange", bread);
    this.$store.dispatch("publicityNavChange", 2);
    this.$store.dispatch("publicityAnnouncementTotal"); //公告总条数
  },
  methods: {
    change(current) {
      this.$store.dispatch("publicityAnnouncementList", {
        size: this.size,
        current: current
      });
    }
  },
  computed: {
    total() {
      return this.$store.state.publicity.announcementTotal;
    },
    noticeLists() {
      return this.$store.state.publicity.announcementList;
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
  font-size: 18px;
  color: #fff;
  text-align: center;
  border-radius: 17px;
  margin-top: 46px;
  border: none;
  font-weight: 600;
}
.content {
  width: 810px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
}
.notice-item {
  display: block;
  font-size: 14px;
  border-bottom: 1px solid #e5e5e5;
}
.notice-item:hover {
  background: #f7f7f7;
}
.notice-item:hover .link-item {
  text-indent: 2em;
}
.link-item {
  display: block;
  height: 66px;
  color: #4c4c4c;
  padding: 0 10px;
  transition: text-indent 0.3s;
}
.link-item span {
  display: block;
  line-height: 66px;
  vertical-align: middle;
}
</style>


