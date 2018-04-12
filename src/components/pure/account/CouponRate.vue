<template>
    <div class="clearfix">
        <CouponSwitch @switchChange="switchChange"/>
        <div class="clearfix" v-show="show === 1">
            <CouponRateList :list="listOne"/>
            <div class="common-center-page-wrap" style="margin-top: 20px;">
	    		<Page :total="150" size="small" class="common-center-page-nav"></Page>
	    	</div>
        </div>
        <div class="clearfix" v-show="show === 2">
            <CouponRateList :list="listTwo"/>
            <div class="common-center-page-wrap" style="margin-top: 20px;">
	    		<Page :total="150" size="small" class="common-center-page-nav"></Page>
	    	</div>
        </div>
        <div class="clearfix" v-show="show === 3">
            <CouponRateList :list="listThree"/>
            <div class="common-center-page-wrap" style="margin-top: 20px;">
	    		<Page :total="150" size="small" class="common-center-page-nav"></Page>
	    	</div>            
        </div>
    </div>
</template>
<script>
import CouponSwitch from '@/components/pure/account/CouponSwitch'
import CouponRateList from '@/components/pure/account/CouponRateList'
export default {
    data(){
        return{
            show:1,
            listOne : [
				{
					state: 0, // 0：未使用，1：已使用，2：已过期
					value: 5.18,
					name: '嗨翻518加息券',
                    remarks: '518产品专属加息券',
                    appoint:'加息周期30天',
					getTime: '2017-11-02 15:24:24',
					overdueTime: '2017-11-02 15:24:24',
					day: '23',
					unuse: '',
				},
				{
					state: 0, // 0：未使用，1：已使用，2：已过期
					value: 5.18,
					name: '嗨翻518加息券',
                    remarks: '518产品专属加息券',
                    appoint:'加息周期30天',                    
					getTime: '2017-11-02 15:24:24',
					overdueTime: '2017-11-02 15:24:24',
					day: '23',
					unuse: '',
				},
				{
					state: 0, // 0：未使用，1：已使用，2：已过期
					value: 5.18,
					name: '嗨翻518加息券',
                    remarks: '518产品专属加息券',
                    appoint:'加息周期30天',                    
					getTime: '2017-11-02 15:24:24',
					overdueTime: '2017-11-02 15:24:24',
					day: '23',
					unuse: '',
				},
				{
					state: 0, // 0：未使用，1：已使用，2：已过期
					value: 5.18,
					name: '嗨翻518加息券',
                    remarks: '518产品专属加息券',
                    appoint:'加息周期30天',                    
					getTime: '2017-11-02 15:24:24',
					overdueTime: '2017-11-02 15:24:24',
					day: '23',
					unuse: '',
				},
			],
			listTwo : [
				{
					state: 1, // 0：未使用，1：已使用，2：已过期
					value: 5.18,
					name: '嗨翻518加息券',
                    remarks: '518产品专属加息券',
                    appoint:'加息周期30天',                    
					getTime: '2017-11-02 15:24:24',
					overdueTime: '2017-11-02 15:24:24',
					day: '23',
					unuse: '',
				},
				{
					state: 1, // 0：未使用，1：已使用，2：已过期
					value: 5.18,
					name: '嗨翻518加息券',
                    remarks: '518产品专属加息券',
                    appoint:'加息周期30天',                    
					getTime: '2017-11-02 15:24:24',
					overdueTime: '2017-11-02 15:24:24',
					day: '23',
					unuse: '',
				},
				{
					state: 1, // 0：未使用，1：已使用，2：已过期
					value: 5.18,
					name: '嗨翻518加息券',
                    remarks: '518产品专属加息券',
                    appoint:'加息周期30天',                    
					getTime: '2017-11-02 15:24:24',
					overdueTime: '2017-11-02 15:24:24',
					day: '23',
					unuse: '',
				},
				{
					state: 1, // 0：未使用，1：已使用，2：已过期
					value: 5.18,
					name: '嗨翻518加息券',
                    remarks: '518产品专属加息券',
                    appoint:'加息周期30天',                    
					getTime: '2017-11-02 15:24:24',
					overdueTime: '2017-11-02 15:24:24',
					day: '23',
					unuse: '',
				},
			],
			listThree : [
				{
					state: 2, // 0：未使用，1：已使用，2：已过期
					value: 5.18,
					name: '嗨翻518加息券',
                    remarks: '518产品专属加息券',
                    appoint:'加息周期30天',                    
					getTime: '2017-11-02 15:24:24',
					overdueTime: '2017-11-02 15:24:24',
					day: '23',
					unuse: '已过期',
				},
				{
					state: 2, // 0：未使用，1：已使用，2：已过期
					value: 5.18,
					name: '嗨翻518加息券',
                    remarks: '518产品专属加息券',
                    appoint:'加息周期30天',                    
					getTime: '2017-11-02 15:24:24',
					overdueTime: '2017-11-02 15:24:24',
					day: '23',
					unuse: '已使用',
				},
				{
					state: 2, // 0：未使用，1：已使用，2：已过期
					value: 5.18,
					name: '嗨翻518加息券',
                    remarks: '518产品专属加息券',
                    appoint:'加息周期30天',                    
					getTime: '2017-11-02 15:24:24',
					overdueTime: '2017-11-02 15:24:24',
					day: '23',
					unuse: '已过期',
				},
				{
					state: 2, // 0：未使用，1：已使用，2：已过期
					value: 5.18,
					name: '嗨翻518加息券',
                    remarks: '518产品专属加息券',
                    appoint:'加息周期30天',                    
					getTime: '2017-11-02 15:24:24',
					overdueTime: '2017-11-02 15:24:24',
					day: '23',
					unuse: '已使用',
				},
			],
        }
    },
    components:{
        CouponSwitch,
        CouponRateList
    },
    methods:{
        switchChange(obj){
            this.show = obj.stateTap;
        }
    }
}
</script>
<style lang="less" scoped>

</style>


