<template>
    <div class="information clearfix">
        <h4 class="title">个人资料</h4>
        <div class="item">
            <Icon v-if="idCard" class="success" :size="15" type="checkmark-circled"></Icon>
            <Icon v-else class="faild" :size="15" type="information-circled"></Icon>
            <span class="bind-status">{{idCard ? '已认证':'未认证' }}</span>
            <span class="item-desc">实名认证</span>
            <span v-if="idCard" class="item-info success">410421********4036</span>
            <span v-else class="item-info error">只有通过实名认证，才能充值投资</span>
            <span v-if="idCard" class="skip-btn fr" @click="showChange(1)">详情</span>
            <router-link v-else to="/" class="amend fr">立即设置</router-link>
        </div>
        <InforIdCard class="fold" :class="{show:show === 1}"/>
        <div class="item">
            <Icon v-if="bankCard" class="success" :size="15" type="checkmark-circled"></Icon>
            <Icon v-else class="faild" :size="15" type="information-circled"></Icon>
            <span class="bind-status">{{bankCard ? '已认证':'未认证'}}</span>
            <span class="item-desc">银行卡</span>
            <span v-if="bankCard" class="item-info success">6221***********9974</span>
            <span v-else class="item-info error">保障资金安全，充值、取现资金同卡进出</span>
            <router-link v-if="bankCard" to="/account/bankCard" class="amend fr">详情</router-link>
            <router-link v-else to="/account/bankCard" class="amend fr">立即设置</router-link>
        </div>
        <div class="item">
            <Icon class="success" :size="15" type="checkmark-circled"></Icon>
            <span class="bind-status">已设置</span>
            <span class="item-desc">手机号码</span>
            <span class="item-info">188****8881</span>
            <span class="skip-btn fr" @click="showChange(2)">修改</span>
        </div>
        <InforPhone class="fold" :class="{show:show === 2}"/>
        <div class="item">
            <Icon class="success" :size="15" type="checkmark-circled"></Icon>
            <span class="bind-status">已设置</span>
            <span class="item-desc">登录密码</span>
            <span class="item-info">上次登录时间：<span class="now-time">{{time}}</span></span>
            <span class="skip-btn fr" @click="showChange(3)">修改</span>
        </div>
        <InforPassword class="fold" :class="{show:show === 3}"/>
        <div class="item">
            <Icon v-if="payPwd" class="success" :size="15" type="checkmark-circled"></Icon>            
            <Icon v-else class="faild" :size="15" type="information-circled"></Icon>            
            <span class="bind-status">{{payPwd ? '已设置':'未设置'}}</span>
            <span class="item-desc">交易密码</span>
            <span class="item-info">保障资金安全，充值、提现、投资登资金相关操作时使用</span>
            <span v-if="payPwd" class="skip-btn fr">
                <span @click="payPwdTypeChange(2)">修改</span>
                |
                <span @click="payPwdTypeChange(3)">找回</span>
            </span>
            <span v-else class="skip-btn fr" @click="payPwdTypeChange(1)">立即设置</span>
        </div>
        <InforPayPwd class="fold" :class="{show:show === 4}" :type="payPwdTypeChild"/>
        <div class="item">
            <Icon v-if="invitor" class="success" :size="15" type="checkmark-circled"></Icon>
            <Icon v-else class="faild" :size="15" type="information-circled"></Icon>
            <span class="bind-status">{{invitor ? '已设置':'未设置'}}</span>
            <span class="item-desc">紧急联系人</span>
            <span v-if="invitor" class="item-info success">176****2154</span>
            <span v-else class="item-info error">紧急情况下保障账户安全的联系人</span>
            <span v-if="invitor" class="skip-btn fr" @click="showChange(5)">修改</span>
            <span v-else class="skip-btn fr" @click="showChange(5)">未登记</span>
        </div>
        <InforInvitor class="fold" :class="{show:show === 5}"/>
    </div>
</template>
<script>
import InforIdCard from '@/components/pure/account/InforIdCard'
import InforPhone from '@/components/pure/account/InforPhone'
import InforPassword from '@/components/pure/account/InforPassword'
import InforPayPwd from '@/components/pure/account/InforPayPwd'
import InforInvitor from '@/components/pure/account/InforInvitor'
export default {
    data(){
        return{
            show:1,
            payPwdType:1
        }
    },
    mounted(){
        this.show = 0;
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
                name:'个人资料',
                url:''
            }
        ];
        this.$store.dispatch('accountBreadChange',bread);
    },
    methods:{
        showChange(index){
            if(this.show === index && index !==4){
                this.show = 0;
            }else{
                this.show = index
            }
        },
        payPwdTypeChange(v){
            if(this.payPwdType !== v && this.show === 4){
                this.payPwdType = v
            }else{
                if(this.show !== 4){
                    this.show = 4,
                    this.payPwdType = v
                }else{
                    this.show = 0 
                }
            }
        }
    },
    computed:{
        time(){
            let year = new Date().getFullYear();
            let month = new Date().getMonth()+1;
            let day = new Date().getDate();
            let hour = new Date().getHours();
            let minute = new Date().getMinutes();
            let second = new Date().getSeconds();
            let loginTime = year+'-'+month+'-'+day+'  '+hour+':'+minute+':'+second
            return loginTime
            console.log(loginTime)
        },
        idCard() {
			/*return this.$store.state.account.bindStatus.idCard */
			return true
		},
		bankCard (){
			/*return this.$store.state.account.bindStatus.bankCard*/
			return true
		},
		payPwd () {
			/*return this.$store.state.account.bindStatus.payPwd*/
			return true
        },
        invitor(){
            return true
        },
		payPwdTypeChild() {
			return this.payPwdType
		}
    },
    components:{
        InforIdCard,
        InforPhone,
        InforPayPwd,
        InforPassword,
        InforInvitor
    }
}
</script>
<style lang="less" scoped>
.title{
    font-size: 16px;
    display: block;
    color: #4c4c4c;
}
.fold{
    max-height: 0;
    overflow: hidden;
    transition: max-height .5s;
}
.fold.show{
    max-height: 1000px;
}
.item{
    padding-left: 20px;
    height: 82px;
    line-height: 82px;
    border-bottom: 1px solid #e5e5e5;
}
.success{
    color: #77c812;
}
.faild{
    color: #ffb126;
}
.error{
    color:#e74141 !important;
}
.bind-status{
    color:#808080;
    margin-left: 50px;
}
.item-desc{
    display: inline-block;
    margin-left: 84px;
    color: #4c4c4c;
    width: 70px;
    text-align: center;
    font-size: 14px;
}
.item-info{
    display: inline-block;
    width: 400px;
    text-align: center;
    font-size: 14px;
    margin-left: 40px;
    color: #ff7542;
}
.skip-btn{
    font-size: 14px;
    color:#3399ff;
    // text-decoration: underline;
    cursor: pointer;
    margin-right: 20px;
}
.amend{
    font-size: 14px;
    margin-right: 20px;
}
</style>


