<template>
    <div id="detial" >
       <detial-nav-bar ref="nav" :_current-index="currentIndex" @topClick="topClick"/>
        <scroll @scroll="scroll" ref='scroll' class="content">
            <swiper ref="swiper"  :banner="swiperImages" />
            <detial-base-info :goods='goods'/>
            <detial-shop-info :shop="shop"/>
            <detial-goods-info @imgLoad="imgLoad" :detailInfo="detailInfo"/> 
            <detail-params-info ref="params" :goodsParam="goodsParam" />
            <detail-commend-info ref="commend" :commendInfo="commendInfo"/>
            <goods-list ref="recommend"  :goods="recommendInfo"/>         
        </scroll>
       
        <back-top  v-show="isTopShow" @click.native="backTop" />
        <detail-bottom @addToCart="addToCart"/>
    </div>

</template>

<script>
import detialNavBar from './detialChildComp/detialNavBar';
import {getDetialData,Goods,Shop,GoodsParam,getRecommendDate} from 'network/detial'
import Swiper from './detialChildComp/swiper';
import Scroll from 'common/scroll/scroll'
import DetialBaseInfo from './detialChildComp/detialBaseInfo.vue';
import DetialShopInfo from './detialChildComp/detialShopInfo.vue';
import DetialGoodsInfo from './detialChildComp/detialGoodsInfo.vue';
import DetailParamsInfo from './detialChildComp/detailParamsInfo.vue';
import DetailCommendInfo from './detialChildComp/detailCommendInfo';
import GoodsList from 'content/goods/goodsList.vue';
import DetailBottom from './detialChildComp/detailBottom.vue';
import {backTopMinin} from '@/common/mixin'

export default {
    name:"Detial",
    data() {
        return {
            iid:null,
            swiperImages:[],
            goods:{},
            shop:{},
            goodsParam:{},
            detailInfo:{},
            commendInfo:[],
            recommendInfo:[],
            offsetTopY:[],
           currentIndex:0,
        
        }
    },
    mixins:[backTopMinin],
    components:{
        detialNavBar,
        Swiper,
        DetialBaseInfo,
        DetialShopInfo,
        Scroll,
        DetialGoodsInfo,
        DetailParamsInfo,
        DetailCommendInfo,
        GoodsList,
        DetailBottom,
       
    },
       
    created(){
        this.iid=this.$route.params.iid;
        this._getDetialData(this.iid);
        this._getRecommendDate();
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
        topClick(index){        
            this.$refs.scroll.scrollTo(0,-this.offsetTopY[index],300)
        },
        scroll(position){
            const positionY = -position.y;
            // console.log(positionY);
          
            this.listenShowBackTop(positionY)
            for(let i=0;i<this.offsetTopY.length-1;i++){
                if(this.offsetTopY[i+1]>positionY&&positionY>=this.offsetTopY[i]){
                   if(this.currentIndex!=i){
                       this.$refs.nav.currentIndex=i
                       this.currentIndex=i
                   }
                   break                                     
                }
            }           
        },
        imgLoad(){
         this.$refs.scroll.refresh();
       
        //  this.debounce( this._getOffsetTops,200)()
         this._getOffsetTops()
        },
        addToCart(){
            const obj = {}     
            obj.iid = this.iid;
            obj.imgURL = this.swiperImages[0]
            obj.title = this.goods.title
            obj.desc = this.goods.desc;
            obj.newPrice = this.goods.nowPrice;
            this.$store.dispatch('addCart',obj).then(res=>{
              this.$toast.show(res)
            });

        },
        _getDetialData(iid){
            getDetialData(iid).then(res=>{
               const data= res.data.result;
            //    console.log( data);
               this.swiperImages=data.itemInfo.topImages;
               this.goods=new Goods(data.itemInfo, data.columns, data.shopInfo.services)
               this.shop=new Shop(data.shopInfo);
                this.detailInfo=data.detailInfo;
                if(data.rate.cRate!=0){
                    this.commendInfo=data.rate.list
                }
               this.goodsParam=new GoodsParam(data.itemParams.info,data.itemParams.rule)
            })
        },
        _getRecommendDate(){
            getRecommendDate().then(res=>{
                this.recommendInfo=res.data.data.list;
            })
        },
        _getOffsetTops(){
            // this.$refs.scroll.refresh();
             this.offsetTopY = [];
             this.offsetTopY.push(0)
             this.offsetTopY.push(this.$refs.params.$el.offsetTop);
             this.offsetTopY.push(this.$refs.commend.$el.offsetTop);
             this.offsetTopY.push( this.$refs.recommend.$el.offsetTop);
             this.offsetTopY.push(Infinity);
            //  this.$refs.scroll.refresh();
            //  console.log(this.offsetTopY);
        }
    },
    mounted() {
    this.$bus.$on('detailImgLoad',()=>{
        this.$refs.scroll.refresh();     
    })      
    },
    updated() {
        // this.debounce(this._getOffsetTops,50)();
        //  this._getOffsetTops()
    },
}
</script>

<style scoped>
    #detial{
    height: 100vh;
    position: relative;
    z-index: 999;
    background-color: #fff;
    }
    .content{
        height: calc(100% - 44px - 58px);
        overflow: hidden;    
    }
</style>