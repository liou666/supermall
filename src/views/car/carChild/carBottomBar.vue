<template>
  <div class="carBottomBar">
      <div class="selectAll">
          <div class="cart-tick" @click="isChange" :class="{active:isActive}">                   
            <img src="~assets/images/cart/tick.svg" alt="">
          </div> 
          <span >全选</span>   
      </div>  
      <div class="priceCount">
          <span>合计: </span><span>￥{{totalPrice}}</span>
      </div>
      <div class="sellectMent"  @click="toSellectMent">
         <span>去结算({{totalCount}})</span>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            isActive:false,
           
        }
    },
    computed: {
        totalPrice(){
            return this.$store.state.carList.reduce((total,item)=>{
              return  item.checked ? (total*1+item.price.slice(1)*item.count).toFixed(2) : (total*1).toFixed(2)
            },0)
        },
        totalCount(){
             return this.$store.state.carList.filter(item=> item.checked).length
        },

    },
    methods: {
        isChange(){
            if(!this.isActive){
                this.$store.state.carList.forEach(item=>item.checked=true);
                
            }else{
                this.$store.state.carList.forEach(item=>item.checked=false)
            }
            this.isActive=!this.isActive
        },
        toSellectMent(){
            this.$store.state.carList.every(item=>item.checked)
        }
    },
}
</script>

<style scoped>
    .carBottomBar{
        padding-left: 5px;
        height: 32px;
      background-color: #f5f5f5;
       
        font-size: 14px;
        display: flex;
        align-items: center;
    }
    .cart-tick{
        width: 16px;
        height: 16px;
     border: 1px solid #ddd;
        border-radius: 50%;
        margin-right: 5px;
        box-sizing: border-box;
        display: flex;
        align-items: center;  
    }
    .active{
        background-color: orangered;
    }
    .selectAll{
        display: flex;
        margin-right: 20px;
    }
    .sellectMent{
        height: 100%;
        width: 100px;
        background-color: orangered;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: auto;
        color: #fff;
    }
</style>