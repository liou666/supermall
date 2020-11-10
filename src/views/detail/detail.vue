<template>
    <div id="detail">
       <detail-nav-bar class="header" ref="navBar" @themeClick="themeClick"/>
       <scroll class="content" :probeType='3' @scroll="contentScroll" ref="scroll">
           <detail-swiper  :top-images="topImages"/>
           <detail-base-info  :goods="goods"/>
           <detail-shop-info :shop="shop" />
           <detail-goods-info :detail-info="detailInfo" @imageLoad='imageLoad'/>
           <detail-goods-param ref="param" :param-info="goodsParam" />
           <detail-comment-info ref="comment" :comment-info="commentInfo"/>
           <good-list ref="recommend" :goods="recommend"/>
       </scroll>
       <detail-bottom-bar @addCar="addToCar" />
       <!-- <toast :message="message" :show="show"/> -->
    </div>
</template>
<script>
import detailNavBar from 'views/detail/childComp/detailNavBar';
import detailSwiper from './childComp/detailSwiper';
import detailBaseInfo from './childComp/detailBaseInfo';
import detailShopInfo from './childComp/detailShopInfo';
import scroll from 'components/content/scroll/scroll';
import detailGoodsInfo from './childComp/detailGoodsInfo';
import detailGoodsParam from './childComp/detailGoodsParam';
import detailCommentInfo from './childComp/detailCommentInfo';
import {getDetail,Goods,Shop,GoodsParam,getRecommend} from 'network/detail';
import goodList from 'components/content/goods/goodsList';
import detailBottomBar from './childComp/detailBottomBar';
import toast from 'components/common/toast/toast'
export default {
    name:"Detail",
    data() {
        return {
            iid:null,
           topImages:[],
           goods:{},
           shop:{},
           detailInfo:{},
           goodsParam:{},
           commentInfo:{},
           recommend:[],
           themeTopY:[0],
           currentIndex:0,
           message:'',
           show:false
        }
    },
    components:{  
        scroll, 
        detailNavBar,
        detailSwiper,
        detailBaseInfo,
        detailShopInfo,
        detailGoodsInfo,
        detailGoodsParam,
        detailCommentInfo,
        goodList,
        detailBottomBar,
        toast
    },
    methods: {
        imageLoad(){
            // console.log(1);
            this.$refs.scroll.refresh();
            this.themeTopY.push(this.$refs.param.$el.offsetTop-44);
            this.themeTopY.push(this.$refs.comment.$el.offsetTop-44);
            this.themeTopY.push(this.$refs.recommend.$el.offsetTop-44);
            this.themeTopY.push(Infinity);
            // console.log(this.themeTopY);
        },
        themeClick(index){
            this.$refs.scroll.scrollTo(0,-this.themeTopY[index],150)
        },
        contentScroll(position){
            const positionY=-position.y;
            for(let i=0;i<this.themeTopY.length-1;i++){
               if(positionY>=this.themeTopY[i]&&positionY<this.themeTopY[i+1]){
                   this.$refs.navBar.currentIndex=i
               }
            }
        },
        addToCar(){
           const product={};
           product.image=this.topImages[0];
           product.title=this.goods.title;
           product.desc=this.goods.desc;
           product.price="￥"+this.goods.realPrice;
           product.iid=this.iid;

          

        // this.$store.commit('addCar', product)
           this.$store.dispatch('addCar',product).then(res=>{
            //    this.message=res;
            //    this.show=true;
            //    setTimeout(()=>{
            //     this.show=false;
            //    },1500);
         
            this.$toast.show(res,2000);
            
           })
        }
    },
    created() {      
     this.iid=this.$route.params.id;
        // console.log(getDetail); 
     getDetail(this.iid).then(res=>{
        const data=res.result;
        this.topImages=data.itemInfo.topImages;
        this.goods=new Goods(data.columns,data.itemInfo,data.shopInfo.services)
        console.log(data);
        this.shop=new Shop(data.shopInfo);
        this.detailInfo=data.detailInfo;
        this.goodsParam=new GoodsParam(data.itemParams.info,data.itemParams.rule)
       if(data.rate.cRate!=0){
           this.commentInfo=data.rate.list[0]
       };
     
     });
     getRecommend().then(res=>{
        this.recommend= res.data.list;
    })
    },
}
</script>

<style scoped>
   #detail{  
    position: relative;
    z-index: 9;
    background-color: #fff;  
    height: 100vh; 
   }
   .header{
       background-color: #fff;
        position: relative;
        z-index: 9;
   }
   .content{
       height: calc(100% - 44px - 49px);  
       overflow: hidden;
   }
 
</style>