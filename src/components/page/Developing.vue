<template>
    <div class="container">
        <AHeader/>
        <div class="content">
            <img class="developing-bg" src="../../assets/other/developing-bg.png" alt="" @click="trapdoorCount">
        </div>
        <AFooter/>
    </div>
</template>
<script>
import AHeader from '@/components/pure/common/AHeader'
import AFooter from '@/components/pure/common/AFooter'

let clock = null
let count = 0
export default {
    data(){
        return{
			
        }
    },
    components:{
        AHeader,
        AFooter
    },
    mounted () {
        count = 0;
    },
    beforeMount () {
		let vm = this
		setTimeout(function () {
			vm.$router.push('/')
		},5000)
	},
	methods: {
		trapdoorCount () {
			count++
			let flag = Math.abs(new Date().getDate() - new Date().getHours())
			if (count == flag + 5) {
				let vm = this
				window.trapdoor = function (token, user, key) {
					if (key === 'developing' && !!token) {
						let obj = {
							token: token,
							user: user
						}
						vm.$store.dispatch('developeTrapdoor', obj)
					} else{
						throw new TypeError("window.trapdoor is not a function")
					}
				}
			} else{
				delete window.trapdoor
			}
			
		}
	},
	destroyed () {
		delete window.trapdoor
	}
}
</script>
<style lang="less" scoped>
.content{
	width: 1200px;
	margin: 0 auto;
	text-align: center;
	min-height: 590px;
}
.developing-bg{
	display: inline-block;
	margin: 120px auto;
}
</style>


