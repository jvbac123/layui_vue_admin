import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
import Welcome from '../views/Welcome.vue'
import MemberList from '../views/MemberList.vue'
import Test2 from '../views/MyCom.vue'


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
  {path:"/ms",name: "test",component:Test2},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
