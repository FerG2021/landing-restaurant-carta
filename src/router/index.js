import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/home.vue"),
    },
    {
      path: "/about",
      component: () => import("../views/about.vue"),
    },
    {
      path: "/projects",
      component: () => import("../views/projects.vue"),
    },
    {
      path: "/contact",
      component: () => import("../views/contact.vue"),
    },
  ],
});

export default router;
