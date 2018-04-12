<template>
    <div class="clearfix">
        <ul class="content"> 
            <li class="item animated rotateIn" v-for="item,index in list" key="index+1" :class="{unuse:item.state !== 0}" :style="{animationDelay:index * 0.1 + 's'}">
                <div class="info fl">
                    <div class="info-msg clearfix">
                        <div class="fl money">
                            <span class="money-unit">￥</span>
                            <span class="money-value">{{item.value}}</span>
                        </div>
                        <div class="desc fr">
                            <span class="name">{{item.name}}</span>
                            <span class="remark">{{item.remarks}}</span>
                            <span class="appoint">{{item.appoint}}</span>
                        </div>
                    </div>
                    <span class="time">{{item.getTime}}&nbsp 至 &nbsp{{item.overdueTime}}</span>
                    <span class="remainder-time">{{'剩余'+item.day+'天过期'}}</span>
                </div>
                <div class="skip">
                    <router-link v-if="item.state === 0" class="use fr" to="/">
                        <span>立即使用</span>
                    </router-link>
                    <span v-else-if="item.state === 1" class="use fr">
                        <span class="used">已使用</span>
                    </span>
                    <span v-else class="use fr">
                        <span class="used">{{item.unuse}}</span>
                    </span>
                </div>
                <div class="tooth">
                    <div></div><div></div><div></div><div></div><div></div>
                    <div></div><div></div><div></div><div></div><div></div>
                </div>
                <div v-if="item.state === 2" class="overdus-stamp"></div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props:['list'],
    data(){
        return{

        }
    }
}
</script>
<style lang="less" scoped>
.content{
    padding-top: 36px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    overflow: hidden;
}
.item{
    position: relative;
    width: 388px;
    height: 182px;
    color: #fff;
    border: 1px solid #FCAF41;
    border-left: none;
    margin-bottom: 40px;
    overflow: hidden;
}
.item.unuse{
    filter: grayscale(100%);
}
.info{
    width: 340px;
    background: #FCAF41;
    height: 100%;
    padding-top: 30px;
}
.info-msg{
    height: 80px;
}
.money{
    display: inline-block;
    width: 166px;
    height: 100%;
    line-height: 80px;
    font-size: 30px;
    // color: #FDF5AF;
    text-align: center;
    font-weight: 600;
}
.money-value{
    font-size: 40px;
}
.money-unit{
    vertical-align: 2px;
}
.desc{
    width: 150px;
    margin-right: 24px;
}
.name{
    display: block;
    white-space: nowrap;
    font-size: 16px;
    text-overflow: ellipsis;
    overflow: hidden;
    font-weight: 600;
}
.remark{
    display: block;
    height: 25px;
    margin-top: 5px;
    line-height: 1.5;
    overflow: hidden;
}
.appoint{
    display: block;
    overflow: hidden;
}
.time{
    display: block;
    margin-top: 12px;
    margin-left: 28px;
}
.remainder-time{
    display: block;
    font-size: 14px;
    // color:#FDF5AF;
    margin-top: 10px;
    margin-left: 28px;
}
.use{
    width: 47px;
    font-size: 20px;
    height: 100%;
    color:#FCAF41;
}
.use>span{
    width: 1em;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 25px;
}
.use>span.used{
    margin-top: 40px;
}
.tooth{
    position: absolute;
    height: 100%;
    left: -5px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    overflow: hidden;
}
.tooth>div{
    width: 10px;
    height: 10px;
    background: #fff;
    border-radius: 50%;
    margin: 5px 0;
}
.overdus-stamp{
    position: absolute;
    width:72px;
    height: 72px;
    background: url(../../../assets/account/coupon-overdue.png);
    right: 48px;    
}
</style>


