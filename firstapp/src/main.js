/* eslint-disable*/
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
// css
// import './assets/css/reset.css'
// import './assets/css/iconfont.css'
import "css/reset.css";
import "css/iconfont.css";
import "swiper/dist/css/swiper.css";
// js
import VueAwesomeSwiper from "vue-awesome-swiper";
import FastClick from "fastclick";
FastClick.attach(document.body);

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper /* { default global options } */);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
