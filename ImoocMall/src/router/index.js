import Vue from 'vue'
import Router from 'vue-router'
import GoodList from '@/components/GoodList';
import Title from '@/components/Title';
import GoodImage from '@/components/Image';
import Cart from '@/components/Cart';

Vue.use(Router);

/*
* mode 'history' url
* mode 'hash'  #
* */
export default new Router({
  mode:'hash',
  routes: [
    {
      path:'/',
      components:{
        default:GoodList,
        title:Title,
        goodImg:GoodImage
      }
    },
    {
      path: '/good/',
      name: 'GoodList',
      component: GoodList,
      children:[
        {
          path:'title',
          name:'title',
          component:Title,
        },
        {
          path:'img',
          name:'img',
          component:GoodImage,
        }
      ]
    },
    {
      path:'/cart/:cartId',
      name:'cart',
      component:Cart,
    }
  ]
})
