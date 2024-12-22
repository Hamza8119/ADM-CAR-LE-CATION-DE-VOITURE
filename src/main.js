
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // تأكد من استيراد router
import './style.css'; // تأكد من المسار الصحيح

createApp(App)
  .use(router) // تثبيت الـ router
  .mount('#app');
