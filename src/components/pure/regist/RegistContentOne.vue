<template>
	<div class="container clearfix">
		<Form id="regist-form" class="only-regist-form" ref="registForm" :model="registForm" :rules="rules" :label-width="80">
			<!-- <FormItem class="type-acc" label="账户类型" prop="gender">
				<RadioGroup v-model="registForm.gender">
					<Radio label="male">普通会员</Radio>
					<Radio label="female">企业会员</Radio>
				</RadioGroup>
			</FormItem> -->
			<Form-item label="手机号码" prop="account">
				<Input class="regist-item" type="text" placeholder="请输入手机号码" v-model="registForm.account"></Input>
			</Form-item>
			<Form-item class="rela-plant" label="密码" prop="password">
				<Input :type="pwdType" placeholder="请输入密码" v-model="registForm.password"></Input>
				<em class="eye" :class="{'eye-open':open}" @click="eyeChange"></em>
			</Form-item>
			<!-- <Form-item class="rela-plant" label="图形验证码" prop="picCode">
				<Input type="text" placeholder="请输入图形验证码" v-model="registForm.picCode"></Input>
				<img class="imgVali" alt="点击更新" title="点击更新" />
			</Form-item> -->
			<Form-item class="rela-plant" label="图形验证码" prop="picCode">
				<Input type="text" placeholder="请输入图形验证码" v-model="registForm.picCode"></Input>
				<img class="imgVali" :src="imgCodeSrc" @click="imgRefresh" alt="点击更新" title="点击更新" />
			</Form-item>
			<Form-item class="rela-plant" label="短信验证码" prop="phoneCode">
				<Input type="text" placeholder="请输入短信验证码" v-model="registForm.phoneCode"></Input>
				<span class="send-code" :class="{allow:!this.$store.state.regist.sendAbel}" @click="sendCode">{{text}}</span>
			</Form-item>
			<Form-item>
				<Icon type="chevron-right" :class="{open: invitorOpen}" class="invitor-arrow" @click="inviteChange"></Icon>
				<span class="invite-btn" :class="{open: invitorOpen}" @click="inviteChange"> 邀请码（选填）</span>
			</Form-item>
			<Form-item label="请输入邀请码" prop="inviteCode" v-if="invitor">
				<Input type="text" placeholder="请输入邀请码" v-model="registForm.inviteCode"></Input>
			</Form-item>
			<div class="form-agreement">
				<Checkbox v-model="single">&nbsp&nbsp我同意
				</Checkbox>
				<span @click="modalRegist = true">《用户注册协议》</span>
				<!-- 和
				<span @click="modalRegist = true">《网站声明》</span> -->
				<p v-if="notice" class="animated zoomIn erroragentment">请仔细阅读并同意用户协议</p>
			</div>
			<Form-item>
				<Button class="regist-btn" type="primary" @click="handleSubmit('registForm')">立即注册</Button>
			</Form-item>
		</Form>
		<Modal
            title="用户注册及服务协议"
            v-model="modalRegist"
            class-name="vertical-center-modal">
            <RegistAgreement/>
        </Modal>
	</div>
</template>
<script>
import { postModelTwo, analy } from "@/tools/net";
import {
  validatePhone,
  validatePwd,
  validateInvitePhone,
  checkPhone
} from "@/tools/regx";
import RegistAgreement from "@/components/pure/common/RegistAgreement";
import { BASEURL, IMG, REGIST_PIC_VALIDATE } from "@/config/url";
import { message } from "@/tools/talk";
import store from "@/store";

/*
 * 异步验证验证码是否正确
 */
const checkPicCode = async (rule, value, callback) => {
  let timeStamp = store.state.regist.timeStamp.toString();
  let picTure = store.state.regist.picCodeTrue;
  console.log(typeof timeStamp, value, picTure);
  if (value.length) {
    try {
      const datas = await fetch(
        REGIST_PIC_VALIDATE,
        postModelTwo({ picCode: value, timeStamp: timeStamp })
      ).then(analy);
      let pictrue = console.log(datas);
      if (datas.code === 500) {
        console.log("500");
        callback(new Error(datas.message));
        store.state.regist.picCodeTrue = false;
      } else {
        console.log("200");
        callback();
        store.state.regist.picCodeTrue = true;
      }
    } catch (e) {
      return false;
    }
  } else {
    return false;
  }
};
export default {
  data() {
    return {
      modalRegist: false,
      modal1: false,
      imgCodeSrc: BASEURL + "/captcha2.svl",
      modalImg: IMG + "/publicity/aptitude/l-one.jpg",
      picCodeTrue: false, //图形验证码是否正确
      invitor: false,
      invitorOpen: false,
      open: false,
      single: false,
      notice: false,
      registForm: {
        account: "",
        password: "",
        phoneCode: "",
        picCode: "",
        inviteCode: "",
        // gender:''
        type: "" // 0 代表个人账户 1 代表企业账户
      },
      rules: {
        // gender: [
        // 	{ required: true, message: '请选择账户类型', trigger: 'change' }
        // ],
        account: [
          { required: true, message: "请填写手机号码", trigger: "blur" },
          { validator: validatePhone, trigger: "blur" }
        ],
        password: [
          { required: true, message: "请填写密码", trigger: "blur" },
          { validator: validatePwd, trigger: "blur" }
        ],
        picCode: [
          { required: true, message: "请填写图片验证码", trigger: "blur" },
          { validator: checkPicCode, trigger: "blur" }
        ],
        phoneCode: [
          { required: true, message: "请填写短信验证码", trigger: "blur" }
        ],
        inviteCode: [{ validator: validateInvitePhone, trigger: "blur" }]
      }
    };
  },
  computed: {
    pwdType() {
      if (this.open) {
        return "text";
      } else {
        return "password";
      }
    },
    text() {
      return this.$store.state.regist.text;
    }
  },
  methods: {
    isShow() {
      this.modal1 = true;
      // console.log(this)
      // this.modalImg = src
    },
    handleSubmit(name) {
      this.registForm.type = this.$parent.$data.type;
      this.$parent.$data.phone = this.registForm.account;
      this.$refs[name].validate(valid => {
        if (valid) {
          let obj = {
            type: this.registForm.type,
            phone: this.registForm.account,
            password: this.registForm.password,
            code: this.registForm.phoneCode,
            inviteCode: this.registForm.inviteCode
          };
          if (this.single) {
            this.$store.dispatch("registOneSumbit", obj);
            setTimeout(() => {
              if (this.$store.state.regist.oneSumbit) {
                console.log(this.$store.state.regist.oneSumbit);
                this.notice = false;
                this.$emit("next", 1);
              }
            }, 2000);
          } else {
            this.notice = true;
          }
        } else {
          this.$Message.error("请填写完整信息!");
        }
      });
    },
    inviteChange() {
      this.registForm.inviteCode = "";
      this.invitor = !this.invitor;
      this.invitorOpen = !this.invitorOpen;
    },
    eyeChange() {
      this.open = !this.open;
    },
    async sendCode() {
      if (this.$store.state.regist.picCodeTrue) {
        console.log("图形验证码正确");
        console.log(this.registForm.account);
        this.$store.dispatch("registSendCode", {
          phone: this.registForm.account,
          state: 0
        });
      } else {
        message("请输入正确的图形验证码", 4);
      }
      // if (checkPhone(this.registForm.account)) {
      // 	this.$store.dispatch('registSendCode', { account: this.registForm.account, state: 0 })
      // } else {
      // 	this.$refs.registForm.validateField('account');
      // }
    },
    imgRefresh() {
      // this.imgCodeSrc = BASEURL + '/captcha.svl?t=' + new Date() * 1
      let timeStamp = new Date() * 1;
      this.$store.dispatch("registPicTime", timeStamp);
      this.imgCodeSrc = BASEURL + "/captcha2.svl?timesTamp=" + timeStamp;
    }
  },
  components: {
    RegistAgreement
  }
};
</script>

<style lang="less">
#only-apt-modal .ivu-modal-header-inner {
  text-align: left;
}

#only-apt-modal .ivu-modal-wrap {
  text-align: center;
}

#only-apt-modal .ivu-modal {
  display: inline-block;
  width: auto !important;
}

#only-apt-modal .ivu-modal-body {
  padding: 0;
  line-height: 0;
}

#only-apt-modal .ivu-modal-header,
#only-apt-modal .ivu-modal-footer,
#only-apt-modal .ivu-modal-close {
  display: none;
}
.type-acc .ivu-form-item-content {
  height: 44px;
  line-height: 44px;
  padding-left: 5px;
}
.vertical-center-modal {
  display: flex;
  align-items: center;
  justify-content: center;

  .ivu-modal {
    top: 0;
  }
}
.ivu-modal-body {
  height: 450px;
  overflow: auto;
}
</style>
<style type="text/css">
.only-regist-form.ivu-form .ivu-form-item-content {
  margin-left: 100px !important;
}

.only-regist-form.ivu-form .ivu-form-item-label {
  font-size: 14px;
  width: 100px !important;
  padding: 15px 12px 15px 0;
}

.only-regist-form input {
  height: 44px;
  font-size: 14px;
}
</style>

<style scoped="scoped" lang="less">
@import "../../../config/base.less";

.container {
  // width: 400px;
  // margin-top: 80px;
  // margin-left: auto;
  // margin-right: auto;
}
.erroragentment {
  color: #e74141;
  margin-left: -20px;
}
.imgVali {
  height: 30px;
  position: absolute;
  top: 6px;
  right: 10px;
  cursor: pointer;
}

.send-code {
  font-size: @fz;
  padding-left: 10px;
  position: absolute;
  right: 10px;
  top: 1px;
  cursor: pointer;
  height: 42px;
  display: block;
  line-height: 42px;
  color: @border-one;
  border-left: 1px solid @border-one;
}
.send-code.allow {
  cursor: not-allowed;
}
.eye {
  display: block;
  width: 30px;
  height: 20px;
  position: absolute;
  cursor: pointer;
  right: 10px;
  top: 15px;
  background-size: 100% 100%;
  background-image: url(../../../assets/icon/eye-close.png);
}

.eye.eye-open {
  background-image: url(../../../assets/icon/eye-open.png);
}

.rela-plant {
  position: relative;
}

.regist-btn {
  width: 100%;
  height: 44px;
  font-size: @fz;
}

.invite-btn {
  cursor: pointer;
  margin-left: 5px;
  font-family: "";
}

.open {
  transform: rotateZ(90deg);
}

.invitor-arrow {
  transition: transform 0.3s;
  color: rgba(0, 0, 0, 0.38);
}

.form-agreement {
  margin-bottom: 24px;
  text-align: center;
  padding-left: 50px;
  position: relative;
  width: 77%;
}
.point {
  width: 76%;
  height: 30px;
  border: 1px solid red;
  position: absolute;
  top: -8px;
  left: 95px;
}
.form-agreement span {
  cursor: pointer;
  color: #719ef4;
}
.form-agreement span:nth-child(4) {
  cursor: default;
  color: #e74141;
  display: block;
  padding-left: 50px;
  text-align: left;
  margin-top: 6px;
  // transition:border 0.2s ease-in-out,box-shadow 0.2s ease-in-out;
}
.ivu-checkbox-wrapper {
  margin-right: 0px;
}
</style>
