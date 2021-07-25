// Vuex 때 처럼 create* 함수를 제공한다.
import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('@/views/Main'),
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});