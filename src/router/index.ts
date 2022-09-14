import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "../layout/Layout.vue";
const routes = [
  {
    path: "/admin",
    component: Layout,
    children: [
      {
        path: "",
        component: () => import("../pages/HomePage.vue"),
        name: "home",
        meta: { title: "home" },
      },
      {
        path: "user",
        component: () => import("../pages/AboutPage.vue"),
        name: "user",
        meta: { title: "user" },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
