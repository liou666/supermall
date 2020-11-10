<template>
  <div class="detail-comment-info">
      <div class="comment-top">
          <span class="left-info">用户评论</span>
          <span class="more-info">更多<i>></i></span>
      </div>
      <div class="user-info">
          <img :src='commentInfo.user.avatar' alt="">
          <span class="user-name">{{commentInfo.user.uname}}</span>
      </div>
      <div class="detail-info">
          <p class="content-info">
              {{commentInfo.content}}
          </p>
          <div class="other-info">
              <span>{{commentInfo.created | showData}}</span>
              {{commentInfo.style}}
          </div>
          <div class="image-info">
              <img :src="item" v-for="(item,index) in commentInfo.images" :key="index" >
          </div>
      </div>
  </div>
</template>

<script>
import {formatData} from 'common/utils.js'
export default {
    props:{
        commentInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    filters:{
        showData(value){
            const date=new Date(value*1000);
            return formatData(date)
        }
    }
}
</script>

<style scoped>
    .detail-comment-info{  
        border-top: 3px solid #e4e4e4;    
        margin-bottom: 10px;
    }
    .comment-top{
        padding:15px 20px;
        display: flex;
         border-bottom: 3px solid #f0eeee;
         font-size: 14px;
    }
    .left-info{
        margin-right: auto;
    }
    .more-info i{
        margin-left: 5px;
    }
    .user-info{
        padding:  20px;
    }
    .user-info img{
        width: 44px;
        vertical-align: middle;
        margin-right: 10px;
    }
    .detail-info{
        padding: 0 20px;
    }
    .other-info{
        margin:10px 0;
        color: #888
    }
    .other-info span{
        margin-right: 10px;
    }
    .image-info img{
        width: 80px;
        height: 80px;
    }
</style>