<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view class="main"/>
    <router-view name='title'class="left">标题视图组件</router-view>
    <router-view name='goodImg' class="right">图片视图组件</router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.left,.right{
  float: left;
  width: 49%;
  border:1px solid #e2e2e2;
}
</style>
