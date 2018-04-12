<template>
    <div class="clearfix">
        <div class="clearfix">
            <router-link to="/account" class="nav-item" :class="{move:move === 1}">账户总览</router-link>            
        </div>
        <div class="clearfix">
            <!-- <div class="nav-title" @click="open(1)">
                 <span>
                    投资管理
                    <Icon class="fr title-arrow" type="ios-arrow-right"></Icon>                                    
                </span> 
            </div>   -->
            <!-- <template v-if="openGroup === 1"> -->
               <router-link to="/account/financing" class="nav-item" :class="{move:move === 2}">我的理财</router-link>
               <router-link to="/account/current" class="nav-item" :class="{move:move === 3}">活期宝</router-link> 
            <!-- </template> -->
        </div>
        <router-link to="/account/coupon" class="nav-item" :class="{move:move === 4}">我的礼券</router-link>
        <router-link to="/account/warranty" class="nav-item" :class="{move:move === 5}">我的保单</router-link>
        <router-link to="/account/information" class="nav-item" :class="{move:move === 6}">个人资料</router-link>
        <router-link to="/account/banksupervise" class="nav-item" :class="{move:move === 7}">银行卡管理</router-link>
        <router-link to="/account/mynews" class="nav-item" :class="{move:move === 8}">我的消息</router-link>
        <router-link to="/account/recommend" class="nav-item" :class="{move:move === 9}">推荐好友</router-link>
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    computed:{
        move(){
            return this.$route.matched[1].meta.aBar
        },
        openGroup(){
            return this.$store.state.account.navOpen
        }
    },
    methods:{
        open(index){
            let open = this.openGroup === index ? 0 : index
            this.$store.dispatch('accountNavChange',open)
        }
    }
}
</script>
<style lang="less" scoped>
.nav-title{
    position: relative;
    display: inline-block;
    width: 209px;
    height: 44px;
    line-height: 44px;
    cursor: pointer;
    border-bottom: 1px solid #e5e5e5;
    font-size: 14px;
    text-align: center;
    color: #4c4c4c;
    text-indent: 0;    
    transition: text-indent .3s;    
}
.nav-title>span{
    display: inline-block;
    line-height: 1;
    width: 100%;
    vertical-align: middle;
}
.nav-title:hover{
    position: relative;
    color:#ff7542;
    background: #fff;
    width: 209px;
    text-indent: 2em;
}
.title-arrow{
    position: absolute;
    top: 15px;
    right: 30px;
    // transition:  transform .5s;
}
.nav-title:hover
.title-arrow{  
    position: absolute;
    top: 0px;
    right: 15px;
    transform: rotateZ(90deg);     
}
.nav-item{
    display: block;
    height: 44px;
    line-height: 44px;
    border-bottom: 1px solid #e5e5e5;
    font-size: 14px;
    color:#4c4c4c;
    text-align: center;
    text-indent: 0;
    transition: text-indent .3s;
}
.nav-item:hover{
    color:#ff7542;
    background: #fff;
    width: 209px;
    text-indent:2em;
}
.nav-item.move{
    color:#ff7542;
    background: #fff;
    width: 209px;
    text-indent:2em;    
}
</style>


