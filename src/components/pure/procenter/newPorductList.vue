<template>
    <div class="clearfix">
        <div class="switch">
            <div class="condition">
                <span class="condition-title">投标期限：</span>
                <span class="switch-btn" :class="{show:dayTap === 0}" @click="conditionChange(0)">全部</span>
                <span class="switch-btn" :class="{show:dayTap === 1}" @click="conditionChange(1)">1~3个月</span>
                <span class="switch-btn" :class="{show:dayTap === 2}" @click="conditionChange(2)">4~6个月</span>
                <span class="switch-btn" :class="{show:dayTap === 3}" @click="conditionChange(3)">7~9个月</span>
                <span class="switch-btn" :class="{show:dayTap === 4}" @click="conditionChange(4)">10~12个月</span>   
                <span class="switch-btn" :class="{show:dayTap === 5}" @click="conditionChange(5)">12个月以上</span>                                                                                 
            </div>
            <div class="place">
                <span class="place-title">投标利率：</span>
                <span class="switch-btn" :class="{show:rateTap === 0}" @click="placeChange(0)">全部</span>
                <span class="switch-btn" :class="{show:rateTap === 1}" @click="placeChange(1)">7%以下</span>
                <span class="switch-btn" :class="{show:rateTap === 2}" @click="placeChange(2)">7%~10%</span>
                <span class="switch-btn" :class="{show:rateTap === 3}" @click="placeChange(3)">10%以上</span>            
            </div>
        </div>
        <div class="new-product">
            <ReserveFor :reservefor='newProductList.ReserveFor'/>
            <Periodical :periodical='newProductList.periodical'/>
            <!-- <Volitant :volitant="newProductList.volitant"/> -->
            <!-- <LivingTimeTreasure :livingTime='newProductList.livingTime'/> -->
        </div>
    </div>
</template>
<script>
import ReserveFor from '@/components/pure/procenter/ReserveFor' 
import Periodical from '@/components/pure/procenter/Periodical'
import Volitant from '@/components/pure/procenter/Volitant'
import LivingTimeTreasure from '@/components/pure/procenter/LivingTimeTreasure'
export default {
    data(){
        return{
            dayTap:0,
            rateTap:0,
            newProductList1:{
                ReserveFor:[
                    {
                        id:191,
                        name:'理财接力狂欢节365',
                        rate:6.13,
                        day:30,
                        min:1000,
                        left:'30,000.00',
                        percent:80,
                        Gcertificate:1,//礼券是否可用，0不可用，1可用
                        titular:'体验金专享',
                    },
                    {
                        id:191,
                        name:'理财接力狂欢节365',
                        rate:6.13,
                        day:30,
                        min:1000,
                        left:'30,000.00',
                        percent:80,
                        Gcertificate:0,//礼券是否可用，0不可用，1可用
                        titular:'高端定制',
                    },
                    // {
                    //     id:191,
                    //     name:'理财接力狂欢节365',
                    //     rate:6.13,
                    //     day:30,
                    //     min:1000,
                    //     left:'30,000.00',
                    //     percent:80,
                    //     Gcertificate:1,//礼券是否可用，0不可用，1可用
                    //     titular:'高端定制',
                    // }
                ],
                periodical:[
                    {
                        id:191,
                        name:'理财接力狂欢节365',
                        rate:6.13,
                        day:30,
                        min:1000,
                        left:'30,000.00',
                        percent:80,
                        Gcertificate:1,//礼券是否可用，0不可用，1可用
                    },
                    {
                        id:191,
                        name:'理财接力狂欢节365',
                        rate:6.13,
                        day:30,
                        min:1000,
                        left:'30,000.00',
                        percent:80,
                        Gcertificate:0,//礼券是否可用，0不可用，1可用
                    }
                ],
                volitant:[
                    {
                        id:191,
                        name:'理财接力狂欢节365',
                        rate:6.13,
                        day:30,
                        min:1000,
                        left:'30,000.00',
                        percent:80,
                        Gcertificate:1,//礼券是否可用，0不可用，1可用
                    },
                    {
                        id:191,
                        name:'理财接力狂欢节365',
                        rate:6.13,
                        day:30,
                        min:1000,
                        left:'30,000.00',
                        percent:80,
                        Gcertificate:0,//礼券是否可用，0不可用，1可用
                    },
                ],
                livingTime:6.14
            }
        }
    },
    methods:{
        conditionChange(i){
            this.dayTap = i;
            // this.rateTap = 1;
            // let obj = {
            //     dayTap: this.dayTap,
            //     rateTap:this.rateTap,
            // };
            // // console.log(0);
            // // console.log(obj)
            // this.$emit('switchChange',obj)
            console.log(i+"年")
            let obj = {
                dayTap: this.dayTap,
                rateTap: this.rateTap
            }
            console.log(obj)
            this.$store.dispatch('NEWPRODUCTLIST',obj)
        },
        placeChange(i){
            this.rateTap = i;
            // let obj = {
            //     rateTap:this.rateTap,
            //     dayTap:this.dayTap
            // };
            // this.$emit('switchChange',obj)
            console.log(i+"%")
            let obj = {
                dayTap: this.dayTap,
                rateTap: this.rateTap
            }
            console.log(obj)
            this.$store.dispatch('NEWPRODUCTLIST',obj)
        }
    },
    computed:{
        newProductList(){
            return this.$store.state.procenter.newProductList
        }
    },
    components:{
        ReserveFor,
        Periodical,
        Volitant,
        LivingTimeTreasure
    },
    mounted(){
        let obj = {
            dayTap: this.dayTap,
            rateTap: this.rateTap
        }
        console.log(obj)
        this.$store.dispatch('NEWPRODUCTLIST',obj)
    }
}
</script>
<style lang="less" scoped>
.switch{
    width: 100%;
    height: 115px;
    border:1px solid #e5e5e5;
    background: #fff;
    margin-bottom: 20px;
}
.switch span{
    font-size: 14px;
}
.condition-title,.place-title{
    color: #4c4c4c;
    margin: 0 20px 0 6px;
}
.condition,.place{
    margin:20px 10px;
}
.switch-btn{
    display: inline-block;
    // width: 70px;
    height: 30px;
    line-height: 17px;
    padding: 8px;
    color: #808080;
    border-radius: 5px;
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
    background: #ff7542;
    z-index: -1;
    border-radius: 11px;
    transform: scale(0);
    transition-property: transform;
    transition-duration: .5s;
    transition-timing-function: ease-out;
}
.switch-btn.show{
    color: #fff;
    background: #ff7542;
}
.switch-btn.show:before{
    transform: scale(2);    
}
</style>


