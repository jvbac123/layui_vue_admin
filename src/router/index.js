import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '../views/admin/Home.vue'


const routes = [
    {path: "/", redirect: "/admin"},
    {
        path: '/admin',
        name: 'admin',
        component: Home,
        redirect: "/admin/welcome",
        children: [
            {path: "welcome", name: "Welcome", component: () => import("../views/admin/page/Welcome.vue")},
            {path: "welcome-1", name: "Welcome1", component: () => import("../views/admin/page/Welcome1.vue")},
            {path: "member-list", component: () => import("../views/admin/page/MemberList.vue")},
            {path: "form-template", component: () => import("../views/admin/page/FormTemplate.vue")},
        ]
    },
    // {path: "/test", name: "test", component: Test},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router
