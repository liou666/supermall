<template>
  <div class="sub-category">
      <div v-for="(item,index) in subCategory.list" :key="index" class="sub-item-info">
          <a :href="item.link">
              <img @load="imgLoad" :src="item.image" alt="">
              <p class="text">{{item.title}}</p>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        subCategory:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    methods: {
        imgLoad(){
            this.$emit('imageLoad')
        }
    },
}
</script>

<style scoped>
.sub-category{
    display: flex;
    flex-wrap: wrap;   
   
}
    .sub-item-info a{
        display: flex;
        flex-direction: column;
        width: 60px;
        margin: 15px;
        justify-content: center;
        align-items: center;
    }
    img{
        width: 100%;
        margin-bottom: 5px;
    }
    .text{
        font-size: 14px;
    }
</style>