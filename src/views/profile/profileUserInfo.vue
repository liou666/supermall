<template>
    <div class="profile-user-info">
        <div class="base-info">
            <div class="user-logo">
            <img src="~assets/img/profile/avatar.svg" alt="">
        </div>
        <div class="main-info">
            <div class="user-entry">
                <span class="login">登录</span>/
                <span class="register">注册</span>
            </div>
            <div class="phone-info">
                <i class="fa fa-phone phone-icon"></i>
                
                <span class="phone-number">暂无绑定手机号</span>
            </div>
        </div>
        <div class="icon-right">
            >
        </div>
        </div>
        <div class="other-info">
            <div class="balance">
                <span class="text">0.00</span>元
                <p>我的余额</p>
            </div>
            <div class="discount">
                <span class="text">0</span>个
                <p>我的优惠</p>
            </div>
            <div class="integral">
                <span class="text">0</span>分
                <p>我的积分</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .base-info{
        display: flex;       
        align-items: center;
        height: 100px;
        background-color: var(--color-tint);
        padding: 10px;
        color: #fff;
        /* border-top: 2px solid #fff; */
    }
    .user-logo{
        width: 50px;
        height: 50px;
       
    }
    .phone-icon{
        margin-right: 5px;
        vertical-align: middle;
    }
   .user-logo img{
       width:100%; 
       /* vertical-align: middle;   */
   }
    .main-info{
        margin: 0 auto 0 14px;
    }
    .phone-info{
        margin-top: 5px ;
        font-size: 14px;
    }
    .icon-right{
        margin-right: 10px;
        font-size: 20px;
    }
    .other-info{
        display: flex;
        align-items: center;
        height: 80px;
        border-bottom: 10px solid #f4f4f4;
    }
    .text{
        color: var(--color-high-text);
        font-size: 20px;
        font-weight: 700;
    }
    .balance,.discount,.integral{
        flex: 1;
        text-align: center;
    }
</style>