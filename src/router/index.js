import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/admin/Home.vue'
import Welcome from '../views/admin/page/Welcome.vue'
import MemberList from '../views/admin/page/MemberList.vue'

import Test from '../test/Test.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children:[
      {path:"/",component:Welcome},
      {path:"member-list",component:MemberList},
    ]
  },
  {path:"/test",name: "test",component:Test},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
