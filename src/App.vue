<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
    <player></player>  <!--播放器不受路由切换的限制，所以放在这   不是路由相关的，是应用相关的组件-->
  </div>
</template>

<script type="text/ecmascript-6">
    import MHeader from 'components/m-header/m-header'
    import tab from 'components/tab/tab'
    import player from 'components/player/player'


    export default {
      components:{
        MHeader,
        tab,
        player
      }
    }
</script>

<style  scoped lang="stylus" rel="stylesheet/stylus">


</style>
