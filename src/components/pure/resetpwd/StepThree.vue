<template>
    <div>
        <Icon class="result" type="checkmark-circled" size="60"></Icon>
        <span class="result-msg">您的登录密码已经设置成功！</span>
        <router-link class="result-msg go" to="/login">立即投资</router-link>
    </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped="scoped">
    .result{
        width: 80%;
        display: block;
        text-align: center;
        color:#ff7542;
        margin-left: auto;
        margin-right: auto;
        margin-top: 100px;
    }
    .result-msg{
        display: block;
        text-align: center;
        margin-top: 25px;
        font-size: 14px;
    }
    .go{
        width: 20%;
        height: 44px;
        line-height: 44px;
        background-color:#ff7542;
        color: #fff;
        margin-left: auto;
        margin-right: auto;
        border-radius: 5px;
    }
</style>


