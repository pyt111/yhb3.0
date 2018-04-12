<template>
    <!-- 热门推荐 -->
    <div class="hot clearfix">
        <span class="title">热门推荐</span>
        <div class="hot-content">
            <router-link v-for="item,index in hots" :to="item.path" key="index" class="hot-item">
                <div v-if="item.cfp" class="cfp"></div>
                <div v-if="item.regular" class="regular"></div>
                <span class="name">{{item.name}}</span>
                <div class="item-info clearfix">
                    <div class="rate fl">
                        <span class="value">{{item.rate}}%</span>
                        <span class="desc">年化收益率</span>
                    </div>
                    <div class="time fl">
                        <span class="value">{{item.day}}<span>天</span></span>
                        <span class="desc">投资期限</span>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            hots:[
                {
                    path:'/account',
                    name:'惠丰年发',
                    rate:9.6,
                    day:90,
                    cfp:true,
                },
                {
                    path:'/account',
                    name:'惠丰年发',
                    rate:8.3,
                    day:60,
                },
                {
                    path:'/account',
                    name:'惠丰年发',
                    rate:7.1,
                    day:45,
                    regular:true,
                }
            ]
        }
    }
}
</script>
<style lang="less" scoped>
.cfp{
    width: 79px;
    height: 29px;
    background: url(../../../assets/product-center/cfp.png);
    position: absolute;
    right: 0px;
}
.regular{
    width: 79px;
    height: 29px;
    background: url(../../../assets/product-center/regular.png);
    position: absolute;
    right: 0;
}
.title{
    font-size: 18px;
    color: #4c4c4c;
}
.hot-content{
    margin-top: 20px;
    display: flex;
    flex-direction: row;    
    flex-wrap: wrap;
    justify-content: space-between;
}
.hot-content:after{
    width: 260px;
    content:'';
}
.hot-item{
    display: inline-block;
    width: 260px;
    height: 170px;
    padding-left: 20px;
    margin-bottom: 10px;
    border: 1px solid #e5e5e5;
    color: #4c4c4c;
    transition: all .5s;
    position: relative;
}
.hot-item:hover{
    box-shadow:1px 1px 4px 3px rgba(255, 117, 66, .5)            
}
.name{
    font-size: 18px;
    display: block;
    margin-top: 14px;
}
.item-info{
    margin-top: 10px;
}
.rate{
    display: inline-block;
    width: 120px;
}
.rate .value{
    color:#ff7542;
    font-size: 36px;
}
.desc{
    margin-top: 20px;
    display: block;
    color:#808080;
}
.time{
    margin-left: 30px;
    margin-top: 5px;
}
.time .value{
    font-size: 30px;
}
.time .value span{
    font-size: 24px;
    margin-left: 5px;
    vertical-align: 2px;
}
</style>


