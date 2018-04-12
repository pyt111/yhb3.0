<template>
    <div class="clearfix">
        <AHeader/>
        <Bbanner/>
        <Bintroduce/>
        <Badvantages/>
        <Bprocedure/>
        <BFAquestions/>
        <AFooter/>
    </div>
</template>
<script>
import AHeader from '@/components/pure/common/AHeader'
import Bbanner from '@/components/pure/borrow/Bbanner'
import Bintroduce from '@/components/pure/borrow/Bintroduce'
import Badvantages from '@/components/pure/borrow/Badvantages'
import Bprocedure from '@/components/pure/borrow/Bprocedure'
import BFAquestions from '@/components/pure/borrow/BFAquestions'
import AFooter from '@/components/pure/common/AFooter'
export default {
    data(){
        return{

        }
    },
    components:{
        AHeader,
        Bbanner,
        Bintroduce,
        Badvantages,
        Bprocedure,
        BFAquestions,
        AFooter
    }
}
</script>
<style lang="less" scoped>

</style>


