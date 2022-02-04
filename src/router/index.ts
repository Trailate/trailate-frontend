import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/trips/proposals",
    component: () => import("../views/TripProposalView.vue"),
  },
  {
    path: "/trips/saved",
    component: () => import("../views/TripSavedView.vue"),
  },
  {
    path: '/trip/1', // change back to :id
    component: () => import ('../views/TripDetailView.vue')
  },
  {
    path: "/",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/register",
    component: () => import("../views/RegisterView.vue"),
  },
  {
    path: "/test",
    component: () => import("../views/Test.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

//CONTEXT + PLACE

export default router;
