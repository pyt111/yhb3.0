<template>
    <div class="finance-end clearfix">
        <div class="container clearfix">
            <span class="time-btn" :class="{show:financeTap === 1}" @click="financeTapChange(1)">全部</span>
            <span class="time-btn" :class="{show:financeTap === 2}" @click="financeTapChange(2)">近一周</span>
            <span class="time-btn" :class="{show:financeTap === 3}" @click="financeTapChange(3)">近1个月</span>
            <span class="time-btn" :class="{show:financeTap === 4}" @click="financeTapChange(4)">近3个月</span>            
            <div class="date-picker fr">
                日期<DatePicker class="date-item" type="daterange" placement="bottom-end" placeholder="请选择日期" style="width: 200px"></DatePicker>
            </div>
        </div>
        <div class="finance-end-content clearfix">
            <div v-for="item,index in lists" class="on-item clearfix animated flipInX" :style="{animationDelay:index * 0.1 + 's'}">
                <div v-if="item.scareBuying" class="scare-buying"></div>
                <div v-if="item.shiftTo" class="fin-end fin-end-date"></div>
                <div v-else class="fin-end fin-end-out"></div>
                <div class="chief clearfix">
                    <div class="chief-head fl">
                        <div class="head-box">
                            <span class="chief-head-name">{{item.name}}</span>
                            <span class="chief-head-time">到期：{{item.endTime}}</span>
                        </div>
                    </div>
                    <div class="chief-body clearfix fl">
                        <div class="money fl">
                            <span class="value">{{item.money}}</span>
                            <span class="desc">收益金额（元）</span>
                        </div>
                        <div class="rate fl">
                            <span class="value">{{item.rate}}%</span>
                            <span class="desc">年化收益率</span>
                        </div>
                        <div class="freeze fl">
                            <span class="value">{{item.freeze}}</span>
                            <span class="desc">冻结金额（元）</span>
                        </div>
                    </div>
                    <div class="chief-tail fr">
                        <span class="chief-btn" @click="check(index)">查看详情<Icon class="arrow-icon" :class="{show:show === index}" type="ios-arrow-down"></Icon></span>
                    </div>
                </div>
                <div class="supply clearfix" :class="{show:show === index}">
                    <div class="supply-time fl">
                        <span>购买时间：{{item.buyTime}}</span>
                        <span>到期时间：{{item.endTime}}</span>
                    </div>
                    <div class="supply-info fl">
                        <span>产品期限（天）：<span class="attention">{{item.day}}</span></span>
                        <span>购买金额（元）：<span class="attention">{{item.buyMoney}}</span></span>
                    </div>
                    <div class="supply-operate fr">
                        <router-link to="/account" class="contract">理财协议</router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="acc-page-wrap">
            <Page :total="total" :page-size="size" show-elevator></Page>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            financeTap:1,
            show:-1,
            total:15,
            size:3,
            lists:[
                {
                    name:'三月惠发',
                    buyTime:'2017-8-30',
                    endTime:'2017-10-30',
                    money:'78.90',
                    buyMoney:'20000.00',
                    day:30,
                    rate:10.5,
                    freeze:6666.66,
                    scareBuying:true,//抢购图标
                    shiftTo:true,//转入图标
                    over:false,//结束图标
                },
                {
                    name:'三月惠发',
                    buyTime:'2017-8-30',                    
                    endTime:'2017-10-30',
                    money:'78.90',
                    buyMoney:'20000.00',                    
                    day:30,                    
                    rate:10.5,
                    freeze:6666.66,
                    scareBuying:false,
                    shiftTo:false,//转入图标                    
                },
                {
                    name:'三月惠发',
                    buyTime:'2017-8-30',                                        
                    endTime:'2017-10-30',
                    money:'78.90',
                    buyMoney:'20000.00', 
                    day:30,                                                                               
                    rate:10.5,
                    freeze:6666.66,
                    scareBuying:false,
                    shiftTo:true,//转入图标                    
                },
            ],
        }
    },
    methods:{
        financeTapChange(index){
            this.financeTap = index
        },
        check(index){
            this.show = this.show === index ? -1:index;
        }
    }
}
</script>
<style lang="less" scoped>
.fin-end{
    position: absolute;
    width: 72px;
    height: 72px;
    right: 0;
}
.fin-end-date{
    background: url(../../../assets/account/fin-end-date.png)
}
.fin-end-out{
    background: url(../../../assets/account/fin-end-out.png)
}
.finance-end{
    min-height: 500px;
}
.container{
    line-height: 32px;
}
.time-btn{
    display: inline-block;
    width: 70px;
    height: 22px;
    line-height: 22px;
    color:#808080;
    border-radius: 11px;
    overflow: hidden;
    cursor: pointer;
    text-align: center;
    margin-right: 14px;
    position: relative;
    vertical-align: middle;
}
.time-btn:before{
    display: block;
    content:'';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    background: #98d1ff;
    border-radius: 11px;
    transform: scale(0);
    transition-property: transform;
    transition-duration: .5s;
    transition-timing-function: ease-out;
}
.time-btn.show{
    color:#fff;
}
.time-btn.show:before{
    transform: scale(2);
}
.date-item{
    display: inline-block;
    // margin-right: 10px;
    margin-left: 10px;
}
.finance-end-content{
    margin-top: 12px;
}
.on-item{
    font-size: 12px;
    color: #808080;
    position: relative;
}
.scare-buying{
    width: 48px;
    height: 48px;
    background: url(../../../assets/product-center/i-icon-gray.png);
    position: absolute;
    left: 4px;
}
.chief{
    height: 142px;
    line-height: 1;
    border: 1px solid #e5e5e5;
    border-left: 4px solid #808080;
    background: #f5f5f5;
}
.chief-head{
    width: 174px;
    height: 142px;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}
.head-box{
    width: 100%;
    height: 106px;
    border-right: 1px dashed #e5e5e5;
    overflow: hidden;
}
.chief-head-name{
    display: block;
    font-size: 18px;
    color:#4c4c4c;
    margin-top: 26px;
}
.chief-head-time{
    display: block;
    margin-top: 26px;
}
.money,.rate,.freeze{
    width: 176px;
    height: 100%;
}
.value{
    color:#4c4c4c;
    font-size: 28px;
    margin-top: 36px;
}
.desc{
    margin-top: 24px;
}
.chief-body>div>span{
    line-height: 1;
    display: block;
    text-align: center;
}
.chief-tail{
    margin-top: 84px;
    margin-right: 26px;
}
.chief-btn{
    // color:#3399ff;
    cursor: pointer;
}
.arrow-icon{
    color:#808080;
    margin-left: .5em;
    transition: transform .3s;
}
.arrow-icon.show{
    transform: rotateZ(180deg);
}
.supply{
    max-height: 0;
    overflow: hidden;
    line-height: 1;
    margin-top: 22px;
    font-size: 14px;
    transition: max-height 1s cubic-bezier(.8,2,.2,1.4);
}
.supply.show{
    max-height: 160px;
}
.supply-time{
    margin-left: 20px;
    padding-top:8px;
    margin-bottom: 30px; 
}
.supply-time>span{
    display: block;
    margin-bottom: 20px;
}
.supply-info{
    margin-left: 180px;
    padding-top: 8px;
}
.supply-info>span{
    display: block;
    margin-bottom: 20px;
}
.attention{
    color:#808080;
}
.supply-operate{
    width: 80px;
    text-align: center;
    margin-right: 32px;
    margin-top: 20px;
}
.contract{
    width: 80px;
    height: 30px;
    line-height: 30px;
    color: #fff;
    background: #808080;
    display: block;
    text-align: center;
    border-radius: 6px;
    border: 1px solid #808080;
}
.acc-page-wrap{
    text-align: center;
}
</style>


