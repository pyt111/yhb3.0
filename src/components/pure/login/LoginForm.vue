<template>
    <div class="container">
        <h4>欢迎登录余惠宝</h4>
        <div v-if="scanCode" class="account-key-login icon-login" @click="scanCodeLogin"></div>
        <div v-else class="scan-code-login icon-login" @click="scanCodeLogin"></div>
        <div v-if="!scanCode" class="scancode-tips">
            <span class="scancode-tips-icon"></span>
            <span class="scancode-tips-desc">扫码登录更安全</span>
        </div>
        <Form v-if="!scanCode" class="login-form dsbjfs" ref="formInline" :model="formInline" :rules="ruleInline">
            <FormItem prop="user">
                <Input class="form-item" type="text" v-model="formInline.user" placeholder="请输入手机号">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem prop="password">
                <Input class="form-item" type="password" v-model="formInline.password" placeholder="请输入密码">
                <Icon type="ios-locked-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <span class="link-one clearfix">
                <input type="checkbox" name="remeber" @click="remeberPsd" ref="remeberPsd">
                <span>记住密码</span>
                <router-link to="/resetpwd" class="fr forget">忘记密码？</router-link>
            </span>
            <FormItem>
                <Button type="primary" @click="handleSubmit('formInline')" class="login-btn">登录</Button>
            </FormItem>
            <span class="link-one clearfix to-regist">
                <router-link to="/regist">立即注册</router-link>
            </span>
        </Form>
        <div v-else class="qrcode">
            <img src="/app2/activity/erweima" alt="">
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      scanCode: false,
      single: false,
      formInline: {
        user: "",
        password: ""
      },
      ruleInline: {
        user: [{ required: true, message: "请填写用户名", trigger: "blur" }],
        password: [
          { required: true, message: "请填写密码", trigger: "blur" },
          {
            type: "string",
            min: 6,
            message: "密码长度不能小于6位",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    scanCodeLogin() {
      this.scanCode = !this.scanCode;
    },
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("提交成功!");
        } else {
          this.$Message.error("表单验证失败!");
        }
      });
    },
    remeberPsd() {
      console.log(this.$refs.remeberPsd.checked);
      if (this.$refs.remeberPsd.checked) {
        console.log("选中");
        localStorage.setItem("user", this.formInline.user);
        localStorage.setItem("password", this.formInline.password);
      } else {
        console.log("未选中");
      }
    }
  },
  beforeMount() {
    let user = localStorage.getItem("user");
    let password = localStorage.getItem("password");
    if (user && password) {
      this.formInline.user = user;
      this.formInline.password = password;
    }
  }
};
</script>
<style>
.remeber {
  background-color: rgba(0, 0, 0, 0.3) !important;
  color: #ffffff;
}

.dsbjfs input {
  height: 40px !important;
  background-color: rgba(0, 0, 0, 0.3);
  color: #ffffff;
}

.dsbjfs .ivu-input-group-prepend {
  background-color: rgba(0, 0, 0, 0.3) !important;
}

/* 更改input内的placeholder属性 */

.dsbjfs input::-webkit-input-placeholder {
  color: #fff;
}

.dsbjfs input:-moz-placeholder {
  color: #fff;
}

.dsbjfs input::-moz-placeholder {
  color: #fff;
}

.dsbjfs input:-ms-input-placeholder {
  color: #fff;
}
</style>
<style scoped="scoped" lang="less">
.container {
  width: 100%;
  height: 100%;
  position: relative;
}
.icon-login {
  width: 68px;
  height: 61px;
  opacity: 0.7;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
}
.account-key-login {
  background: url(../../../assets/icon/qrcode.png) -48px -9px;
}
.scan-code-login {
  background: url(../../../assets/icon/qrcode.png) -115px -15px;
}
.scancode-tips {
  position: absolute;
  top: 12px;
  display: inline-block;
  right: 43px;
  height: 23px;
  line-height: 23px;
  background: #ffccbc;
  border: 1px solid #b69982;
  white-space: nowrap;
  border-radius: 5px;
  padding: 0 10px;
}
.scancode-tips::before {
  position: absolute;
  content: "";
  width: 0;
  height: 0;
  left: 100%;
  border: solid transparent;
  border-width: 6px;
  border-left-color: #ffccbc;
  top: 5px;
}
// .scancode-tips::after{
//     position: absolute;
//     content:'';
//     width: 0;
//     height: 0;
//     left:100%;
//     border: solid transparent;
//     border-width: 4px;
//     border-left-color: #fff;
//     top: 7px;
// }
.scancode-tips-icon {
  display: inline-block;
  width: 11px;
  height: 13px;
  background: url(../../../assets/icon/qrcode.png) -222px -16px;
  vertical-align: middle;
}
.container > h4 {
  width: 100%;
  height: 96px;
  line-height: 96px;
  text-align: center;
  font-size: 24px;
  color: #fff;
}

.login-form {
  width: 308px;
  margin: 0 auto;
}

.link-one {
  display: block;
  margin: 12px auto;
  position: relative;
}

.link-one > input {
  height: 13px !important;
  position: absolute;
  top: 3px;
}

.link-one > span {
  position: absolute;
  top: 0;
  left: 18px;
  color: #fff;
  letter-spacing: 2px;
}

.forget {
  color: #fff;
  letter-spacing: 2px;
}

.login-btn {
  width: 100%;
  height: 47px;
  font-size: 18px;
  letter-spacing: 3px;
}

.to-regist {
  text-align: center;
}

.to-regist > a {
  color: #fff;
}
.qrcode {
  margin-left: 125px;
  margin-top: 45px;
}
</style>


