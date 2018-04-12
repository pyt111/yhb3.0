<template>
    <div>
        <div class="head clearfix">
            <img class="head-img fl" src="" alt="">
            <div class="head-info fl">
                <span class="name">{{'何腾飞'}}</span>
                <span v-if="level" class="level vip">会员</span>
                <span v-else class="level">普通</span>
            </div>
        </div>
        <div class="infos clearfix">
            <router-link to="/account" class="info-item fl id-card"></router-link>
            <router-link to="/account" class="info-item fl bank-card"></router-link>
            <router-link to="/account" class="info-item fl pay-pwd"></router-link>
            <router-link to="/account" class="info-item fl assurance"></router-link>
        </div>
    </div>
</template>
<script>
import {IMG} from '@/config/url'
export default {
    data(){
        return{
            // img:this.$store.state.user.img,
            level:false,
        }
    }
}
</script>
<style lang="less" scoped>
.head{
    height: 120px;
}
.head-img{
    width: 78px;
    height: 78px;
    background: url(../../../assets/home/agent-default.png);
    background-size: 100% 100%;
    margin-left: 32px;
    margin-top: 32px;
    border: 2px solid #e5e5e5;
    border-radius: 50%;
}
.head-info{
    display: inline-block;
    margin-top: 50px;
    margin-left: 12px;
    color:#4c4c4c;
}
.name{
    display: block;
    padding-left: .5em;
    margin-bottom: 6px;
}
.level{
    width: 56px;
    height: 18px;
    display: inline-block;
    margin-left: 5px;
    text-indent: 2em;
    background: url(../../../assets/account/com-acc.png);
}
.vip{
    background: url(../../../assets/account/vip-acc.png) !important;
}
.info-item{
    width: 28px;
    height: 28px;
    margin: 10px 20px 20px 0;
    display: inline-block;
}
.id-card{
    margin-left: 15px;
    background: url(../../../assets/account/s-one-def.png);
}
.id-card .active{
    background: url(../../../assets/account/s-one-act.png)
}
.bank-card{
    background: url(../../../assets/account/s-two-def.png)
}
.bank-card .active{
    background: url(../../../assets/account/s-two-act.png)
}
.pay-pwd{
    background: url(../../../assets/account/s-three-def.png)
}
.pay-pwd .active{
    background: url(../../../assets/account/s-three-act.png)
}
.assurance{
    background: url(../../../assets/account/s-four-def.png)
}
.assurance .active{
    background: url(../../../assets/account/s-four-act.png)
}
</style>


