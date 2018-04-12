<template>
    <div class="main">
        <div v-if="type === 0" class="pos">
            <div class="hint"><Icon class="icon" color="#33d685" type="checkmark-circled"></Icon> &nbsp{{phone}}&nbsp恭喜您注册成功！</div>
            <div class="continue">
                <img src="../../../assets/home/app-download-min.png" alt="">
                <span>扫描二维码，下载余惠宝APP</span>
            </div>
            <button><router-link to="/product">完成</router-link></button>
            <router-link class="skip" to="/product">跳过，以后设置 > </router-link>  
        </div>  
        <div v-if="type === 1" class="com">
            <div class="hint"><Icon class="icon" color="#33d685" type="checkmark-circled"></Icon> &nbsp恭喜您注册成功！</div> 
            <span>3秒后为您跳转到我要借款页面。</span>           
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            type:this.$parent.$data.type
        }
    },
    render: function (createElement) {
        return createElement('h1', this.blogTitle)
    },
    computed:{
        phone(){
            return this.$parent.$data.phone
        }
    },
    mounted(){
        let type = this.$parent.$data.type
        if(type === 1){
            setTimeout(() => {
                console.log('我要借款')
                this.$router.push('/borrow')
            }, 3000);
        }
    }
}
</script>
<style lang="less" scoped>
.main{
    width: 285px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
}
.hint{
    text-align: center;
    font-size: 18px;
    font-weight: 600;
}
.continue{
    margin: 30px 0 20px;
}
.continue>img{
    display: block;
    margin: 0 auto;
}
.continue>span{
    display: block;
    padding-top: 12px;
    font-size: 14px;
    color: #000;
    text-align: center;
}
.pos>button{
    width: 100%;
    margin-top: 20px;
    height: 40px;
    border: 1px solid #ff7542;
    background: #ff7542;
    color: #fff;
    font-size: 16px;
    letter-spacing: 2px;
    border-radius: 5px;
    cursor: pointer;
}
button a{
    display: block;
    color: #fff;
    width: 100%;
    height: 40px;
    line-height: 40px;
}
.skip{
    width: 100%;
    display: inline-block;
    margin-top: 10px;
    text-align: center;
    color: #ff7542;
    font-weight: 600;
}
.com{
    margin-top: 66px;
}
.com>span{
    display: block;
    padding: 18px 0 0 41px;
    font-size: 14px;
}
</style>


