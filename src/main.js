
  import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // تأكد من استيراد router
import './style.css'; // تأكد من المسار الصحيح
createApp(App).use(router).mount('#app');
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');