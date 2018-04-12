<template>
    <div class="clearfix">
        <div class="title">{{product.name}}</div>
        <div class="detail-pro clearfix">
            <div class="rate sec fl">
                <span class="value">{{product.rate.toFixed(2)}}<span class="value-pre">%</span></span>
                <span class="desc">预期年利率</span>
            </div>
            <div class="memberRate sec fl">
                <span class="value">{{product.memberRate.toFixed(2)}}<span class="value-pre">%</span></span>
                <span class="desc">会员年利率</span>
            </div>
            <div class="date sec fl">
                <span class="value">{{product.day}}<span class="value-pre">天</span></span>
                <span class="desc">项目期限</span>
            </div>
            <div class="progress sec fl">
                <Progress v-if="product.percent <= 100" class="progress-advence" :percent="product.percent" status="active" :stroke-width="6" hide-info></Progress>
                <Progress v-else class="progress-advence" :percent="allPercent" status="active" :stroke-width="6" hide-info></Progress>
                <span class="desc">进度：{{product.percent}}%</span>
            </div>
        </div>
        <div class="more-detail-pro clearfix">
            <div class="one fl">
                <span class="more-detail-item">总金额：<span>{{product.total / 10000}} 万元</span></span>
                <span class="more-detail-item">发布时间：<span>{{product.Btime}}</span></span>
            </div>
            <div class="two fl">
                <span class="more-detail-item">起投金额：<span>{{product.min}} 元</span></span>
                <span class="more-detail-item">结束时间：<span>{{product.Etime}}</span></span>
            </div>
            <div class="three fl">
                <span class="more-detail-item">剩余可投：<span>{{product.left}} 元</span></span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ["product"],
  data() {
    return {
      allPercent: 100
    };
  }
};
</script>
<style lang="less">
.ivu-progress-inner .ivu-progress-bg {
  background: #ff7542 !important;
}
</style>
<style lang="less" scoped>
.title {
  height: 64px;
  line-height: 64px;
  border-bottom: 1px solid #e5e5e5;
  color: #4c4c4c;
  font-size: 20px;
}
.detail-pro {
  margin-top: 30px;
}
.rate {
  padding-right: 18px;
  border-right: 1px dashed #e5e5e5;
}
.rate .value {
  font-size: 36px;
  color: #ff7542;
}
.memberRate {
  padding-left: 18px;
}
.memberRate .value {
  font-size: 28px;
  color: #ff7542;
  margin-top: 10px;
}
.date {
  margin-left: 110px;
}
.date .value {
  font-size: 36px;
}
.value-pre {
  font-size: 16px;
}
.sec > span {
  display: block;
}
.desc {
  margin-top: 10px;
  font-size: 14px;
  color: #808080;
}
.progress {
  margin-top: 20px;
  margin-left: 100px;
}
.progress-advence {
  width: 200px;
}
.progress .desc {
  margin-top: 26px;
}
.more-detail-pro {
  margin-top: 58px;
}
.more-detail-pro > div > span {
  display: block;
}
.one {
  width: 190px;
}
.two {
  width: 150px;
  margin-left: 100px;
}
.three {
  margin-left: 76px;
}
.more-detail-item {
  font-size: 14px;
  color: #808080;
  margin-bottom: 16px;
}
.more-detail-item span {
  color: #4c4c4c;
}
</style>


