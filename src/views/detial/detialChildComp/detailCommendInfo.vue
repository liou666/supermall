<template>
    <div class="detail-commend-info">
        <div class="commend-title">
            <span class="title">用户评论</span>
            <span class="more">更多</span>
        </div>
        <div v-if="commendInfo[0]" class="user-info">
           <img :src="commendInfo[0].user.avatar" alt="">
            <span class="name">{{commendInfo[0].user.uname}}</span>
        </div>
        <div v-if="commendInfo[0]" class="commend-others">
            <div class="content-info">{{commendInfo[0].content}}</div>
            <div class="detail-info">
                <span class="create-time">{{commendInfo[0].created|showDate}}</span>
                <span>{{commendInfo[0].style}}</span>
            </div>
            <div class="image-info" v-if=" commendInfo[0].images">
                <img v-for="(item,index) in commendInfo[0].images" :key="index" :src="item" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import {formatDate} from '@/common/utils';
export default {
    props:{
        commendInfo:{
            type:Array,
            default(){
                return []
            }
        }
    },
    filters:{
        showDate(date){
            const value=new Date(date*1000)
           return formatDate(value,'yyyy-MM-dd')
        }
    }
}
</script>

<style scoped>
    .detail-commend-info{
        padding: 0 10px;
    }
    .commend-title{
        display: flex;
        border-bottom: 2px solid #f4f4f4;
        height: 40px;
        align-items: center;
        margin-bottom: 10px;
    }
    .more{
        margin-left: auto;
    }
    .create-time{
        margin-right:8px;
    }
    .user-info{
        margin: 10px 0;
    }
    .user-info img{
        width: 80px;
        vertical-align: middle;
        margin-right: 10px;
    }
    .image-info img{
        width: 120px;
        margin-right: 5px;
    }
    .detail-info{
        margin: 8px 0;
    }
</style>