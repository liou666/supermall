<template>
        <ul class="tab-control">
            <li v-for="(item,index) in title" 
            :class="{active:index==currentIndex}"
            @click="itemClick(index)"
            :key="index">{{item}}</li>
        </ul>
</template>

<script>
export default {
    props:{
        title:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data() {
        return {
            currentIndex:0
        }
    },
    methods: {
        itemClick(index){
            this.currentIndex=index;
            this.$emit('tabclick',index)
        }
    },
}
</script>

<style>
    .tab-control{
        display: flex;
        text-align: center;
        position: sticky;
        top:43px;
        background-color: #fff;
    }
    .tab-control li{
        flex: 1;
        height: 40px;
        line-height: 40px;
        
    }
    .active{
        border-bottom: 2px solid var(--color-tint);
        color:var(--color-tint) ;
    }
</style>