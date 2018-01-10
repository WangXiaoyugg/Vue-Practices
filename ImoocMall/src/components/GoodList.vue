<template>
  <div class="goodList">
    <h1>商品详情列表</h1>
    <router-link to="/good/title">商品标题</router-link>
    <router-link to="/good/img">商品图片</router-link>
    <div>
      <router-view></router-view>
    </div>
    <router-link :to="{name:'cart',params:{cartId:123456}}">购物车链接</router-link>
    <button @click="jump">跳转到购物车页面</button>
  </div>
</template>

<script>
  export default {
    name: 'GoodList',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods:{
      jump(){
          import(`../util/index.js`);
          this.$router.push({path:'/cart?goodId=123456'})

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

</style>
