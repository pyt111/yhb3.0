<template>
    <div>
        <BHeader />
        <div class="content">
            <div class="center">
                <div class="form-login fr">
                    <LoginForm />
                </div>
            </div>
        </div>
        <BFooter />
    </div>
</template>
<script>
import BHeader from "@/components/pure/common/BHeader";
import BFooter from "@/components/pure/common/BFooter";
import LoginForm from "@/components/pure/login/LoginForm";
export default {
  data() {
    return {};
  },
  components: {
    BHeader,
    BFooter,
    LoginForm
  }
};
</script>
<style scoped="scoped" lang="less">
.content {
  width: 100%;
  height: 724px;
  background: url(/res/login-regist/login-bg.png);
  background-position: center;
  min-width: 1200px;
  position: relative;
}
.center {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
}
.form-login {
  width: 400px;
  height: 410px;
  margin-top: 95px;
  background-color: rgba(0, 0, 0, 0.2);
}
</style>


