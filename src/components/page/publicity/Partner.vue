<template>
    <div>
        <img :src="img" alt="">
    </div>
</template>
<script>
import {IMG} from '@/config/url'
export default {    
    data(){
        return{
            img:IMG + '/publicity/yhb-partner.png'
        }
    },
    mounted(){
        let bread = [
            {
                name:'余惠宝',
                ulr:'/'
            },
            {
                name:'信息披露',
                url:'/publicity'
            },
            {
                name:'合作伙伴',
                url:''
            }
        ];
        this.$store.dispatch('publicityBreadChange',bread);
        this.$store.dispatch('publicityNavChange',3)
    }
}
</script>
<style lang="less" scoped>

</style>


