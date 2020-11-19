<template>
  <div class="car-item">
      <section v-for="(item,index) in product" :key="index">
      <div class="icon" :class="{iconSelect:item.checked}" @click="itemClick(index)" >
        <img  src="~assets/img/cart/tick.svg" alt="">
      </div>
      <div class="img-info">
        <img  :src="item.imgURL" alt="">
      </div>
      <div class="text-info">
        <div class="title-info">{{item.title}}</div>
        <div class="desc-info">{{item.desc}}</div>
        <div class="other-info">
          <span class="price">￥{{(item.newPrice*item.count).toFixed(2)}}</span>
          <span class="count">x{{item.count}}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
    props:{
        product:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data() {
        return {
             isSelected:false,
        }
    },
    methods: {
        itemClick(index){
            this.product[index].checked=!this.product[index].checked
        }
    },
}
</script>

<style scoped>
section{
  display: flex;
  padding: 10px 5px;
  align-items: center;
  width: 100%;
  border-bottom: 4px solid #f4f4f4;
}
.icon{
  width: 20px;
  height: 20px;
  border-radius: 50%;
  text-align: center;
  background-color:#fff;
  margin-right: 5px;
  border: 1px solid #ddd;
  box-sizing: border-box;
}
section .iconSelect{
  
    background-color: var(--color-tint);
}
.icon img{
  vertical-align: middle;
}
  .img-info{
    width: 22%;
    margin-right: 10px;
  }
  .img-info img{
    width: 100%;
    border-radius: 8px;
  }
  .text-info{
    display: flex;
    flex-direction: column;
     width: 70%;
  }
  .title-info,.desc-info{  
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .title-info{
    font-weight: 700;
  }
  .desc-info{
    margin: 20px 0 30px 0;
  }
  .other-info{
    display: flex;
      font-weight: 700;
  }
  .price{
    color: var(--color-high-text);
  
    font-size: 20px;
    margin-right: auto;
  }
</style>