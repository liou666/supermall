<template>
  <div class="recommend">
      <div class="recommend-item" v-for="(item,index) in recommend" :key="index">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <p class="title">{{item.title}}</p>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    props:{
         recommend:{
            type:Array,   
        },
    }
}
</script>

<style scoped>
    .recommend{
        margin-top: 8px;
        display: flex;
        font-size: 14px;
        text-align: center;
        padding-bottom: 30px;
        border-bottom: 5px solid #eee;
        /* align-items: center; */
    }
    .recommend-item{
        flex: 1;   
    }
    .recommend-item img{
        width: 80px;
        vertical-align: middle;
        margin-bottom: 8px;
    }
    
</style>