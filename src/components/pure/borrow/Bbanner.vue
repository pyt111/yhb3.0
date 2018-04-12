<template>
    <div class="banner-info">
        <img src="../../../assets/borrow/banner-top.png" alt="">
        <span class="desc b-left">专业</span>
        <span class="desc b-middle">安全</span>
        <span class="desc b-right">高效</span>
        <button class="apply-for" @click="apply = true">极速申请</button>
        <Modal
            class-name="vertical-center-modal"
            v-model="apply"
            :closable="true"
            :loading="loading">
            <div class="content">
                <Form ref="formInline" :model="formInline" :rules="ruleInline" class="apply-content">
                    <FormItem prop="user">
                        <Icon class="sign" type="ios-person-outline" size='50'></Icon>
                        <Input type="text" v-model="formInline.user" placeholder="请输入您的姓名"></Input>
                    </FormItem>
                    <FormItem prop="phone">
                        <Icon class="sign" type="ios-telephone-outline" size="50"></Icon>
                        <Input type="text" v-model="formInline.phone" placeholder="请输入您的电话"></Input>
                    </FormItem>
                    <FormItem prop="unit">
                        <Icon class="sign" type="ios-home-outline" size="50"></Icon>
                        <Input type="text" v-model="formInline.unit" placeholder="请输入您的企业单位"></Input>
                    </FormItem>
                    <FormItem prop="code">
                        <Icon class="sign" type="ios-locked-outline" size="50"></Icon>
                        <Input type="text" v-model="formInline.code" placeholder="请输入验证码"></Input>
                        <img class="imgVali" :src="imgCodeSrc" @click="imgRefresh" alt="点击更新" title="点击更新" />
                    </FormItem>
                    <FormItem>
                        <Button class="quickness-apply" @click="handleSubmit('formInline')">极速申请</Button>
                    </FormItem>
                </Form>
                <span class="apply-msg">如有问题请电话咨询余惠宝客服</span>
                <span class="apply-phone">400-000-8888</span>
            </div>
            <div class="footer" slot="footer"></div>
        </Modal>
    </div>
</template>
<script>
import { BASEURL, BORROW_PIC_VALIDATE } from "@/config/url";
import { validatePhone } from "@/tools/regx";
import { postModelTwo, analy } from "@/tools/net";
import { message } from "@/tools/talk";
import store from "@/store";

/*
 * 异步验证验证码是否正确
 */
const checkPicCode = async (rule, value, callback) => {
  let timeStamp = store.state.borrow.timeStamp.toString();
  if (value.length) {
    try {
      const datas = await fetch(
        BORROW_PIC_VALIDATE,
        postModelTwo({ picCode: value, timeStamp: timeStamp })
      ).then(analy);
      let pictrue = console.log(datas);
      if (datas.code === 500) {
        console.log("500");
        callback(new Error(datas.message));
      } else {
        console.log("200");
        callback();
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
      apply: false,
      loading: true,
      imgCodeSrc: BASEURL + "/captcha2.svl",
      formInline: {
        user: "",
        phone: "",
        unit: "",
        code: ""
      },
      ruleInline: {
        user: [{ required: true, message: "姓名不能为空！", trigger: "blur" }],
        phone: [
          { required: true, message: "电话号码不能为空！", trigger: "blur" },
          { validator: validatePhone, trigger: "blur" }
        ],
        unit: [
          { required: true, message: "企业单位不能为空！", trigger: "blur" }
        ],
        code: [
          { required: true, message: "验证码不能为空！", trigger: "blur" },
          { validator: checkPicCode, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("提交成功!");
        } else {
          this.$Message.error("提交失败!请填写完整信息！");
        }
      });
    },
    imgRefresh() {
      // this.imgCodeSrc = BASEURL + '/captcha.svl?t=' + new Date() * 1
      let timeStamp = new Date() * 1;
      this.$store.dispatch("borrowPicTime", timeStamp);
      this.imgCodeSrc = BASEURL + "/captcha2.svl?timesTamp=" + timeStamp;
    }
  }
};
</script>
<style lang="less">
.ivu-modal-footer {
  display: none;
}
.vertical-center-modal {
  display: flex;
  align-items: center;
  justify-content: center;

  .ivu-modal {
    top: 0;
  }
}
.ivu-input {
  border: none;
  border-bottom: 1px solid #dddee1;
  border-radius: 0;
  text-align: center;
  padding: 4px 50px;
  height: 57px;
  font-size: 20px;
  font-family: "Microsoft YaHei";
}
.ivu-input:hover {
  outline: none;
  border-color: none;
  box-shadow: none;
}
.ivu-input:focus {
  box-shadow: none;
}
.ivu-form-item-error .ivu-input {
  border: none;
  border-bottom: 1px solid #e74141;
}
.ivu-form-item-error .ivu-input:focus {
  box-shadow: none;
}
.ivu-form-item-error-tip {
  padding-left: 20px;
}
.sign {
  position: absolute;
  top: 2px;
  left: 18px;
  z-index: 1;
  color: #b6b6b6;
}
.ivu-form-item-content {
  font-size: 14px;
}
.ivu-icon-ios-close-empty {
  font-size: 40px !important;
  top: 0 !important;
  left: 0;
}
</style>

<style lang="less" scoped>
.imgVali {
  height: 30px;
  position: absolute;
  top: 13px;
  right: 10px;
  cursor: pointer;
}
.banner-info {
  position: relative;
  line-height: 0;
}
.desc {
  font-size: 70px;
  color: #fff;
  text-shadow: 0px 5px 14px #616161;
}
.b-left {
  position: absolute;
  top: 33%;
  left: 35%;
}
.b-middle {
  position: absolute;
  top: 33%;
  left: 47%;
}
.b-right {
  position: absolute;
  top: 33%;
  left: 59%;
}
.apply-for {
  width: 260px;
  height: 60px;
  background: #e45759;
  color: #fff;
  position: absolute;
  top: 50%;
  left: 44%;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-size: 28px;
}
.quickness-apply {
  width: 100%;
  height: 55px;
  font-size: 28px;
  background: #f2515a;
  color: #fff;
}
.apply-msg {
  display: block;
  font-size: 18px;
  color: #d3d3d3;
  text-align: center;
}
.apply-phone {
  display: block;
  color: #4d4d4d;
  font-size: 16px;
  text-align: center;
  margin-top: 5px;
}
.content {
  padding: 30px;
}
.apply-content {
  padding: 30px 40px 20px 40px;
}
</style>


