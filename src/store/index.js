import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue'; // تأكد من استيراد Login.vue

const routes = [
  {
    path: '/',
    redirect: '/login' // إعادة التوجيه إلى صفحة تسجيل الدخول
  },
  {
    path: '/login',
    component: Login
  }
  // يمكنك إضافة المزيد من المسارات هنا إذا كان لديك
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

