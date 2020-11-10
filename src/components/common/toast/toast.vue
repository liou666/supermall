<template>
  <div class="toast" v-show="isShow">
      {{message}}
  </div>
</template>

<script>
export default {
    name:"toast",
    props:{
        // message:{
        //     type:String,
        //     default(){
        //         return  ''
        //     }
        // },
        // show:{
        //     type:Boolean,
        //     default(){
        //         return false
        //     }
        // }
    },
    data() {
        return {
           message:'',
           isShow:false
        }
    },
    methods: {
        show(message,duration=1000){
            this.message=message;
            this.isShow=true;
            console.log(1);
            setTimeout(()=>{
                this.isShow=false;
            },duration)
        }
    },
}
</script>

<style scoped>
    .toast{
        width: 150px;
        height:28px;
        text-align: center;
        line-height: 28px;
        background-color: rgba(0,0,0,0.8);
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        color: #fff;
        border-radius: 10px;
      
        z-index: 99999;
    }
</style>