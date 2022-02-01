import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/trips/proposals',
    component: () => import ('../views/TripProposalView.vue')
  },
  {
    path: '/trips/saved',
    component: () => import ('../views/TripSavedView.vue')
  },
  {
    path: '/trip/:id',
    component: () => import ('../views/TripDetailView.vue')
  },
  {
    path: '/',
    component: () => import ('../views/HomeView.vue')
  },
  {
    path: '/test',
    component: () => import ('../views/Test.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//CONTEXT + PLACE

export default router




