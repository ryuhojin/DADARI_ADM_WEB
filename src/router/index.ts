import { createRouter, createWebHashHistory } from "vue-router"
import Layout from '../layout/Layout.vue'
const routes = [
    {
        path: '/adm',
        component: Layout,
        children: [
            {
                path: "home",
                component: () => import('../pages/HomePage.vue'),
                name: "home",
                meta: { title: "home" }
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;