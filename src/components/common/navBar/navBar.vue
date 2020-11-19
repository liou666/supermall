<template>
    <div class="nav-bar">
        <div class="left" @click="backHome"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
    export default {
        methods: {
            backHome(){
                this.$router.back()
            }
        },
    }
</script>

<style scoped>
    .nav-bar{
        display: flex;
        height: 44px;
        background-color: var(--color-tint);
        color: #fff;
        box-shadow: 0 2px 2px rgba(0,0,0,0.05);
        align-items: center;
    }
    .left,.right{
        width: 60px;
       
         text-align: center;
       
    }
    .center{
        flex: 1;
        text-align: center;
      
    }
</style>