<template>
      <div id="toast" v-show="isShow">{{message}}</div>
</template>

<script>
export default {
    props:{
        isShow:{
            type:Boolean,
            default:false
        },
        message:{
             type:String,
            default:''
        }
    },
    methods: {
        show(message,time=2500){
            this.message=message;
            this.isShow=true;
            setTimeout(()=>{
                this.isShow=false;
            },time)
        }
    },
}
</script>

<style scoped>
    #toast{
        width: 220px;
        height: 50px;
        background-color: rgba(0,0,0,0.7);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        border-radius: 10px;
        z-index: 999;
    }
</style>