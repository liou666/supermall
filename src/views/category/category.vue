<template>
  <div id="category">
     <category-nav/>
    <div class="category-content">
       <slide-bar @slideBarClick="slideBarClick" :keyWords="category"/>
      <scroll ref="scroll" class="content-right wrapper">
        <sub-category @imageLoad="imageLoad" :subCategory="showSubCategory" />
        <detail-category /> 
      </scroll>
    </div>
  </div>
</template>

<script>
import categoryNav from './categoryChildComp/categoryNav.vue'
import SlideBar from 'common/slideBar/slideBar';

import {getCategory,getSubcategory,getCategoryDetail} from 'network/category'
import Scroll from 'common/scroll/scroll.vue';
import SubCategory from './categoryChildComp/SubCategory';
import DetailCategory from './categoryChildComp/detailCategory.vue';
export default {
  components: { 
    categoryNav,
    SlideBar,
    Scroll,
    SubCategory,
    DetailCategory,
  },
  data() {
    return {
      category:[],
      categoryData:[],
      currentIndex:-1,
      currentType:'pop'
    }
  },
  created() {
   this._getCategory();
  },
  computed: {
    showSubCategory(){   
      //  
      if(this.currentIndex===-1)return {};        
        return this.categoryData[this.currentIndex].subCategory
    },
    showDetailCategory(){
        if(this.currentIndex===-1)return {};
        return this.categoryData[this.currentIndex].detailCategory[this.currentType]      
},
  },
  methods: {
    imageLoad(){
      //性能考虑，后续做防抖处理
      this.$refs.scroll.refresh()
    },
    _getCategory(){
      getCategory().then(res=>{
       this.category= res.data.data.category.list;
       //初始化每一类商品的数据；
       this.category.forEach((item,index)=>{
         this.categoryData[index]={
           subCategory:{},
           detailCategory:{
                'pop': [],
                'new': [],
                'sell': []
           }
         }
       });
       //拿到第一组的数据;
       this._getSubcategory(0)
      })
    },
    _getSubcategory(index){
      this.currentIndex = index;        
      const maitKey=this.category[index].maitKey
      getSubcategory(maitKey).then(res=>{
        this.categoryData[index].subCategory=res.data.data
        //这里注意要将categoryData重新赋值
        this.categoryData = [...this.categoryData]
        // console.log(res.data.data);
        this._getCategoryDetail('pop');
        this._getCategoryDetail('new');
        this._getCategoryDetail('sell');
      })
    },
    _getCategoryDetail(type){
      const miniWallkey = this.category[this.currentIndex].miniWallkey
      getCategoryDetail(miniWallkey,type).then(res=>{
          this.categoryData[this.currentIndex].detailCategory[type] = res.data
          this.categoryData=[...this.categoryData] 
      })
    },
    slideBarClick(index){     
      this._getSubcategory(index)
    }
  },
}
</script>

<style scoped>
#category{
  height: 100vh;
}
  .category-content{
    height: calc(100% - 44px - 49px);
    display: flex;
  }
  .content-right{
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    margin-left:10px;
  }
  .wrapper{
    overflow: hidden;
    height: 100%;
  }
</style>