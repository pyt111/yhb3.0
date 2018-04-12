<template>
    <div class="model-agreement">
        <div class="model-title">
            <span>协议模板</span>
        </div>
        <div class="model-info">
            <div class="model-item" @click="modalService = true">
                <img src="../../../assets/product-detail/serviceagreement.png" alt="">
                <span class="desc">投资服务协议</span>
            </div>
            <div class="model-item" @click="modalRisk = true">
                <img src="../../../assets/product-detail/riskagreement.png" alt="">
                <span class="desc">风险提示书和资金来源合法承诺书</span>
            </div>
            <div class="model-item" @click="modalRegist = true">
                <img src="../../../assets/product-detail/registagreement.png" alt="">
                <span class="desc">用户注册及服务协议</span>
            </div>
            <div class="model-item" @click="modalFinancialLoan = true">
                <img src="../../../assets/product-detail/user-contract.png" alt="">
                <span class="desc">借款协议</span>
            </div>
        </div>
        <Modal
            title="投资服务协议"
            v-model="modalService"
            class-name="vertical-center-modal">
            <ServiceAgreement/>
        </Modal>
        <Modal
            title="风险提示书和资金来源合法承诺书"
            v-model="modalRisk"
            class-name="vertical-center-modal">
            <RiskAgreement/>
        </Modal>
        <Modal
            title="用户注册及服务协议"
            v-model="modalRegist"
            class-name="vertical-center-modal">
            <RegistAgreement/>
        </Modal>
        <Modal
            title="理财借款协议"
            v-model="modalFinancialLoan"
            class-name="vertical-center-modal">
            <FinancialLoanAgreement/>
        </Modal>
    </div>
</template>
<script>
import ServiceAgreement from '@/components/pure/common/ServiceAgreement'
import RiskAgreement from '@/components/pure/common/RiskAgreement'
import RegistAgreement from '@/components/pure/common/RegistAgreement'
import FinancialLoanAgreement from '@/components/pure/common/FinancialLoanAgreement'
export default {
    data(){
        return{
            modalService:false,
            modalRisk:false,
            modalRegist:false,
            modalFinancialLoan:false,
        }
    },
    components:{
        ServiceAgreement,
        RiskAgreement,
        RegistAgreement,
        FinancialLoanAgreement
    }
}
</script>
<style>
.ivu-modal-body{
    height: 450px;
    overflow: auto;
}
</style>

<style lang="less" scoped>
.model-agreement{
    display: flex;
    border:1px solid #e5e5e5;
    background: #fff;
    margin-bottom: 40px;
}
.model-title{
    width: 150px;
    height: 150px;
    border-right:1px solid #e5e5e5;
}
.model-title>span{
    display: block;
    width: 100%;
    height: 100%;
    line-height: 150px;
    font-size: 20px;
    text-align: center;
    color: #000;
}
.model-info{
    width: 1050px;
    height: 150px;
    display: flex;
    justify-content: space-around;
}
.model-item{
    width: 144px;
    padding: 20px 0;
    cursor: pointer;
}
.model-item>img{
    display: block;
    margin: 0 auto;
}
.model-item>span{
    display: block;
    font-size: 16px;
    text-align: center;
    margin-top: 18px;
}
</style>


