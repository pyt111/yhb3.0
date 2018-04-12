<template>
    <div>
        <Form id="form-two" class="step-form-two" ref="FormTwo" :model="FormTwo" :rules="rules" :label-width="80">
            <FormItem label="密码" prop="passwd">
                <Input type="password" placeholder="6~18位数组字母组合" v-model="FormTwo.passwd"></Input>
            </FormItem>
            <FormItem label="确认密码" prop="passwdCheck">
                <Input type="password" placeholder="6~18位数组字母组合" v-model="FormTwo.passwdCheck"></Input>
            </FormItem>
            <FormItem>
                <Button class="next" type="primary" @click="handleSubmit('FormTwo')">提交</Button>
                <Button class="reset" type="ghost" @click="handleReset('FormTwo')" style="margin-left: 8px">重置</Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
export default {
  data() {
    const validatePass = (rule, value, callback) => {
      let regx = /^(?![^a-zA-Z]+$)(?!\D+$).{6,18}$/;
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (!regx.test(value)) {
        callback(new Error("密码为6~18位数字字母组合"));
      } else {
        if (this.FormTwo.passwdCheck !== "") {
          // 对第二个密码框单独验证
          this.$refs.FormTwo.validateField("passwdCheck");
        }
        callback();
      }
    };
    const validatePassCheck = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.FormTwo.passwd) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      FormTwo: {
        passwd: "",
        passwdCheck: ""
      },
      rules: {
        passwd: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { validator: validatePass, trigger: "blur" }
        ],
        passwdCheck: [
          { required: true, message: "请再次输入密码", trigger: "blur" },
          { validator: validatePassCheck, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("提交成功!");
          this.$emit("next", 2);
        } else {
          // this.$Message.error('表单验证失败!');
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    }
  }
};
</script>
<style type="text/css">
.step-form-two .ivu-form-item .ivu-form-item-content {
  margin-left: 100px !important;
}

.step-form-two .ivu-form-item .ivu-form-item-label {
  font-size: 14px;
  width: 100px !important;
  padding: 15px 12px 15px 0;
}

.step-form-two input {
  height: 44px;
  font-size: 14px;
}
</style>
<style lang="less" scoped>
#form-two {
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
}

.next {
  // width: 45%;
}

.reset {
  // width: 45%;
}
</style>


