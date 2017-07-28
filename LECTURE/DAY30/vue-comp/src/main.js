import Vue from 'vue';
import App from './App';

// 글로벌 Vue 필터 정의
Vue.filter('uppercase', v => v.toString().toUpperCase());
Vue.filter('lowercase', v => v.toString().toLowerCase());

new Vue({
  el: '#app',
  render: h => h(App)
});