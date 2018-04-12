<template>
    <div class="clearfix">
        <CouponSwitch @switchChange="switchChange"/>
        <div class="clearfix" v-show="show === 1">
            <CouponRedList :list="listOne"/>
            <div class="common-center-page-wrap" style="margin-top: 20px;">
	    		<Page :total="150" size="small" class="common-center-page-nav"></Page>
	    	</div>
        </div>
        <div class="clearfix" v-show="show === 2">
            <CouponRedList :list="listTwo"/>
            <div class="common-center-page-wrap" style="margin-top: 20px;">
	    		<Page :total="150" size="small" class="common-center-page-nav"></Page>
	    	</div>
        </div>
        <div class="clearfix" v-show="show === 3">
            <CouponRedList :list="listThree"/>
            <div class="common-center-page-wrap" style="margin-top: 20px;">
	    		<Page :total="150" size="small" class="common-center-page-nav"></Page>
	    	</div>
        </div>
    </div>
</template>
<script>
import CouponSwitch from '@/components/pure/account/CouponSwitch'
import CouponRedList from '@/components/pure/account/CouponRedList'
export default {
    data(){
        return{
            show:1,
            listOne : [
				{
					state: 0, // 0：未使用，1：已使用，2：已过期
					value: 9999,
					name: '新手注册红包',
                    remarks: '单笔投资满1000元可用',
                    appoint:'指定产品可用',
					getTime: '2017-11-02 11:45:23',
					overdueTime: '2017-11-02 11:45:23',
					day: '53',
					unuse: '',
				},
				{
					state: 0, // 0：未使用，1：已使用，2：已过期
					value: 123,
					name: '新手注册红包',
                    remarks: '单笔投资满1000元可用',
                    appoint:'指定产品可用',                    
					getTime: '2017-11-02 11:45:23',
					overdueTime: '2017-11-02 11:45:23',
					day: '53',
					unuse: '',
				},
				{
					state: 0, // 0：未使用，1：已使用，2：已过期
					value: 123,
					name: '新手注册红包',
                    remarks: '单笔投资满1000元可用',
                    appoint:'指定产品可用',                    
					getTime: '2017-11-02 11:45:23',
					overdueTime: '2017-11-02 11:45:23',
					day: '53',
					unuse: '',
				},
				{
					state: 0, // 0：未使用，1：已使用，2：已过期
					value: 123,
					name: '新手注册红包',
                    remarks: '单笔投资满1000元可用',
                    appoint:'指定产品可用',                    
					getTime: '2017-11-02 11:45:23',
					overdueTime: '2017-11-02 11:45:23',
					day: '53',
					unuse: '',
				},
			],
			listTwo : [
				{
					state: 1, // 0：未使用，1：已使用，2：已过期
					value: 123,
					name: '新手注册红包',
                    remarks: '单笔投资满1000元可用',
                    appoint:'指定产品可用',                    
					getTime: '2017-11-02 11:45:23',
					overdueTime: '2017-11-02 11:45:23',
					day: '53',
					unuse: '',
				},
				{
					state: 1, // 0：未使用，1：已使用，2：已过期
					value: 123,
					name: '新手注册红包',
                    remarks: '单笔投资满1000元可用',
                    appoint:'指定产品可用',                    
					getTime: '2017-11-02 11:45:23',
					overdueTime: '2017-11-02 11:45:23',
					day: '53',
					unuse: '',
				},
				{
					state: 1, // 0：未使用，1：已使用，2：已过期
					value: 123,
					name: '新手注册红包',
                    remarks: '单笔投资满1000元可用',
                    appoint:'指定产品可用',                    
					getTime: '2017-11-02 11:45:23',
					overdueTime: '2017-11-02 11:45:23',
					day: '53',
					unuse: '',
				},
				{
					state: 1, // 0：未使用，1：已使用，2：已过期
					value: 123,
					name: '新手注册红包',
                    remarks: '单笔投资满1000元可用',
                    appoint:'指定产品可用',                    
					getTime: '2017-11-02 11:45:23',
					overdueTime: '2017-11-02 11:45:23',
					day: '53',
					unuse: '',
				},
			],
			listThree : [
				{
					state: 2, // 0：未使用，1：已使用，2：已过期
					value: 123,
					name: '新手注册红包',
                    remarks: '单笔投资满1000元可用',
                    appoint:'指定产品可用',                    
					getTime: '2017-11-02 11:45:23',
					overdueTime: '2017-11-02 11:45:23',
					day: '53',
					unuse: '已过期',
				},
				{
					state: 2, // 0：未使用，1：已使用，2：已过期
					value: 123,
					name: '新手注册红包',
                    remarks: '单笔投资满1000元可用',
                    appoint:'指定产品可用',                    
					getTime: '2017-11-02 11:45:23',
					overdueTime: '2017-11-02 11:45:23',
					day: '53',
					unuse: '已使用',
				},
				{
					state: 2, // 0：未使用，1：已使用，2：已过期
					value: 123,
					name: '新手注册红包',
                    remarks: '单笔投资满1000元可用',
                    appoint:'指定产品可用',                    
					getTime: '2017-11-02 11:45:23',
					overdueTime: '2017-11-02 11:45:23',
					day: '53',
					unuse: '已过期',
				},
				{
					state: 2, // 0：未使用，1：已使用，2：已过期
					value: 123,
					name: '新手注册红包',
                    remarks: '单笔投资满1000元可用',
                    appoint:'指定产品可用',                    
					getTime: '2017-11-02 11:45:23',
					overdueTime: '2017-11-02 11:45:23',
					day: '53',
					unuse: '已使用',
				},
			],
        }
    },
    components:{
        CouponSwitch,
        CouponRedList
    },
    methods:{
        switchChange(obj){
            console.log(obj)
            this.show = obj.stateTap;
            console.log(this.show)
        }
    }
}
</script>
<style lang="less" scoped>

</style>


