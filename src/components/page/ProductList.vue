<template>
    <div class="clearfix">
        <AHeader/>
        <div class="container clearfix">
            <!-- <div class="new-list">
                //新手产品
                <newList :newList="newList()" />
            </div>             -->
            <div class="advert">
                <!-- 新手广告 -->
                <advert class="advert-item" />
            </div>
            <!-- <span v-if="!allPro" class="change-over fr" @click="allProduct">全部产品 &nbsp></span>
            <div v-if="!allPro" class="new-prodcutList">
                <newPorductList/>
            </div> -->
            <div class="all-product">
                <div class="top">
                    <div class="top-select">
                        <span>排序：</span>
                        <span class="con classify" :class="{active:rankWay === 1}" @click="rankDefault">默认排序</span>
                        <!-- <span class="con classify" :class="rmclass" @click="rankMoney">投资金额<Icon size="25" type="android-arrow-up"></Icon></span> -->
                        <span class="con classify" :class="rtclass" @click="rankTime">投资期限<Icon size="25" type="android-arrow-up"></Icon></span>
                        <span class="con classify" :class="rrclass" @click="rankRate">年利率<Icon size="25" type="android-arrow-up"></Icon></span>
                    </div>
                </div>
                <!-- 列表部分 -->
                <ProList :products="products()"/>
            </div>
            <ModelAgreement class="model-agreement"/>
            <!-- <div class="hackneyed-quesition">
                <HackneyedQuesition/>
            </div> -->
        </div>
        <AFooter/>
    </div>
</template>
<script>
import AHeader from "@/components/pure/common/AHeader";
import AFooter from "@/components/pure/common/AFooter";
import ProList from "@/components/pure/procenter/ProList";
import advert from "@/components/pure/procenter/advert";
import newList from "@/components/pure/procenter/newList";
import newPorductList from "@/components/pure/procenter/newPorductList";
import ModelAgreement from "@/components/pure/prodetail/ModelAgreement";
import HackneyedQuesition from "@/components/pure/common/HackneyedQuesition";
import { rankMD, rankMU, rankTD, rankTU, rankRD, rankRU } from "@/tools/sort";
export default {
  data() {
    return {
      allPro: false,
      rankWay: 1,
      // rankDefault:false,
      rankM: false, //代表降序
      rankT: false, //代表降序
      rankR: false, //代表降序
      productLists: [
        {
          total: 1000000,
          min: 1000,
          rate: 9.6,
          left: 0,
          taps: {
            classify: 1, //0:新手 1:定期
            type: 0, //0:兑换 1:秒杀
            tap: "定期",
            color: "#6a7cff"
          },
          name: "助力冲刺90天",
          weight: 1,
          id: 150,
          day: 90,
          precent: 100
        },
        {
          total: 1000000,
          min: 5000,
          rate: 14,
          left: 125000,
          taps: {
            classify: 1,
            type: 0,
            tap: "定期",
            color: "#6a7cff"
          },
          name: "年中特惠",
          weight: 3,
          id: 150,
          day: 720,
          precent: 87.5
        },
        {
          total: 5000000,
          min: 1000,
          rate: 9.6,
          left: 360000,
          taps: {
            classify: 1,
            type: 0,
            tap: "定期",
            color: "#6a7cff"
          },
          name: "惠宝富盈",
          weight: 2,
          id: 150,
          day: 365,
          precent: 92.8
        },
        {
          total: 136700,
          min: 1000,
          rate: 7.5,
          left: 0,
          taps: {
            classify: 1,
            type: 0,
            tap: "定期",
            color: "#6a7cff"
          },
          name: "惠宝首发",
          weight: 4,
          id: 150,
          day: 365,
          precent: 100
        },
        {
          total: 500000,
          min: 1000,
          rate: 11,
          left: 5000,
          taps: {
            classify: 1,
            type: 0,
            tap: "定期",
            color: "#6a7cff"
          },
          name: "新春贺岁专属",
          weight: 1,
          id: 150,
          day: 365,
          precent: 99
        },
        {
          total: 500000,
          min: 1000,
          rate: 11,
          left: 62500,
          taps: {
            classify: 1,
            type: 0,
            tap: "定期",
            color: "#6a7cff"
          },
          name: "开春迎新",
          weight: 1,
          id: 150,
          day: 365,
          precent: 87.5
        },
        {
          total: 500000,
          min: 1000,
          rate: 12,
          left: 42500,
          taps: {
            classify: 1,
            type: 0,
            tap: "定期",
            color: "#6a7cff"
          },
          name: "三月限量抢购",
          weight: 1,
          id: 150,
          day: 365,
          precent: 91.5
        },
        {
          total: 500000,
          min: 1000,
          rate: 12,
          left: 0,
          taps: {
            classify: 1,
            type: 0,
            tap: "定期",
            color: "#6a7cff"
          },
          name: "惠财福享",
          weight: 2,
          id: 150,
          day: 365,
          precent: 100
        },
        {
          total: 500000,
          min: 1000,
          rate: 7.2,
          left: 174000,
          taps: {
            classify: 1,
            type: 0,
            tap: "定期",
            color: "#6a7cff"
          },
          name: "惠丰年發",
          weight: 1,
          id: 150,
          day: 365,
          precent: 65.2
        },
        {
          total: 500000,
          min: 1000,
          rate: 4.8,
          left: 0,
          taps: {
            classify: 1,
            type: 0,
            tap: "定期",
            color: "#6a7cff"
          },
          name: "四月惠金",
          weight: 2,
          id: 150,
          day: 90,
          precent: 100
        },
        {
          total: 1000000,
          min: 1000,
          rate: 12,
          left: 0,
          taps: {
            classify: 1,
            type: 0,
            tap: "定期",
            color: "#6a7cff"
          },
          name: "惠盈四月",
          weight: 6,
          id: 150,
          day: 365,
          precent: 100
        },
        {
          total: 1000000,
          min: 1000,
          rate: 11,
          left: 0,
          taps: {
            classify: 1,
            type: 0,
            tap: "定期",
            color: "#6a7cff"
          },
          name: "五月惠利首发",
          weight: 1,
          id: 150,
          day: 365,
          precent: 100
        },
        {
          total: 1000000,
          min: 5000,
          rate: 11.8,
          left: 0,
          taps: {
            classify: 1,
            type: 1,
            tap: "定期",
            color: "#6a7cff"
          },
          name: "嗨翻5.18",
          weight: 3,
          id: 150,
          day: 365,
          precent: 100
        },
        {
          total: 5000000,
          min: 5000,
          rate: 9,
          left: 0,
          taps: {
            classify: 1,
            type: 1,
            tap: "定期",
            color: "#6a7cff"
          },
          name: "震撼特惠",
          weight: 6,
          id: 150,
          day: 30,
          precent: 100
        },
        {
          total: 1000000,
          min: 1000,
          rate: 6,
          left: 186100,
          taps: {
            classify: 1,
            type: 0,
            tap: "定期",
            color: "#6a7cff"
          },
          name: "六月惠宝",
          weight: 2,
          id: 150,
          day: 180,
          precent: 87.5
        },
        {
          total: 1000000,
          min: 100,
          rate: 4.8,
          left: 0,
          taps: {
            classify: 1,
            type: 0,
            tap: "定期",
            color: "#6a7cff"
          },
          name: "月月盈",
          weight: 4,
          id: 150,
          day: 30,
          precent: 100
        },
        {
          total: 1000000,
          min: 1000,
          rate: 6,
          left: 0,
          taps: {
            classify: 1,
            type: 0,
            tap: "定期",
            color: "#6a7cff"
          },
          name: "三月惠發001",
          weight: 0,
          id: 150,
          day: 90,
          precent: 100
        },
        {
          total: 1000000,
          min: 5000,
          rate: 9.6,
          left: 999900,
          taps: {
            classify: 1,
            type: 0,
            tap: "定期",
            color: "#6a7cff"
          },
          name: "惠丰年發001",
          weight: 0,
          id: 150,
          day: 365,
          precent: 0.01
        },
        {
          total: 1000000,
          min: 5000,
          rate: 14,
          left: 500000,
          taps: {
            classify: 1,
            type: 0,
            tap: "定期",
            color: "#6a7cff"
          },
          name: "六月惠宝001",
          weight: 2,
          id: 150,
          day: 180,
          precent: 50
        },
        {
          total: 1000000,
          min: 1000,
          rate: 7,
          left: 395100,
          taps: {
            classify: 1,
            type: 1,
            tap: "定期",
            color: "#6a7cff"
          },
          name: "夏日盛会30天",
          weight: 3,
          id: 150,
          day: 30,
          precent: 60.49
        },
        {
          total: 1000000,
          min: 1000,
          rate: 11.5,
          left: 0,
          taps: {
            classify: 1,
            type: 0,
            tap: "定期",
            color: "#6a7cff"
          },
          name: "夏日盛会365",
          weight: 1,
          id: 150,
          day: 365,
          precent: 100
        },
        {
          total: 100000,
          min: 100,
          rate: 5.6,
          left: 10000,
          taps: {
            classify: 0,
            type: 0,
            tap: "新手",
            color: "#6a7cff"
          },
          name: "新手特惠",
          weight: 2,
          id: 150,
          day: 7,
          precent: 90
        }
      ]
    };
  },
  components: {
    AHeader,
    AFooter,
    ProList,
    advert,
    newList,
    ModelAgreement,
    HackneyedQuesition,
    newPorductList
  },
  computed: {
    rmclass() {
      return {
        active: this.rankWay === 2,
        show: this.rankM
      };
    },
    rtclass() {
      return {
        active: this.rankWay === 3,
        show: this.rankT
      };
    },
    rrclass() {
      return {
        active: this.rankWay === 4,
        show: this.rankR
      };
    }
  },
  methods: {
    //{{this.$store.state.procenter.allProductList}}
    allProduct() {
      this.allPro = !this.allPro;
    },
    newList() {
      return this.$store.state.home.newList;
    },
    products() {
      if (this.rankWay === 1) {
        return this.$store.state.procenter.allProductList;
      } else if (this.rankWay === 2) {
        if (this.rankM) {
          return this.$store.state.procenter.allProductList
            .slice(0)
            .sort(rankMD);
        } else {
          return this.$store.state.procenter.allProductList
            .slice(0)
            .sort(rankMU);
        }
      } else if (this.rankWay === 3) {
        if (this.rankT) {
          return this.$store.state.procenter.allProductList
            .slice(0)
            .sort(rankTD);
        } else {
          return this.$store.state.procenter.allProductList
            .slice(0)
            .sort(rankTU);
        }
      } else if (this.rankWay === 4) {
        if (this.rankR) {
          return this.$store.state.procenter.allProductList
            .slice(0)
            .sort(rankRD);
        } else {
          return this.$store.state.procenter.allProductList
            .slice(0)
            .sort(rankRU);
        }
      }
    },
    rankDefault() {
      this.rankWay = 1;
      (this.rankM = false), (this.rankT = false), (this.rankR = false);
    },
    rankMoney() {
      this.rankWay = 2;
      if (this.rankWay === 2) {
        this.rankM = !this.rankM;
        (this.rankT = false), (this.rankR = false);
      }
    },
    rankTime() {
      this.rankWay = 3;
      if (this.rankWay === 3) {
        this.rankT = !this.rankT;
        (this.rankM = false), (this.rankR = false);
      }
    },
    rankRate() {
      this.rankWay = 4;
      if (this.rankWay === 4) {
        this.rankR = !this.rankR;
        (this.rankT = false), (this.rankM = false);
      }
    }
  },
  mounted() {
    this.$store.dispatch("ALLPRODUCTLIST");
  }
};
</script>
<style lang="less" scoped>
.container {
  // width: 1020px;
  width: 1200px;
  margin: 40px auto 0 auto;
}
.new-list {
  margin-bottom: 20px;
}
.advert {
  margin-bottom: 50px;
}
// .advert-item{
//     height: 150px;
// }
.change-over {
  display: block;
  margin-top: -30px;
  font-size: 16px;
  margin-right: 20px;
  color: #f55736;
  cursor: pointer;
}
.top {
  // height: 200px;
  border: 1px solid #e5e5e5;
}
.top-img {
  height: 150px;
  background: url("/res/pro-center/top-bg.png");
  // background-size: cover;
  border-bottom: 2px solid #ff7542;
}
.top-select {
  height: 48px;
  line-height: 48px;
  font-size: 16px;
  padding-left: 32px;
  color: #808080;
}
.top-select .con {
  padding: 0 20px;
  cursor: pointer;
}
.top-select .con:hover {
  color: #ff7542;
}
.top-select .active {
  color: #ff7542;
}
.top-select span i {
  margin-left: 10px;
  vertical-align: -2px;
  transition: transform 0.5s;
}
.top-select .show i {
  transform: rotateZ(180deg);
}
.classify {
  border-right: 1px dashed #808080;
}
</style>


