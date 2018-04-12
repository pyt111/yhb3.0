<template>
    <div class="clearfix">
        <h4 class="title">我的理财</h4>
        <span class="yesterday">昨日收益（元）：<span class="yesterday-num">50</span></span>
        <Tabs class="finance-taps" value="on">
            <TabPane label="持有中" name="on">
                <FinanceOn/>
            </TabPane>
            <TabPane label="退出中" name="out">
                <FinanceOut/>
            </TabPane>
            <TabPane label="已结束" name="end">
                <FinanceEnd/>
            </TabPane>
        </Tabs>
        <HotRecommend class="hot"/>
    </div>
</template>
<script>
import FinanceOn from '@/components/pure/account/FinanceOn'
import FinanceOut from '@/components/pure/account/FinanceOut'
import FinanceEnd from '@/components/pure/account/FinanceEnd'
import HotRecommend from '@/components/pure/account/HotRecommend'
export default {    
    components:{
        FinanceOn,
        FinanceOut,
        FinanceEnd,
        HotRecommend
    }
}
</script>
<style lang="less">

.finance-taps .ivu-tabs-nav .ivu-tabs-tab:hover{
	color: #ff7542;
}
.finance-taps .ivu-tabs-nav .ivu-tabs-tab{
		padding: 8px 63px;
	}
</style>
<style lang="less" scoped>
.title{
    font-size: 16px;
    color: #4c4c4c;
    display: block;
}
.yesterday{
    display: block;
    font-size: 16px;
    margin-top: 38px;
    color:#4c4c4c;
    padding-bottom: 14px;
    border-bottom: 1px dashed #808080;
}
.yesterday-num{
    color:#ff7542;
}
.finance-taps{
    margin-top: 24px;
}

</style>


