<template>
  <div class="clearfix">
    <b class="attention">真实姓名和身份证号一经认证<span>不予修改</span>,如确需修改，请联系客服</b>
    <span class="service">客服热线：<span class="phone">400-838-8304</span>（客服时间：9：00-21：00）</span>
  </div>
</template>
<script>
export default {
    data(){
        return{

        }
    }
}
</script>
<style lang="less" scoped>
.attention{
    display: block;
    font-size: 16px;
    text-align: center;
    margin-top: 54px;
    color:#4c4c4c;
}
.attention>span{
    color: #e74141;
}
.service{
    display: block;
    text-align: center;
    color:#4c4c4c;
    margin-top: 20px;
    margin-bottom: 50px;
    font-size: 14px;
}
.phone{
    color:#3399ff;
}
</style>


