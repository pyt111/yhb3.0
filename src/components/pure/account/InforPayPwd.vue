<template>
    <div class="clearfix">
        <div class="form-content">
            <InforPayPwdSet v-if="type === 1"/>
            <InforPayPwdChange v-else-if="type === 2"/>
            <InforPayPwdBack v-else-if="type === 3"/>
        </div>
    </div>
</template>
<script>
import InforPayPwdChange from '@/components/pure/account/InforPayPwdChange'
import InforPayPwdBack from '@/components/pure/account/InforPayPwdBack'
import InforPayPwdSet from '@/components/pure/account/InforPayPwdSet'
export default {
    props:['type'],
    data(){
        return{

        }
    },
    components:{
        InforPayPwdChange,
        InforPayPwdBack,
        InforPayPwdSet
    }
}
</script>
<style lang="less" scoped>

</style>


