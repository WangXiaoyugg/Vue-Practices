// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router';

// import {subtract,add} from "./util/index";
// import * as util from './util';
// console.log(`subtract ${subtract(10,11)}`);
// console.log(`add ${add(8,10)}`);
// console.log(`subtract ${util.subtract(10,11)}`);
// console.log(`add ${util.add(8,10)}`);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
