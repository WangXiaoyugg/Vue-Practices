<template>
  <div class="goodList">
    <h1>商品详情列表</h1>
    <p>商品的ID :{{$route.params.goodId}}</p>
    <p>商品的购买人:{{$route.params.name}}</p>
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
