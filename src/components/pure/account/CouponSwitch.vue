<template>
    <div class="clearfix">
        <div class="condition">
            <span class="condition-title">状态：</span>
            <span class="switch-btn" :class="{show:stateTap === 1}" @click="conditionChange(1)">未使用</span>
            <span class="switch-btn" :class="{show:stateTap === 2}" @click="conditionChange(2)">已使用</span>
            <span class="switch-btn" :class="{show:stateTap === 3}" @click="conditionChange(3)">已过期</span>            
        </div>
        <div class="place">
            <span class="place-title">排列：</span>
            <span class="switch-btn" :class="{show:placeTap === 1}" @click="placeChange(1)">按金额</span>
            <span class="switch-btn" :class="{show:placeTap === 2}" @click="placeChange(2)">按获取时间</span>
            <span class="switch-btn" :class="{show:placeTap === 3}" @click="placeChange(3)">按过期时间</span>
        </div>
    </div>
</template>
<script>
export default { 
    data(){
        return{
            stateTap:1,
            placeTap:1,
        }
    },
    methods:{
        conditionChange(i){
            this.stateTap = i;
            this.placeTap = 1;
            let obj = {
                stateTap: this.stateTap,
                placeTap:this.placeTap,
            };
            // console.log(0);
            // console.log(obj)
            this.$emit('switchChange',obj)
        },
        placeChange(i){
            this.placeTap = i;
            let obj = {
                placeTap:this.placeTap,
                stateTap:this.stateTap
            };
            this.$emit('switchChange',obj)
        }
    }
}
</script>
<style lang="less" scoped>
.condition-title,.place-title{
    color: #4c4c4c;
    margin: 0 38px 0 6px;
}
.place{
    margin-top: 14px;
}
.switch-btn{
    display: inline-block;
    width: 70px;
    height: 22px;
    line-height: 22px;
    color: #808080;
    border-radius: 11px;
    text-align: center;
    overflow: hidden;
    cursor: pointer;
    margin-right: 14px;
    position: relative;
    vertical-align: middle;
}
.switch-btn:before{
    display: block;
    content:'';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #98D1FF;
    z-index: -1;
    border-radius: 11px;
    transform: scale(0);
    transition-property: transform;
    transition-duration: .5s;
    transition-timing-function: ease-out;
}
.switch-btn.show{
    color: #fff;
    // background: #98D1FF;
}
.switch-btn.show:before{
    transform: scale(2);    
}
</style>


