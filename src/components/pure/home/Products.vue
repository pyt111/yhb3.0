<template>
    <div class="container clearfix">
        <div class="title">
            <span class="goods-title">精选产品</span>
            <span class="goods-info">惠生活，惠理财</span>
            <router-link class="goods-more fr" to="/product">更多>></router-link>
        </div>
        <div class="info clearfix">
            <ul class="product-list">
                <li v-for="item in products" class="product-item">
                    <span class="product-name">{{item.name}}</span>
                    <div class="product-info clearfix">
                        <div class="fl rate">
                            <span class="product-rate">{{item.rate}}%</span>
                            <span class="desc">预期年化收益率</span>
                        </div>
                        <div class="day fr">
                            <span class="product-day">
                                <span>{{item.day}}</span>天
                            </span>
                            <span class="desc">投资期限</span>
                        </div>
                    </div>
                    <div class="progress clearfix">
                        <Progress v-if="item.percent <= 100" class="product-progress" :percent="item.percent" :stroke-width="8" hide-info></Progress>
                        <Progress v-else class="product-progress" :percent="allPercent" :stroke-width="8" hide-info></Progress>                        
                        <div class="progress-info clearfix">
                            <span v-if="trade" class="desc fl money">剩余可投金额：{{item.left}}</span>
                            <span class="desc fr percent">{{item.percent}}%</span>
                        </div>
                        <template v-if="trade">
                            <router-link v-if="item.left > 0" :to="'/product/'+item.id">
                                <button class="buy">了解详情</button>
                            </router-link>
                            <button v-else class="buy unable">已售罄</button>
                        </template>
                        <router-link v-else :to="'/product/'+item.id">
                            <button class="buy">了解详情</button>
                        </router-link>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  props: ['products'],
  data() {
    return {
      allPercent:100,
      trade: false,
      list: [
        {
          name: "惠丰年發",
          rate: 10,
          day: 365,
          id: 150,
          left: 1000000,
          percent: 100
        },
        {
          name: "惠丰年發",
          rate: 10,
          day: 365,
          id: 150,
          left: 1000000,
          percent: 100
        },
        {
          name: "惠丰年發",
          rate: 10,
          day: 365,
          id: 150,
          left: 1000000,
          percent: 100
        },
        {
          name: "惠丰年發",
          rate: 10,
          day: 365,
          id: 150,
          left: 1000000,
          percent: 100
        },
        {
          name: "惠丰年發",
          rate: 10,
          day: 365,
          id: 150,
          left: 1000000,
          percent: 100
        },
        {
          name: "惠丰年發",
          rate: 10,
          day: 365,
          id: 150,
          left: 1000000,
          percent: 100
        },

        {
          name: "惠丰年發",
          rate: 10,
          day: 365,
          id: 150,
          left: 1000000,
          percent: 62.87
        },
        {
          name: "惠丰年發",
          rate: 10,
          day: 365,
          id: 150,
          left: 1000000,
          percent: 48.25
        }
      ]
    };
  }
};
</script>
<style lang="less">
.product-progress .ivu-progress-bg {
  background: #ff7542 !important;
}
</style>
<style scoped>
.container {
  width: 1200px;
  margin: 0 auto;
}

.title {
  height: 60px;
  line-height: 60px;
}

.goods-title {
  font-size: 20px;
  vertical-align: 10px;
  color: #4c4c4c;
}

.goods-info {
  color: #808080;
  font-size: 14px;
  margin-left: 30px;
  vertical-align: 10px;
}

.goods-more {
  color: #808080;
}

/* .info {
} */

.product-list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  text-align: center;
}

.product-list:after {
  content: "";
  width: 386px;
}

.product-item {
  display: inline-block;
  width: 386px;
  height: 372px;
  background: #fff;
  margin: 3px;
  margin-bottom: 20px;
  padding: 0 19px 0 31px;
  text-align: left;
  border: 1px solid #e5e5e5;
}

.product-item:hover {
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
  /* width: 392px;
  height: 378px;
  margin: 0;
  margin-bottom: 17px; */
  /* transition: width 0.5s, height 0.5s, margin 0.5s; */
}

.product-name {
  display: block;
  font-size: 24px;
  color: #4c4c4c;
  margin-top: 28px;
}

.product-info {
  margin-top: 40px;
}

.rate > span,
.day > span {
  display: block;
}

.product-rate {
  font-size: 46px;
  color: #ff7542;
}

.day .desc {
  margin-top: 4px;
}

.product-day {
  font-size: 18px;
  color: #4c4c4c;
  margin-top: 18px;
}

.product-day > span {
  font-size: 30px;
  margin-right: 5px;
  vertical-align: -2px;
}

.desc {
  color: #808080;
  font-size: 14px;
}

.progress {
  margin-top: 35px;
}

.buy {
  width: 210px;
  height: 44px;
  border: none;
  color: #fff;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  display: block;
  margin: 25px auto 0 auto;
  background: #ff7542;
}
</style>


