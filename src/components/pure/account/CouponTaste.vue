<template>
    <div class="clearfix">
        <CouponSwitch @switchChange="switchChange"/>
        <div class="clearfix" v-show="show === 1">
            <CouponTasteList :list="listOne"/>
            <div class="common-center-page-wrap" style="margin-top: 20px;">
	    		<Page :total="150" size="small" class="common-center-page-nav"></Page>
	    	</div>
        </div>
        <div class="clearfix" v-show="show === 2">
            <CouponTasteList :list="listTwo"/>
            <div class="common-center-page-wrap" style="margin-top: 20px;">
	    		<Page :total="150" size="small" class="common-center-page-nav"></Page>
	    	</div>
        </div>
        <div class="clearfix" v-show="show === 3">
            <CouponTasteList :list="listThree"/>
            <div class="common-center-page-wrap" style="margin-top: 20px;">
	    		<Page :total="150" size="small" class="common-center-page-nav"></Page>
	    	</div>
        </div>
    </div>
</template>
<script>
import CouponSwitch from '@/components/pure/account/CouponSwitch'
import CouponTasteList from '@/components/pure/account/CouponTasteList'
export default {
    data(){
        return{
            show:1,
            listOne : [
				{
					state: 0, // 0：未使用，1：已使用，2：已过期
					value: 518,
					name: '518体验金',
                    remarks: '配合部分产品使用',
                    appoint:'体验周期30天',
					getTime: '2017-11-02 16:51:44',
					overdueTime: '2017-11-02 16:51:44',
					day: '53',
					unuse: '',
				},
				{
					state: 0, // 0：未使用，1：已使用，2：已过期
					value: 518,
					name: '518体验金',
                    remarks: '配合部分产品使用',
                    appoint:'体验周期30天',                    
					getTime: '2017-11-02 16:51:44',
					overdueTime: '2017-11-02 16:51:44',
					day: '53',
					unuse: '',
				},
				{
					state: 0, // 0：未使用，1：已使用，2：已过期
					value: 518,
					name: '518体验金',
                    remarks: '配合部分产品使用',
                    appoint:'体验周期30天',                    
					getTime: '2017-11-02 16:51:44',
					overdueTime: '2017-11-02 16:51:44',
					day: '53',
					unuse: '',
				},
				{
					state: 0, // 0：未使用，1：已使用，2：已过期
					value: 518,
					name: '518体验金',
                    remarks: '配合部分产品使用',
                    appoint:'体验周期30天',                    
					getTime: '2017-11-02 16:51:44',
					overdueTime: '2017-11-02 16:51:44',
					day: '53',
					unuse: '',
				},
			],
			listTwo : [
				{
					state: 1, // 0：未使用，1：已使用，2：已过期
					value: 518,
					name: '518体验金',
                    remarks: '配合部分产品使用',
                    appoint:'体验周期30天',                    
					getTime: '2017-11-02 16:51:44',
					overdueTime: '2017-11-02 16:51:44',
					day: '53',
					unuse: '',
				},
				{
					state: 1, // 0：未使用，1：已使用，2：已过期
					value: 518,
					name: '518体验金',
                    remarks: '配合部分产品使用',
                    appoint:'体验周期30天',                    
					getTime: '2017-11-02 16:51:44',
					overdueTime: '2017-11-02 16:51:44',
					day: '53',
					unuse: '',
				},
				{
					state: 1, // 0：未使用，1：已使用，2：已过期
					value: 518,
					name: '518体验金',
                    remarks: '配合部分产品使用',
                    appoint:'体验周期30天',                    
					getTime: '2017-11-02 16:51:44',
					overdueTime: '2017-11-02 16:51:44',
					day: '53',
					unuse: '',
				},
				{
					state: 1, // 0：未使用，1：已使用，2：已过期
					value: 518,
					name: '518体验金',
                    remarks: '配合部分产品使用',
                    appoint:'体验周期30天',                    
					getTime: '2017-11-02 16:51:44',
					overdueTime: '2017-11-02 16:51:44',
					day: '53',
					unuse: '',
				},
			],
			listThree : [
				{
					state: 2, // 0：未使用，1：已使用，2：已过期
					value: 518,
					name: '518体验金',
                    remarks: '配合部分产品使用',
                    appoint:'体验周期30天',                    
					getTime: '2017-11-02 16:51:44',
					overdueTime: '2017-11-02 16:51:44',
					day: '53',
					unuse: '已过期',
				},
				{
					state: 2, // 0：未使用，1：已使用，2：已过期
					value: 518,
					name: '518体验金',
                    remarks: '配合部分产品使用',
                    appoint:'体验周期30天',                    
					getTime: '2017-11-02 16:51:44',
					overdueTime: '2017-11-02 16:51:44',
					day: '53',
					unuse: '已使用',
				},
				{
					state: 2, // 0：未使用，1：已使用，2：已过期
					value: 518,
					name: '518体验金',
                    remarks: '配合部分产品使用',
                    appoint:'体验周期30天',                    
					getTime: '2017-11-02 16:51:44',
					overdueTime: '2017-11-02 16:51:44',
					day: '53',
					unuse: '已过期',
				},
				{
					state: 2, // 0：未使用，1：已使用，2：已过期
					value: 518,
					name: '518体验金',
                    remarks: '配合部分产品使用',
                    appoint:'体验周期30天',                    
					getTime: '2017-11-02 16:51:44',
					overdueTime: '2017-11-02 16:51:44',
					day: '53',
					unuse: '已使用',
				},
			],
        }
    },
    components:{
        CouponSwitch,
        CouponTasteList
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


