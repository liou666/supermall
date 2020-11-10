<template>
  <div>
      <nav-bar>
          <div slot="left" class="left" @click="backClick">
              <img src="~assets/images/common/back.svg" alt="">
          </div>
          <ul slot="center" class="center">
              <li v-for="(item,index) in titles" 
              :key="index" 
              :class="{actived:index===currentIndex}"
              @click="itemClick(index)"
              >
              {{item}}
              </li>
          </ul>
      </nav-bar>
  </div>
</template>

<script>
import navBar from 'components/common/navBar/navBar';
export default {
    name:"detailNavBar",
    data() {
        return {
            titles:['商品','参数','评论','推荐'],
          currentIndex:0
        }
    },
    components:{
        navBar
    },
    methods: {
        itemClick(index){
            this.currentIndex=index;
            this.$emit('themeClick',index)
        },
        backClick(){
            this.$router.go(-1)
        }
    },
}
</script>

<style scoped>
    .center{
        display: flex;
        justify-content: space-evenly;
        color: #333;
        font-size: 14px;
    }
   .left img{
       vertical-align: middle;
      width: 16px;
   }
    .actived{
        color: var(--color-high-text);
    }

</style>