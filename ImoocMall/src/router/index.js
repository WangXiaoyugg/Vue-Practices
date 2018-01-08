import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GoodList from '@/components/GoodList';

Vue.use(Router);

/*
* mode 'history' url
* mode 'hash'  #
* */
export default new Router({
  mode:'hash',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/good/:goodId/user/:name',
      name: 'GoodList',
      component: GoodList
    }
  ]
})
