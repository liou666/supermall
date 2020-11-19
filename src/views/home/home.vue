<template>
  <div id="home">
      <nav-bar>
        <div slot="center">购物街</div>
      </nav-bar>
      <tab-control ref="control1" v-show="isShow" class="tab-control"  @tabClick="tabClick" :title="['流行','新品','精选']" :goodsType='goodsType' />    
      <scroll @pullingUp="pullingUp" @scroll="scroll" class="wrapper" ref="scroll">
          <swiper :banner="banner"  />
          <recommend :recommend="recommend"/>
          <img class="recommeng_bg" src="~assets/img/home/recommend_bg.jpg" alt="">
          <tab-control ref="control" @tabClick="tabClick" :title="['流行','新品','精选']" :goodsType='goodsType' />
          <goodsList  :goods='goods[currentType].list' />
      </scroll>
      <back-top v-show="isTopShow" @click.native="backTop" />
  </div>
</template>

<script>
import navBar from 'common/navBar/navBar';
import Swiper from './childComponents/swiper';
import recommend from './childComponents/recommend';
import tabControl from 'common/tabControl/tabControl';
import {getHomeMultidata,getHomeGoods} from 'network/home';
import goodsList from 'content/goods/goodsList'
import Scroll from 'common/scroll/scroll';

import {backTopMinin} from '@/common/mixin'
export default {
  data() {
    return {
      banner:[],
      recommend:[],
      goods:{
       'pop':{page:0,list:[]},
       'new':{page:0,list:[]},
       'sell':{page:0,list:[]}
      }, 
      goodsType:['pop','new','sell'] ,
      currentType:'pop',
      isShow:false,
      // isTopShow:false
    }
    
  },
  mixins:[backTopMinin],
  components:{
    navBar,
    Swiper,
   recommend,
    tabControl,
    goodsList,
    Scroll,
    // backTop
  },
  methods: {
    debounce(fn,delay){     
      let timer;
      return function(...args){
        clearTimeout(timer)
        timer = setTimeout(()=>{           
          fn.apply(this,args)
        },delay)
      }
    
    },
    tabClick(index){
      this.currentType=Object.keys(this.goods)[index];
      this.$refs.control.currentIndex=index;
      this.$refs.control1.currentIndex=index
    },
    scroll(psition){
      const positionY=-psition.y
     if(positionY> this.$refs.control.$el.offsetTop){
       this.isShow=true
     }else{
       this.isShow=false
     };
     this.listenShowBackTop(positionY)
    },
    
    pullingUp(){
      this._getHomeGoods(this.currentType)
      this.$refs.scroll.finishPullUp()
    },
    _getHomeMultidata(){
      return getHomeMultidata().then(res=>{
        this.banner=res.data.data.banner.list;
        this.recommend=res.data.data.recommend.list;
      })
    },
    _getHomeGoods(type){
      let page=this.goods[type].page+1;
      getHomeGoods(type,page).then(res=>{
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page++;

      })
    },
   
  },
  created() {
   this._getHomeMultidata()
   this._getHomeGoods('pop')
   this._getHomeGoods('new') 
   this._getHomeGoods('sell');
  },
  mounted() {
     const refresh=this.debounce(this.$refs.scroll.refresh,500)
     this.$bus.$on('homeImgLoad',()=>refresh())   
    // this.$refs.scroll&&this.$refs.scroll.refresh();    
  },
 
}
</script>

<style scoped>
  #home{
    height: 100vh;
    background-color: #fff;
  }
  .recommeng_bg{
    width: 100%;
    margin-bottom: 10px;
  }
 .wrapper{
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
    overflow: hidden;
 }
 .tab-control{
   position: relative;
   z-index: 9;
   background-color: #fff;
 }
</style>