import Vue from 'vue'
import Router from 'vue-router'
import Rank from 'components/rank/rank'
import Singer from 'components/singer/singer'
import Player from 'components/player/player'
import Recommend from 'components/recommend/recommend'
import SingerDetail from 'components/singer-detail/singer-detail'
 


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/recommend'
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path:'/singer',
      component:Singer,
      children: [
        {
          path: ':id',
          component:SingerDetail
        }
      ]
    },
    {
      path:'/rank',
      component:Rank
    },
    {
      path:'/player',
      component:Player
    },
    {
      path:'/recommend',
      component:Recommend
    },
  ]
})
