<template>
  <div class="Image">
    <h1>购物车页面</h1>
    <p>{{$route.params.cartId}}</p>
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
