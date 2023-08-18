import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/home.vue"),
    },
    {
      path: "/card",
      component: () => import("../views/card/card.vue"),
    },
    {
      path: "/contact",
      component: () => import("../views/contact.vue"),
    },
  ],
});

export default router;
