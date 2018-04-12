<template>
    <div class="clearfix">
        <h4 class="title">银行卡管理</h4>
        <div class="content">
            <div v-if="!bankCard" class="add">
                <div class="add-btn">
                    <router-link to="/account/banksupervise/add">
                        <Icon class="add-icon" type="plus-circled" :size="64"></Icon>
                    </router-link>
                </div>
                <span class="add-desc">添加银行卡</span>
            </div>
            <div v-else class="clearfix">
                <div class="change">
                    <div class="clearfix">
                        <span class="name fl">邮政储蓄银行</span>
                        <span class="type fr">储蓄卡</span>
                    </div>
                    <span class="card-num">1234567891234567890</span>                    
                    <span class="card-master">持卡人:<span>何腾飞</span></span>
                </div>
                <div class="alter clearfix">
                    <span class="fl" @click="bankInforOpen = !bankInforOpen">详细信息<Icon class="arrow" :class="{down:bankInforOpen}" type="chevron-down"></Icon></span>
                    <router-link class="fr" to="/account/banksupervise/change">修改</router-link>
                </div>
                <transition name="slide-fade">
                    <div v-if="bankInforOpen" class="bank-info clearfix">
                        <span>姓名:何腾飞</span>
                        <span>开户分行：中国邮政储蓄银行上海分行</span>
                        <span>开户支行：临平路支行</span>
                        <!-- <span>省份：上海市</span> -->
                        <span>城市：上海市</span>   
                        <span>创建时间:2017-11-6 14:58:24</span>
                        <span>审核状态：审核成功</span>
                    </div>
                </transition>
            </div>
        </div>
        <HotRecommend/>
    </div>
</template>
<script>
import HotRecommend from '@/components/pure/account/HotRecommend'
export default {
    data(){
        return{
            bankCard:false,
            bankInforOpen:false,
        }
    },
    components:{
        HotRecommend
    },
    mounted(){
        let bread = [
            {
                name:'余惠宝',
                url:'/'
            },
            {
                name:'我的账户',
                url:'/account'
            },
            {
                name:'银行卡管理',
                url:''
            }
        ];
        this.$store.dispatch('accountBreadChange',bread);
    }
}
</script>
<style lang="less" scoped>
.title{
    font-size: 16px;
    color: #4c4c4c;
    display: block;
}
.content{
    min-height: 600px;
}
.add,.change{
    width: 330px;
    height: 170px;
    margin-left: 22px;
    margin-top: 50px;
    border-radius: 6px;
    border:1px solid #e5e5e5;
}
.change{
    padding: 16px;
    background: url(../../../assets/account/yzyh.png);
    position: relative;
}
.add:hover,.change:hover{
    box-shadow: 0 2px 7px rgba(0,0,0,.15);

}
.add-btn{
    width: 64px;
    height: 64px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
}
.add-icon{
    color:#e5e5e5;
    cursor: pointer;
}
.add-desc{
    display: block;
    text-align: center;
    margin-top: 10px;
    font-size: 14px;
    color: #ccc;
}
.name{
    font-size: 16px;
    color: #fff;
    margin-top: 20px;
    margin-left: 100px;
}
.type{
    margin-top: 20px;
    color: #fff;
    background:#4c4c4c;
    padding: 2px 4px;
    border-radius: 4px;
}
.card-num{
    display: block;
    color: #fff;
    text-align: right;
    margin-top: 10px;
    margin-right: 6px;
    font-size: 18px;
    font-weight: 600;
    // letter-spacing: 2px;
}
.card-master{
    color: #fff;
    position: absolute;
    bottom: 10px;
    // left: 10px;
}
.alter{
    width: 330px;
    // height: 170px;
    margin-left: 22px;
    font-size: 14px;
    color:#3399ff;
    margin-top: 10px;
}
.alter span{
    cursor: pointer;
}
.arrow{
    color: #3399ff;
    margin-left: 10px;
    transition: transform .3s;
}
.arrow.down{
    transform: rotateZ(180deg);
}
.bank-info{
    margin-left: 22px;
    margin-top: 20px;
}
.bank-info span{
    display: block;
    font-size: 14px;
    line-height: 2;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  transform: translateX(10px);
  opacity: 0;
}
</style>


