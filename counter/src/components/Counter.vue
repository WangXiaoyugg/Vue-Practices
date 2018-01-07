<template>
  <div class="counter">
     <button @click="add">+</button>
     <button @click="subtract">-</button>
    <p>child:{{num}}</p>
  </div>
</template>

<script>
  export default {
    name: 'counter',
    props:['num'],
    data () {
      return {
      }
    },
    methods:{
      add(){
//        this.num++;
        this.$emit('add');

      },
      subtract(){
//        this.num--;
        this.$emit('subtract');
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
