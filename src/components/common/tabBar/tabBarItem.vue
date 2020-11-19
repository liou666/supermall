<template>
    <div class="tab-bar-item" @click="itemClick">        
        <div class="icon" v-show="!isActive">
                    <slot name="img"></slot>
        </div>
        <div class="icon_active" v-show="isActive">
                    <slot name="img_active"></slot>
        </div>        
        <div class="text" :style='activeStyle'> 
               <slot name="text"></slot>  
        </div>
    </div>
</template>

<script>
export default {
    props:{
        color:{
            type:String,
            default:'hotpink'
        },
        path:''
    },
    computed: {
        activeStyle(){
            return {color:this.isActive?this.color:''}
        },
        isActive(){
            return this.$route.path==this.path
        }
    },
    methods: {
        itemClick(){       
            if(this.$route.path!==this.path){
                this.$router.push(this.path)
            }
        }
    },
}
</script>

<style scoped>
    .tab-bar-item{
        flex: 1; 
        text-align: center;
    }
    .tab-bar-item img{
        width: 24px;
        margin: 2px 0 2px;
        vertical-align: middle;
    }
    .text{
        font-size: 14px;
    }
</style>