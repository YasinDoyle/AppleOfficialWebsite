import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("./App.vue"),
  },
  {
    path: "/store",
    //component: () => import(""),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
