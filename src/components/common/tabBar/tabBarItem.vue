<template>
      <section class="tabBarItem" @click="itemClick">
         <div v-if="!isActive"> <slot name="item-icon"></slot></div>
         <div v-else> <slot name="item-icon-active"></slot></div>
         <div :style="activeStyle"> <slot name="item-text"></slot></div>
      </section>
</template>

<script>

export default {
    name:"tabBarItem",
    props:{
        path:{
            type:String,
            require:true
        },
        activeColor:{
              type:String,
              default:"red"
        }
    },
   data() {
       return {
          
       }
   },
   computed: {
        isActive(){
            return this.$route.path.includes(this.path)
        },
        activeStyle(){
            return this.isActive?{color:this.activeColor}:{}
        }
   },
    methods: {
        itemClick(){ 
            if( this.$route.path!=this.path) this.$router.replace(this.path)
        }
    },
}
</script>

<style>

 .tabBarItem{
     flex: 1;
     border-right:1px solid #ccc ;
     font-size: 14px;
   }
   .tabBarItem:last-child{
     border: 0;
   }
    .tabBarItem img{
        width: 22px;
        height: 22px;
        vertical-align: middle;
        margin: 3px 0 2px 0;
    }
</style>