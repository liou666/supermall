<template>
  <div id="home">
    <nav-bar class="nav-bar"><div slot="center">购物街</div></nav-bar>      
     <tab-control ref="topTabControl" :title="['流行','新款','精选']" @tabclick="tabClick" class="tab-control" v-show="isTabFixed"/>
    <scroll 
    class="conent" 
    ref="scroll"
    @scroll="contentScroll" 
    :probe-type="3" 
    :pull-up-load="true"
    @pullingUp="loadMore"
    >
        <home-swiper :banner="banner" @swiperImageLoad="swiperImageLoad"/>
        <home-recommend-view :recommend='recommend' />
        <feature-view/>
        <tab-control :title="['流行','新款','精选']" @tabclick="tabClick"    ref="tabControl"/>
        <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backTop"  v-show="isShowBackTop" />
  </div>
</template>

<script>
import navBar from 'components/common/navBar/navBar';
import homeSwiper from './childComps/homeSwiper';
import homeRecommendView from './childComps/homeRecommendView';
import featureView from './childComps/featureView'
import {getHomeMultidata,getHomeGoods} from 'network/home';
import tabControl from 'components/content/tabControl/tabControl';
import goodsList from'components/content/goods/goodsList';
import scroll from 'components/content/scroll/scroll';
import backTop from 'components/common/backTop/backTop';
export default {
    name:"home",
    data() {
    return {
      banner:[],
      recommend:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      currentType:'pop',
      isShowBackTop:false,
      tabOffsetTop:0,
      isTabFixed:false,
      saveY:0
    }
  },
    components:{
      navBar,
     homeSwiper,
     homeRecommendView,
     featureView,
     tabControl,
     goodsList,
     scroll,
     backTop
    },
    created() {
        this._getHomeMultidata();
        this._getHomeGoods('pop');
        this._getHomeGoods('new');
        this._getHomeGoods('sell');
    },
    mounted() {
        const refresh=this.debounce(this.$refs.scroll.refresh,100)//防抖处理
        this.$bus.$on('itemImageLoad',()=>{
        //  this.$refs.scroll.scroll.refresh();
         refresh();
        });
     
    
    },
    destroyed() {
      console.log('home destroyed');
    },
    activated () {
       this.$refs.scroll.refresh()
       this.$refs.scroll.scrollTo(0,this.saveY,0) 
    },
    deactivated () {
     this.saveY= this.$refs.scroll.scroll.y
    },
    computed: {
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
    methods: {
      //逻辑方法
      tabClick(index){
        this.currentType=Object.keys(this.goods)[index];
        this.$refs.tabControl.currentIndex=index;
        this.$refs.topTabControl.currentIndex=index
      },
      backTop(){
       this.$refs.scroll.scrollTo(0,0,500);   
      },
      swiperImageLoad(){
       this.tabOffsetTop=this.$refs.tabControl.$el.offsetTop;
      },
      contentScroll(position){
        this.isShowBackTop=(-position.y>1000)?true:false;
        this.isTabFixed=(-position.y>this.tabOffsetTop)?true:false
      },

      loadMore(){
       this._getHomeGoods(this.currentType);
      },  
      debounce(fn,delay){
          let timer=null;      
           return function(...args){
              if(timer) clearTimeout(timer);
              timer=setTimeout(()=>{
                fn.apply(this,args)
                },delay)
          }
      },
      // 网络请求的方法
      _getHomeMultidata(){
       getHomeMultidata().then(res=>{
       this.banner=res.data.banner.list;
       this.recommend=res.data.recommend.list;
      })},
      _getHomeGoods(type){
        const page=this.goods[type].page+1;
        getHomeGoods(type,page).then(res=>{
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page=page;
          this.$refs.scroll.scroll.finishPullUp()
        })}
    },
}
</script>

<style scoped>
.conent{
 position: absolute;
 top: 44px;
 bottom: 49px;
 left: 0;
 right: 0;
 overflow: hidden;
}
#home{
  height: 100vh;
}
.nav-bar{
  background-color: var(--color-tint);
  position: relative;
  z-index: 9;
}
.tab-control{
  position: relative;
  top: 0;
  z-index: 2;
}
</style>