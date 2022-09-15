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
        name: "홈",
      },
      {
        path: "user",
        component: () => import("../pages/UserPage.vue"),
        name: "유저 관리",
      },
      {
        path: "category",
        component: () => import("../pages/CategoryPage.vue"),
        name: "카테고리 관리",
      },
      {
        path: "hashtag",
        component: () => import("../pages/HashTagPage.vue"),
        name: "해시태그 관리",
      },
      {
        path: "service",
        component: () => import("../pages/ServicePage.vue"),
        name: "서비스 관리",
      },
      {
        path: "template",
        component: () => import("../pages/TemplatePage.vue"),
        name: "템플릿 관리",
      }
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
