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
      component: () => import("../views/card.vue"),
    },
    {
      path: "/contact",
      component: () => import("../views/contact.vue"),
    },
    {
      path: "/about",
      component: () => import("../views/about.vue"),
    },
    {
      path: "/projects",
      component: () => import("../views/projects.vue"),
    },
  ],
});

export default router;
