<template>
  <div class="home-recommend">
      <ul>
          <li v-for="item in recommend" :key="item.id" >
              <a :href="item.link">
                  <img :src="item.image" alt="">
                  <div>{{item.title}}</div>
              </a>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    props:{
    recommend:{
        type:Array,
        default(){
            return []
        }
    },
    methods: {
       
    },
}
    }
</script>

<style >
    .home-recommend  ul{
        display: flex;
    }
     .home-recommend  ul li{
         flex: 1;
         list-style: none;
         text-align: center;
         padding: 8px 0 30px 0;
     }
   .home-recommend   a img{
         width: 70px;
         height:70px;
     }
     .home-recommend {
         border-bottom: 8px solid #e4e4e4;
     }
</style>