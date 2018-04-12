<template>
    <div>
        <BHeader />
        <div class="content">
            <div class="center">
                <div class="step clearfix">
                    <Steps :current="current" :status="status">
                        <Step title="步骤1" content="验证手机号码"></Step>
                        <Step title="步骤2" content="重置登录密码"></Step>
                        <Step title="步骤3" content="重置密码成功"></Step>
                    </Steps>
                </div>
                <StepOne v-if="current === 0" @next='nexttwo' />
                <StepTwo v-if="current === 1" @next='nextthree' />
                <StepThree v-if="current ===2" />
            </div>
        </div> 
        <BFooter />
    </div>
</template>
<script>
import BHeader from '@/components/pure/common/BHeader'
import BFooter from '@/components/pure/common/BFooter'
import StepOne from '@/components/pure/resetpwd/StepOne'
import StepTwo from '@/components/pure/resetpwd/StepTwo'
import StepThree from '@/components/pure/resetpwd/StepThree'
export default {
    data() {
        return {
            current: 0,
            status: 'process'
        }
    },
    components: {
        BHeader,
        BFooter,
        StepOne,
        StepTwo,
        StepThree
    },
    methods: {
        nexttwo(obj) {
            this.current = obj
        },
        nextthree(obj) {
            this.current = obj
        }
    }
}
</script>
<style scoped>
.content {
    width: 100%;
    height: 724px;
    min-width: 1200px;
    position: relative;
}

.center {
    width: 1200px;
    height: 100%;
    background: #fff;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
}

.step {
    width: 80%;
    margin-left: auto;
    padding-top: 50px;
}
</style>


