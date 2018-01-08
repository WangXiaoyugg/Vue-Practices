<template>
  <div class="goodList">
    <h1>商品详情列表</h1>
    <router-link to="/good/title">商品标题</router-link>
    <router-link to="/good/img">商品图片</router-link>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GoodList',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
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
