<template>
    <div class="advantages">
        <div class="left-advant">
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
        <div class="right-advant">
            <p class="tit">优势：</p>
            <p class="content">1.企业基本相关资料齐全(如合法成立的证照资料，包括营业执照、组织机构代码证、税务登记证、开户许可证、机构信用代码证(如三证合一则只需提供合并的证书)等)主体资格证明文件。</p>
            <p class="content">2.股权结构、出资情况、会计师事务所验资报告等资料齐全，企业没有受到相关部门的处罚记录。</p>
            <p class="content">3.经会计师事务所审计的往年度审计报告、近三年财务报表合格。</p>
            <p class="content">4.高级管理人员(总经理、副总经理、主要部门主管)没有涉及相关诉讼,没有受到相关部门处罚,个人征信优良。</p>
            <p class="content">5.抵押物清单清晰,整体抵押质量良好,没有重复抵押的情况存在。</p>
        </div>
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
.advantages {
  width: 1200px;
  margin: 0 auto;
  position: relative;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}
.left-advant {
  width: 520px;
  height: 560px;
  background: #fff;
  border: 1px solid #e5e5e5;
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
.apply-content {
  padding: 30px 40px 20px 40px;
}
.imgVali {
  height: 30px;
  position: absolute;
  top: 13px;
  right: 10px;
  cursor: pointer;
}
.right-advant {
  width: 660px;
  height: 560px;
  padding: 60px 50px 0 50px;
  background: #fff;
  border: 1px solid #e5e5e5;
  font-size: 20px;
}
.content {
  margin: 2px 0px;
}
</style>


