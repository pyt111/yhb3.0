<template>
    <div>
        <img :src="img" class="fl" alt="">
    </div>
</template>
<script>
import {IMG} from '@/config/url'
export default {
    data(){
        return{
            img:IMG+'/publicity/management.png'
        }
    },
    mounted(){
        let bread = [
            {
                name:'余惠宝',
                url:'/'
            },
            {
                name:'信息披露',
                url:'/publicity'
            },
            {
                name:'风控介绍',
                url:''
            }
        ];
        this.$store.dispatch('publicityBreadChange',bread);
        this.$store.dispatch('publicityNavChange',1)
    }
}
</script>
<style lang="less" scoped>

</style>


