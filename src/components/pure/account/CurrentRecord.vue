<template>
    <div>
        <span class="title">资金明细</span>
        <div class="current-taps">
            <Tabs value="in" type="card" class="current-record">
                <TabPane label="转入记录" name="in">
                    <div class="head">
                        <b class="time">时间</b>
                        <b class="money">金额（元）</b>
                    </div>
                    <div class="record-item" v-for="item,index in InLists" key="index">
                        <span class="time">{{item.time}}</span>
                        <span class="money">{{item.money}}</span>
                    </div>
                    <div class="my-page">
		        		<Page :total="400" size="small" class="page-nav"></Page>
		        	</div>
                </TabPane>
                <TabPane label="转出记录" name="out">
                    <div class="head">
                        <b class="time">时间</b>
                        <b class="money">金额（元）</b>
                    </div>
                    <div class="record-item" v-for="item,index in outLists" key="index">
                        <span class="time">{{item.time}}</span>
                        <span class="money">{{item.money}}</span>
                    </div>
                    <div class="my-page">
		        		<Page :total="400" size="small" class="page-nav"></Page>
		        	</div>
                </TabPane>
                <TabPane label="收益记录" name="income">
                    <div class="head">
                        <b class="time">时间</b>
                        <b class="money">金额（元）</b>
                    </div>
                    <div class="record-item" v-for="item,index in inComeLists" key="index">
                        <span class="time">{{item.time}}</span>
                        <span class="money">{{item.money}}</span>
                    </div>
                    <div class="my-page">
		        		<Page :total="400" size="small" class="page-nav"></Page>
		        	</div>
                </TabPane>
            </Tabs>
            <!-- <Date-picker class="my-date-picker" type="daterange" :options="options" placement="bottom-end" placeholder="选择日期" style="width: 200px"></Date-picker> -->
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            InLists:[
                {
                    time:'2017-11-01 17:06',
                    money:4513.6
                },
                {
                    time:'2017-11-01 17:06',
                    money:4513.6
                },
                {
                    time:'2017-11-01 17:06',
                    money:4513.6
                },
                {
                    time:'2017-11-01 17:06',
                    money:4513.6
                },
                {
                    time:'2017-11-01 17:06',
                    money:4513.6
                },
                {
                    time:'2017-11-01 17:06',
                    money:4513.6
                },
                {
                    time:'2017-11-01 17:06',
                    money:4513.6
                },
                {
                    time:'2017-11-01 17:06',
                    money:4513.6
                }
            ],
            outLists:[
                {
                    time:'2017-11-01 17:56',
                    money:45654.6
                },
                {
                    time:'2017-11-01 17:56',
                    money:45654.6
                },
                {
                    time:'2017-11-01 17:56',
                    money:45654.6
                },
                {
                    time:'2017-11-01 17:56',
                    money:45654.6
                },
                {
                    time:'2017-11-01 17:56',
                    money:45654.6
                },
                {
                    time:'2017-11-01 17:56',
                    money:45654.6
                },
                {
                    time:'2017-11-01 17:56',
                    money:45654.6
                },
                {
                    time:'2017-11-01 17:56',
                    money:45654.6
                }
            ],
            inComeLists:[
                {
                    time:'2017-11-01 18:11',
                    money:122.6
                },
                {
                    time:'2017-11-01 17:56',
                    money:122.6
                },
                {
                    time:'2017-11-01 17:56',
                    money:122.6
                },
                {
                    time:'2017-11-01 17:56',
                    money:122.6
                },
                {
                    time:'2017-11-01 17:56',
                    money:122.6
                },
                {
                    time:'2017-11-01 17:56',
                    money:122.6
                },
                {
                    time:'2017-11-01 17:56',
                    money:122.6
                },
                {
                    time:'2017-11-01 17:56',
                    money:122.6
                }
            ]
        }
    }
}
</script>

<style lang="less">
.current-record .ivu-tabs-tab{
	padding: 5px 30px 4px !important;
}
.current-record .ivu-tabs-tab:hover{
	color: #ff7542;
}
</style>
<style lang="less" scoped>

.title{
    display: block;
    font-size: 18px;
    color: #4c4c4c;
    margin: 10px 0;
}
.head{
    height: 42px;
    line-height: 32px;
    font-size: 14px;
    color:#808080;
    border-bottom: 1px solid #e5e5e5;
}
.time{
    width: 30%;
    display: inline-block;
    text-align: center;
}
.money{
    width: 40%;
    display: inline-block;
    text-align: center;
    margin-left: 20%;
}
.record-item{
    height: 52px;
    line-height: 52px;
    font-size: 14px;
    border-bottom: 1px solid #f5f5f5;
}
.record-item .money{
    color: #ff7542;
}
.my-page{
    margin-top:20px;
    text-align: center;
}
</style>


