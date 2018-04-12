<template>
    <div class="clearfix">
        <h4 class="title">我的消息</h4>
        <div class="check-state">
            <Checkbox
                :indeterminate="indeterminate"
                :value="checkAll"
                @click.prevent.native="handleCheckAll">{{checkValue}}</Checkbox>
            <button class="all-read">标记为已读</button>
        </div>
        <div class="title-list">
            <span>消息来源</span>
            <span>消息内容</span>
            <span>发送时间</span>
        </div>
        <CheckboxGroup class="item-list" v-for="item,index in checkGroup" key="index" v-model="checkAllGroup" @on-change="checkAllGroupChange">
            <Checkbox :label="item.id" class="item-check fl">             
            </Checkbox>
            <em v-if="item.readWhether === 0" class="envelope-mail fl"></em>
            <em v-if="item.readWhether === 1" class="read-mail fl"></em>
            <span class="origin fl" :class="{read:item.readWhether === 1}">{{item.source}}</span>
            <router-link :to="'/account/mynews/'+item.id" class="preview fl" :class="{read:item.readWhether === 1}">{{item.content}}</router-link>
            <span class="time fl" :class="{read:item.readWhether === 1}">{{item.time}}</span> 
            <Poptip class="fr delete" confirm title="您确认删除这条内容吗？" @on-ok="deleteMsg(index)" :width="190">
                <Icon type="trash-a" title="删除" class="trash" :size="20"></Icon>
            </Poptip>       
        </CheckboxGroup>
        <div class="my-page">
    		<Page :total="400" size="small" class="page-nav"></Page>
    	</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            checkValue:'全选',
            indeterminate: false,
            checkAll: false,
            checkAllGroup: [],
            checkGroup:[{
                id:1,
                content:'系统消息系统消息系统消息系统消息系统消息系统消息系统消息系统消息系统消息系统消息',
                time:'2017-11-21 13:15:42',
                source:'系统消息',
                readWhether:1,
                },
                {
                id:2,
                content:'系统消息系统消息系统消息系统消息系统消息系统消息系统消息系统消息系统消息系统消息',
                time:'2017-11-21 13:15:42',
                source:'官方消息',
                readWhether:1,                              
                },
                {
                id:3,
                content:'系统消息系统消息系统消息系统消息系统消息系统消息系统消息系统消息系统消息系统消息',
                time:'2017-11-21 13:15:42',
                source:'个人消息', 
                readWhether:0,                        
                },
                {
                id:5,
                content:'系统消息系统消息系统消息系统消息系统消息系统消息系统消息系统消息系统消息系统消息',
                time:'2017-11-21 13:15:42',
                source:'个人消息', 
                readWhether:0,                          
                },
                {
                id:6,
                content:'系统消息系统消息系统消息系统消息系统消息系统消息系统消息系统消息系统消息系统消息',
                time:'2017-11-21 13:15:42',
                source:'个人消息',
                readWhether:0,                           
                },
                {
                id:7,
                content:'系统消息系统消息系统消息系统消息系统消息系统消息系统消息系统消息系统消息系统消息',
                time:'2017-11-21 13:15:42',
                source:'个人消息', 
                readWhether:1,                          
                },
                {
                id:10,
                content:'系统消息系统消息系统消息系统消息系统消息系统消息系统消息系统消息系统消息系统消息',
                time:'2017-11-21 13:15:42',
                source:'个人消息',  
                readWhether:0,                         
                },
                {
                id:11,
                content:'系统消息系统消息系统消息系统消息系统消息系统消息系统消息系统消息系统消息系统消息',
                time:'2017-11-21 13:15:42',
                source:'个人消息', 
                readWhether:0,                          
                },
                {
                id:12,
                content:'系统消息系统消息系统消息系统消息系统消息系统消息系统消息系统消息系统消息系统消息',
                time:'2017-11-21 13:15:42',
                source:'个人消息',
                readWhether:0,                           
                },
                {
                id:15,
                content:'系统消息系统消息系统消息系统消息系统消息系统消息系统消息系统消息系统消息系统消息',
                time:'2017-11-21 13:15:42',
                source:'个人消息', 
                readWhether:0,//0 代表未读 1代表已读                          
                },
            ]
        }
    },
    methods: {
        handleCheckAll () {
            if (this.indeterminate) {
                this.checkAll = false;
            } else {
                this.checkAll = !this.checkAll;
            }
            this.indeterminate = false;
            if (this.checkAll) {
                for(let i = 0;i<this.checkGroup.length;i++){
                    let arrItem = this.checkGroup[i].id
                    this.checkAllGroup.push(arrItem)
                }
            } else {
                this.checkAllGroup = [];
            }
        },
        checkAllGroupChange (data) {
            if (data.length === this.checkGroup.length) {
                this.indeterminate = false;
                this.checkAll = true;
            } else if (data.length > 0) {
                this.indeterminate = true;
                this.checkAll = false;
            } else {
                this.indeterminate = false;
                this.checkAll = false;
            }
        },
        deleteMsg (e) {
            this.checkGroup.splice(e,1)
        },
        clickOver(){
            this.$store.state.account.myNews.read = 1;
        }
    },
    computed:{
        readWhether(){
            return this.$store.state.account.myNews.read
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
                name:'我的消息',
                url:''
            }
        ];
        this.$store.dispatch('accountBreadChange',bread);
    }
}
</script>
<style lang="less">
.item-check .ivu-checkbox + span{
    display: none;
}
</style>

<style lang="less" scoped>
.title{
    display: block;
    font-size: 16px;
    color: #4c4c4c;
}
.check-state{
    margin-top: 40px;
    border-bottom: 1px solid #e9e9e9;
    padding-bottom:6px;
    margin-bottom:6px;
}
.all-read{
    margin-left: 50px;
    width: 84px;
    height: 28px;
    border: 1px solid #ff7542;
    background: #ff7542;
    color: #fff;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
}
.title-list{
    margin-top: 24px;
    height: 44px;
    line-height: 44px;
    background: #f7f7f7;
    padding-left: 73px;
    padding-right: 142px;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
}
.title-list span{
    color: #4c4c4c;
}
.item-list{
    height: 70px;
    line-height: 70px;
    padding-left: 4px;
    color: #4c4c4c;
    border-bottom: 1px solid #f5f5f5;
    position: relative;
}
.item-list:hover{
    background:#f5f5f5;
}
.item-icon{
    padding-left: 20px;
    vertical-align: -3px;
}
.delete{
    margin-right:25px;
    cursor: pointer;
    color: #ff7542;
}
.envelope-mail{
    position: absolute;
    width:22px;
    height: 22px;
    background:url(../../../assets/account/icon-envelope.png) no-repeat;
    background-position:center center;
    top:24px;
    left:35px;
}
.read-mail{
    position: absolute;
    width:22px;
    height: 22px;
    background:url(../../../assets/account/icon-read-envelope.png) no-repeat;
    background-position:center center;
    top:24px;
    left: 35px;
}
.origin{
    margin-left:50px;
}
.read{
    color:#bdbdbd !important;
}
.preview{
    display: inline-block;
    width:260px;
    color:#4c4c4c;
    overflow: hidden;
    text-overflow:ellipsis;
    // word-wrap: nowrap;
    word-break:keep-all;
    text-overflow:ellipsis;
    margin-left:130px;
}
.preview:hover{
    color:#ff7542;
}
.time{
    margin-left:94px;
}
.my-page{
    position: absolute;
    bottom:60px;
    text-align:center;
    width:90%;
}
.page-nav{
    display: inline-block;;
}
</style>


