<template>
    <div class="clearfix">
        <div class="clearfix">
            <div class="nav-title" @click="openUP(1)">
                <span>
                    平台介绍
                    <Icon class="fr title-arrow" :class="{open : openGroup === 1}" type="chevron-right"></Icon>
                </span>
            </div>
            <div class="nav-content" :class="{ show : openGroup === 1 }">
                <router-link v-for="item,index in listOne" class="nav-item animated lightSpeedIn" :to="item.path" :style="{animationDelay: index * 0.1 + 's'}" key="item.active" :class="{active:active === item.active}">{{item.name}}</router-link>
            </div>
        </div>
        <div class="clearfix">
            <div class="nav-title" @click="openUP(2)">
                <span>
                    新闻公告
                    <Icon class="fr title-arrow" :class="{open : openGroup === 2}" type="chevron-right"></Icon>
                </span>
            </div>
            <div class="nav-content" :class="{ show : openGroup === 2 }">
                <router-link v-for="item,index in listTwo" class="nav-item animated lightSpeedIn" :to="item.path" :style="{animationDelay: index * 0.1 + 's'}" key="item.active" :class="{active:active === item.active}">{{item.name}}</router-link>
            </div>
        </div>
        <div class="clearfix">
            <div class="nav-title" @click="openUP(3)">
                <span>
                    关于我们
                    <Icon class="fr title-arrow" :class="{open : openGroup === 3}" type="chevron-right"></Icon>
                </span>
            </div>
            <div class="nav-content" :class="{ show : openGroup === 3 }">
                <router-link v-for="item,index in listThree" :to="item.path" key="item.active" :style="{animationDelay: index * 0.1 + 's'}" class="nav-item animated lightSpeedIn" :class="{active:active === item.active}">{{item.name}}</router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      listOne: [
        {
          path: "/publicity",
          active: 1,
          name: "平台介绍"
        },
        {
          path: "/publicity/safeConduct",
          active: 2,
          name: "安全保障"
        },
        {
          path: "/publicity/management",
          active: 3,
          name: "风控介绍"
        },
        {
          path: "/publicity/businessIntroduce",
          active: 4,
          name: "业务介绍"
        }
      ],
      listTwo: [
        {
          path: "/publicity/news",
          active: 5,
          name: "惠宝公告"
        },
        {
          path: "/publicity/proclamation",
          active: 6,
          name: "惠宝新闻"
        }
      ],
      listThree: [
        {
          path: "/guide",
          active: 7,
          name: "新手引导"
        },
        {
          path: "/app",
          active: 8,
          name: "APP下载"
        },
        {
          path: "/publicity/aptitude",
          active: 9,
          name: "荣誉资质"
        },
        {
          path: "/publicity/partner",
          active: 10,
          name: "合作伙伴"
        },
        {
          path: "/publicity/joinUs",
          active: 11,
          name: "加入我们"
        },
        {
          path: "/publicity/touchUs",
          active: 12,
          name: "联系我们"
        }
      ]
    };
  },
  computed: {
    active() {
      return this.$route.matched[1].meta.pBar;
    },
    openGroup() {
      //debugger
      // console.log('成功',this.$store.state.publicity.navOpen)
      return this.$store.state.publicity.navOpen;
    }
  },
  methods: {
    openUP(index) {
      let open = this.openGroup === index ? 0 : index;
      // console.log(this.$store.state.publicity.navOpen,open)
      this.$store.dispatch("publicityNavChange", open);
    }
  }
};
</script>
<style lang="less" scoped>
.nav-title {
  height: 70px;
  line-height: 70px;
  font-size: 18px;
  cursor: pointer;
  border-left: 4px solid #ff7542;
  padding-left: 38px;
  padding-right: 18px;
  border-bottom: 1px solid #f7f7f7;
}
.nav-title > span {
  display: inline-block;
  line-height: 1;
  width: 100%;
  vertical-align: middle;
}
.title-arrow {
  vertical-align: middle;
}
.title-arrow.open {
  transform: rotateZ(90deg);
}
.title-arrow {
  transition: transform 0.5s;
}
.nav-item:hover,
.nav-item.active {
  background: #ffe4d9;
  text-indent: 2em;
  color: #ff7542;
}
.nav-item {
  display: block;
  height: 50px;
  line-height: 50px;
  color: #4c4c4c;
  font-size: 16px;
  padding-left: 38px;
  background: #f5f5f5;
  border-bottom: 1px solid #e5e5e5;
  transition: text-indent 0.5s;
}
.nav-content {
  max-height: 0;
  overflow: hidden;
  line-height: 1;
  font-size: 14px;
  transition: max-height 1s cubic-bezier(0.8, 2, 0.2, 1.4);
}
.nav-content.show {
  max-height: 370px;
}
</style>


