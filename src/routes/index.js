// Vuex 때 처럼 create* 함수를 제공한다.
import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Lime',
    component: () => import('@/views/Lime'),
  },
  {
    path: '/edit',
    name: 'Edit',
    component: () => import('@/views/Edit'),
  },
  {
    path: '/devume',
    name: 'Devume',
    component: () => import('@/views/Lime'),
  },
  {
    path: '/resume',
    name: 'Resume',
    component: () => import('@/views/Main'),
  }  
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});