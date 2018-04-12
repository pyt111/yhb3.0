<template>
    <div class="finance-out clearfix">
        <div class="container clearfix">
            <span class="time-btn" :class="{show:financeTap === 1}" @click="financeTapChange(1)">全部</span>
            <span class="time-btn" :class="{show:financeTap === 2}" @click="financeTapChange(2)">近一周</span>
            <span class="time-btn" :class="{show:financeTap === 3}" @click="financeTapChange(3)">近1个月</span>
            <span class="time-btn" :class="{show:financeTap === 4}" @click="financeTapChange(4)">近3个月</span>            
            <div class="date-picker fr">
                日期<DatePicker class="date-item" type="daterange" placement="bottom-end" placeholder="请选择日期" style="width: 200px"></DatePicker>
            </div>
        </div>
        <div class="finance-out-content clearfix">
            <div class="out-title col clearfix">
                <div class="fl one">项目名称</div>
                <div class="fl two">申请时间</div>
                <div class="fl three">转出金额</div>
                <div class="fl four">实际到账</div>
                <div class="fl five">违约金</div>
                <div class="fl six">违约利息</div>
                <div class="fl seven">状态</div>
            </div>
            <div class="out-item col" v-for="item,index in OutLists">
                <div class="fl one name"><b>{{item.name}}</b></div>
                <div class="fl two">{{item.time}}</div>
                <div class="fl three dominant">{{item.outMoney}}</div>
                <div class="fl four dominant">{{item.factMoney}}</div>
                <div class="fl five dominant">{{item.penalty}}</div>
                <div class="fl six dominant">{{item.penalInterest}}</div>
                <div class="fl seven">
                    <span v-if="item.check === 0" class="uncheck">未审核</span>
                    <span v-else-if="item.check === 1" class="check-ok">审核通过</span>
                    <span v-else class="check-no">未通过</span>
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
            OutLists:[
                {
                    name:'惠丰年发',
                    time:'2017-11-01 10:58:12',
                    outMoney:7650,
                    factMoney:6666,
                    penalty:6666,
                    penalInterest:234,
                    check:0,//0：待审核 1:审核通过 2:未审核
                },
                {
                    name:'惠丰年发',
                    time:'2017-11-01 10:58:12',
                    outMoney:7650,
                    factMoney:6666,
                    penalty:6666,
                    penalInterest:234,
                    check:1,
                },
                {
                    name:'惠丰年发',
                    time:'2017-11-01 10:58:12',
                    outMoney:7650,
                    factMoney:6666,
                    penalty:6666,
                    penalInterest:234,
                    check:2,
                },
                {
                    name:'惠丰年发',
                    time:'2017-11-01 10:58:12',
                    outMoney:7650,
                    factMoney:6666,
                    penalty:6666,
                    penalInterest:234,
                    check:2,
                },
                {
                    name:'惠丰年发',
                    time:'2017-11-01 10:58:12',
                    outMoney:7650,
                    factMoney:6666,
                    penalty:6666,
                    penalInterest:234,
                    check:2,
                },
                {
                    name:'惠丰年发',
                    time:'2017-11-01 10:58:12',
                    outMoney:7650,
                    factMoney:6666,
                    penalty:6666,
                    penalInterest:234,
                    check:2,
                }
                
            ]
        }
    },
    methods:{
        financeTapChange(index){
            this.financeTap = index
        },
        
    }
}
</script>
<style lang="less" scoped>
.uncheck{
    color:#3399ff;
}
.check-ok{
    color:#33d685;
}
.check-no{
    color:#ff0000;
}
.finance-out{
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
.finance-out-content{
    font-size: 14px;
    margin-top: 10px;
    margin-bottom: 20px;
}
.out-title{
    background: #f5f5f5;
    border-top: 1px solid #e5e5e5;
}
.out-title>div{
    height: 46px;
    line-height: 46px;
}
.col>div{
    text-align: center;
}
.dominant{
    color:#ff7542;
}
.one{
    width: 94px;
}
.two{
    width: 176px;
}
.three{
    width: 128px;
}
.four{
    width: 128px;
}
.five{
    width: 114px;
}
.six{
    width: 106px;
}
.seven{
    width: 104px;
}
.out-item{
    // margin-top: 10px;
}
.out-item>div{
    height: 74px;
    line-height: 74px;
    border-bottom: 1px solid #ccc;
}
.acc-page-wrap{
    text-align: center;
}
</style>


