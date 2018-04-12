<template>
    <div>
        <span class="title">常见问题</span>
        <div class="question-info">
            <div class="question-item">
                <span class="que-tit">1、余惠宝的用户资金被保管在哪里？</span>
                <span class="que-desc">客户资金和余惠宝自有资金采用分账管理模式，投资人的资金直接通过第三方支付通道进入上海银行存管账户，并在上海银行体系内与借款人进行资金交易，平台只负责匹配借贷双方信息，不触碰任何用户资金。</span>
            </div>
            <div class="question-item">
                <span class="que-tit">2、余惠宝的风险控制能力如何？</span>
                <span class="que-desc">结合自身积累的大数据分析能力，余惠宝通过与征信机构益博睿(Experian)合作建立借款人评分卡、决策引擎和风控模型，根据客户的行为特征等各方面数据来判断借款客户的违约风险。研究分析不同个人特征数据相对应的违约率，通过非线性逻辑回归、决策树分析、神经网络建模等方法来建立数据风控模型和评分卡体系，来掌握不同个人特征对应影响到违约率的程度，并将其固化到风控审批的决策引擎和业务流程中，从而降低借款人违约风险。</span>
            </div>
        </div>
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
span{
    font-size: 14px;
    color: #999;
    display: block;
}
.title{
    display: block;
    width: 100%;
    margin: 10px 0;
}
.question-info{
    border: 1px solid #e5e5e5;
    margin-bottom: 40px;
    background: #fff;
}
.question-item{
    margin: 20px 30px;
    border-bottom: 1px solid #e5e5e5;
    height: 110px;
}
.question-item:nth-child(2){
    border: none;
}
.que-tit{
    font-size: 16px;
    color: #000;
}
.que-desc{
    margin: 10px 0 0 25px;
}
</style>


