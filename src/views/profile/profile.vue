<template>
  <div class="profile">
      <nav-bar>
        <div slot="center">我的档案</div>
      </nav-bar>
     <scroll class="wrapper">
        <profile-user-info/>
        <profile-serive-info/>
     </scroll>
  </div>
</template>

<script>
import navBar from 'common/navBar/navBar.vue'
import ProfileUserInfo from './profileUserInfo.vue'
import ProfileSeriveInfo from './profileSeriveInfo.vue'
import Scroll from 'common/scroll/scroll.vue'
export default {
  components: {
     navBar,
    ProfileUserInfo,
    ProfileSeriveInfo,
    Scroll,
  },

}
</script>

<style scoped>
  .profile{
    height: 100vh;
  }
  .wrapper{
    height: calc(100% - 44px - 49px);
    overflow: hidden;
  }
</style>