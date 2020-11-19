<template>
    <div class="profile-serive-info">
        <div class="base-serive">
            <div class="my-message">
                <i class="fa fa-envelope-o"></i>               
               
                <p >我的消息</p>
             </div>    
            <div class="points-mall">
                <i class="fa fa-shopping-bag"></i>
               
                <p >积分商城</p>
            </div>
            <div class="vipCart">
                <i class="fa fa-id-card"></i>
                
                <p >会员卡</p>
            </div>
        </div>
        <div class="car-serive">
             <div class="my-car">
                 <i class="fa fa-shopping-cart"></i>               
                
                <p>我的购物车</p>
             </div> 
              <div class="downloadApp">
                  <i class="fa fa-download"></i>               
                
                <p>下载购物APP</p>
             </div> 
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .base-serive{
        padding: 10px;      
        border-bottom: 10px solid #f4f4f4;
    }
    
   .my-car,.downloadApp, .my-message,.points-mall,.vipCart{
        display: flex;
        height: 50px;
        align-items: center;
        border-bottom: 2px solid #f6f6f6;
    }
  .my-car i,.downloadApp i, .my-message i,.points-mall i,.vipCart i{
        width: 24px;
        vertical-align: middle;
        margin-right: 10px;
        color: var(--color-tint);
     }
    .car-serive{
         padding: 10px;
    }
    .vipCart,.downloadApp{
        border: 0;
    }
    i{
        font-size: 20px;
    }
</style>