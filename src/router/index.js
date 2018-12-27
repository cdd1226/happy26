import Vue from 'vue'
import Router from 'vue-router'
import recommend from '@/components/recommend'
import singer from '@/components/singer'
import ranking from '@/components/ranking'
import search from '@/components/search'
import friend from '@/components/friend'
import rank from '@/components/rank'
import ranks from '@/components/ranks'
 
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: '/recommend'
    }, {
        path: '/recommend',
        name: 'recommend',
        component: recommend,
        children: [
            {
            path: "/",
            redirect: '/rank'
            },
            {
            path: "/rank",
            component: rank
        },{
            path: "/ranks",
            component: ranks
        }]
    }, {
        path: '/singer',
        name: 'singer',
        component: singer
    }, {
        path: '/ranking',
        name: 'ranking',
        component: ranking
    }, {
        path: '/search',
        name: 'search',
        component: search
    },{
      path: '/friend',
      name: 'friend',
      component: friend
  } ]
})