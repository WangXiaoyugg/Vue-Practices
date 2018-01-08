<template>
  <div class="Image">
    <h1>购物车页面</h1>
    <p>商品ID:{{$route.query.goodId}}</p>
  </div>
</template>

<script>
  export default {
    name: 'Cart',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>
