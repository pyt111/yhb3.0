<template>
    <div class="clearfix">
        <h4 class="title">邀请好友</h4>
        <InviteTemplate :wxConfig="wxConfig" :qqConfig="qqConfig" :qqZoneConfig="qqZoneConfig" :msgConfig="msgConfig" :copyConfig="copyConfig" />
        <div class="my-reward-wrap">
            <span class="my-reward">我的奖励<b class="my-reward-value">999</b>元</span>
        </div>
        <Table stripe class="invite-reward-list" :columns="profitHeader" :data="profitList"></Table>
        <div class="reward-list-page-wrap">
            <Page :total="400" size="small" class="reward-list-page-nav"></Page>
        </div>
        <div class="invite-rules">
            <span class="rule-title">奖励规则：</span>
            <span class="rule-item">1.好友通过您分享的链接注册并绑定银行卡，您可以获得2元奖励</span>
            <span class="rule-item">2.好友首次购买理财产品，您可以获得3元奖励</span>
            <span class="rule-item">3.每日分享到微信朋友圈（仅限APP分享微信朋友圈功能），您可以获得0.5元的奖励</span>
        </div>
    </div>
</template>
<script>
import {IMG} from '@/config/url'
import {validatePhone} from '@/tools/regx'
import InviteTemplate from '@/components/pure/common/InviteTemplate'
export default {
    data(){
        return{
            wxConfig:{
                value:'https://www.baidu.com',
                imagePath:'../../../static/logo.png',
                filter:'color',
                downloadButton:false,
            },
            qqConfig:{
                value:'http://www.yhb118.com',
                title:'诚挚邀请您加入余惠宝大家庭',
                pics:IMG + '/common/header/logo.png',
                summary:'欢迎加入余惠宝大家庭欢迎加入余惠宝大家庭'
            },
            qqZoneConfig:{
                value:'http://www.yhb118.com',
                title:'诚挚邀请您加入余惠宝大家庭',
                pics:IMG + '/common/header/logo.png',
                summary:'欢迎加入余惠宝大家庭欢迎加入余惠宝大家庭'
            },
            msgConfig:{
                msgForm:{
                    message:'好友注册，详情点击http://www.yhb118.com',
                    phone:''
                },
                msgRules:{
                    phone:[
                        { required:true, message:'手机号码不能为空', trigger:'blur' },
                        { validator:validatePhone, trigger:'blur' }
                    ]
                },
            },
            copyConfig:{
                copyForm:{
                    content: 'http://www.yhb118.com',
                },
            },
            profitHeader:[
                {
                    title: '奖励（元）',
                    key: 'money',
                    align: 'center',
                    className: 'profit-money-column'
                },
                {
                    title: '类型',
                    key: 'type',
                    align: 'center',
                },
                {
                    title: '手机号',
                    key: 'phone',
                    align: 'center'
                },
                {
                    title: '时间',
                    key: 'time',
                    align: 'center'
                }
            ],
            profitList:[
                {
                    money:'5',
                    type:'实名认证',
                    phone:'18888888881',
                    time:'2017-11-23'
                },
                {
                    money:'5',
                    type:'实名认证',
                    phone:'18888888881',
                    time:'2017-11-23'
                },
                {
                    money:'5',
                    type:'实名认证',
                    phone:'18888888881',
                    time:'2017-11-23'
                },
                {
                    money:'5',
                    type:'实名认证',
                    phone:'18888888881',
                    time:'2017-11-23'
                },
                {
                    money:'5',
                    type:'实名认证',
                    phone:'18888888881',
                    time:'2017-11-23'
                }
            ] 
        }
    },
    mounted(){
        let bread = [
            {
                name:'余惠宝',
                url:'/'
            },
            {
                name:'我的账户',
                url:'/account'
            },
            {
                name:'推荐好友',
                url:''
            }
        ];
        this.$store.dispatch('accountBreadChange',bread)
    },
    components:{
        InviteTemplate
    }
}
</script>
<style lang="less">
.ivu-table td.profit-money-column{
	color: #ff7542;
}
.invite-reward-list .ivu-table:after {
	background-color: #FFFFFF;
}
.invite-reward-list .ivu-table:before{
	background-color: #e3e8ee;
}
.invite-reward-list{
	border: none !important;
}
.invite-modal .ivu-modal-footer{
	border-top: none;
}
</style>
<style lang="less" scoped>
.title{
    font-size: 16px;
    color: #4c4c4c;
    display: block;
}
.my-reward-wrap{
    margin:20px 0;
}
.my-reward{
    font-size:16px;
    color:#4c4c4c;
}
.my-reward-value{
    font-size:24px;
    margin:0 .4em;
    vertical-align:-2px;
    color:#ff7542;
}
.reward-list-page-wrap{
    margin:20px 0;
}
.reward-list-page-nav{
    text-align:center;
}
.invite-rules{
    color:#808080;
    line-height:2;
    margin-top:30px;
}
.rule-title{
    display:block;
    font-size:16px;
    color:#4c4c4c;
}
.rule-item{
    display: block;
    text-indent:20px;
    font-size:14px;
}
</style>


