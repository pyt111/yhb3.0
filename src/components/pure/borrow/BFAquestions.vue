<template>
    <div class="container">
        <div class="title">
            <span class="name fl">常见问题</span>
            <router-link class="more fr" to="/index">更多 <Icon type="ios-arrow-forward"></Icon> <Icon type="ios-arrow-forward"></Icon></router-link>
        </div>
        <div class="content">
            <div class="faq-item">
                <span class="faq-tit">1.注册时，提示手机号已被注册怎么办？</span>
                <p>首先，请确认是否曾经使用过该手机号码在余惠宝进行过注册。如果确认注册过，您可以通过密码找回，获得该账号的登录密码。如果确认您的手机号码未在余惠宝注册过但显示已被注册，请联系客服协助解决。电话：400-000-8888。</p>
            </div>
            <div class="faq-item">
                <span class="faq-tit">1.注册时，提示手机号已被注册怎么办？</span>
                <p>首先，请确认是否曾经使用过该手机号码在余惠宝进行过注册。如果确认注册过，您可以通过密码找回，获得该账号的登录密码。如果确认您的手机号码未在余惠宝注册过但显示已被注册，请联系客服协助解决。电话：400-000-8888。</p>
            </div>
            <div class="faq-item">
                <span class="faq-tit">1.注册时，提示手机号已被注册怎么办？</span>
                <p>首先，请确认是否曾经使用过该手机号码在余惠宝进行过注册。如果确认注册过，您可以通过密码找回，获得该账号的登录密码。如果确认您的手机号码未在余惠宝注册过但显示已被注册，请联系客服协助解决。电话：400-000-8888。</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.container {
  width: 1200px;
  margin: 0 auto;
  min-height: 520px;
  border: 1px solid #e5e5e5;
  background: #fff;
  margin-bottom: 170px;
}
.title {
  width: 100%;
  height: 75px;
  border-bottom: 1px solid #e5e5e5;
}
.name {
  font-size: 22px;
  padding-left: 40px;
  height: 75px;
  line-height: 75px;
}
.more {
  font-size: 18px;
  padding-right: 20px;
  height: 83px;
  line-height: 75px;
  opacity: 0.5;
}
.content {
  display: flex;
  justify-content: space-around;
  font-size: 16px;
}
.faq-item {
  width: 287px;
  margin-top: 27px;
}
.faq-tit {
  display: block;
  margin-bottom: 30px;
}
</style>


