<template>
    <div>
        <AHeader/>
        <div class="my-bread clearfix">
            <Breadcrumb :bread="bread"/>
        </div>
        <div class="a-container clearfix">
            <div class="a-nav fl clearfix">
                <UserInfo class="user-info"/>
                <NavBar/>
            </div>
            <div class="a-content fr clearfix">
                <router-view></router-view>
            </div>
        </div>
        <AFooter/>
    </div>
</template>
<script>
import AHeader from '@/components/pure/common/AHeader'
import AFooter from '@/components/pure/common/AFooter'
import Breadcrumb from '@/components/pure/common/Breadcrumb'
import NavBar from '@/components/pure/account/NavBar'
import UserInfo from '@/components/pure/account/UserInfo'
import HotRecommend from '@/components/pure/account/HotRecommend'
export default {
    data(){
        return{

        }
    },
    computed:{
        bread(){
            return this.$store.state.account.bread
        }
    },
    components:{
        AHeader,
        AFooter,
        Breadcrumb,
        NavBar,
        UserInfo,
        HotRecommend
    }
}
</script>
<style lang="less" scoped>
.my-bread{
    width: 1180px;
    margin: 10px auto;
}
.a-container{
    width: 1180px;
    margin: 0 auto;
    margin-bottom: 40px;
    min-height: 1030px;
    border:1px solid #e5e5e5;
    background: #fafafa;
}
.a-nav{
    width: 208px;
}
.user-info{
    width: 100%;
    border-bottom: 1px solid #e5e5e5;
    overflow: hidden;
}
.a-content{
    width: 970px;
    min-height: 1030px;
    background: #fff;
    border-left: 1px solid #e5e5e5;
    padding: 48px;
    position: relative;
}
// .hot{
//     position: absolute;
//     bottom: 10px;
// }
</style>


