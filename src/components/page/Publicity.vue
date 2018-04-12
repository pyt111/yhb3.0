<template>
    <div>
        <AHeader/>
        <div class="my-bread">
            <Breadcrumb :bread="bread"/>
        </div>
        <div class="p-container clearfix">
            <div class="p-nav fl">
                <NavBar/>
            </div>
            <div class="content fr clearfix">
                <transition name="fade">
                    <router-view></router-view>                
                </transition>
            </div>
        </div>
        <AFooter/>
    </div>
</template>
<script>
import AHeader from '@/components/pure/common/AHeader'
import AFooter from '@/components/pure/common/AFooter'
import Breadcrumb from '@/components/pure/common/Breadcrumb'
import NavBar from '@/components/pure/publicity/NavBar'
export default {
    data(){
        return{

        }
    },
    computed:{
        bread(){
            return this.$store.state.publicity.bread
        }
    },
    components:{
        AHeader,
        Breadcrumb,
        AFooter,
        NavBar
    }
}
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
<style lang="less" scoped="scoped">
.my-bread{
    width: 1180px;
    margin: 10px auto;
}
.p-container{
    width: 1180px;
    margin: 0 auto;
    margin-bottom: 40px;
}
.p-nav{
    width: 250px;
    height: 1030px;
    overflow: hidden;
    background: #fff;
    border:1px solid #e5e5e5;
}
.content{
    border: 1px solid #f7f7f7;
    width: 910px;
    min-height: 1030px;
    overflow: hidden;
    background:#fff;
}
</style>


