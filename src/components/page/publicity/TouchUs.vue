<template>
    <!-- <img :src="img" alt=""> -->
    <div>
        <img src="../../../assets/publicity/contact-us-title.png" alt="">
        <div class="item-title">
            <i></i>
            <h3>联系我们</h3>
            <i></i>
        </div>
        <div class="item-content">
            <div class="contact-address">
                <h3>联系地址：</h3>
                <p>上海市虹口区溧阳路1111号永融企业中心30楼A区</p>
            </div>
            <div class="manual-service">
                <h3>人工服务：</h3>
                <p>如果您在使用余惠宝平台的过程中有任何疑问，欢迎您致电客户服务热线联络我们的客服人员。</p>
                <p class="suojin">客服电话：400-838-8304</p>
                <p class="suojin">客服邮箱：yhb_service@163.com</p>
            </div>
            <div class="company-address">
                <h3>公司地址：</h3>
                <iframe class="maps" src="https://www.flygoing.cn/yuedu/map.html" frameborder="0"></iframe>
            </div>
        </div>
    </div>
</template>
<script>
import {IMG} from '@/config/url'
export default {
    data(){
        return{
            img:IMG + '/publicity/contact-us.png'
        }
    },
    mounted(){
        let bread = [
            {
                name:'余惠宝',
                url:'/'
            },
            {
                name:'信息披露',
                url:'publicity'
            },
            {
                name:'联系我们',
                url:''
            }
        ];
        this.$store.dispatch('publicityBreadChange',bread);
        this.$store.dispatch('publicityNavChange',3)//here
    }
}
</script>
<style lang="less" scoped>
.item-title{
    margin-top: 50px;
    font-size: 16px;
    font-weight: 900;
    color: #000;
    font-family: "PingFang";
    text-align: center;
    i{
        width: 36px;
        height: 3px;
        display: inline-block;
        background: #000;
        vertical-align: 4px;
        margin: 0 20px;
    }
    h3{
        display: inline-block;
    }
}
.item-content{
    width: 800px;
    margin: 50px auto;
}
.contact-address,.manual-service,.company-address{
    margin-bottom: 50px;
    h3{
        font-size: 16px;
        font-weight: 900;
        margin-bottom: 15px;
        text-shadow: 1px 0px;
    }
    p{
        color: #959595;
        font-size: 14px;
        font-weight: 600;
        line-height: 2;
    }
    .suojin{
        text-indent: 32px;
    }
}
.maps{
    width: 100%;
    height: 667px;
}
</style>


