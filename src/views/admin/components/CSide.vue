<!--suppress VueUnrecognizedSlot -->
<script setup>
import {ref} from "vue";


import staticNavList from "/src/router/nav-list.js";

const initData = () => {
  let navList = staticNavList
  let k = 0;
  for (let nav of navList) {
    k++;
    nav.key = k.toString();
    if (nav.subMenu) {
      for (let sub of nav.subMenu) {
        k++;
        sub.key = k.toString();
        sub.icon = "xe6a7"
      }
    }
  }
  return navList;
};
const navList = ref(initData());


const collapse = ref(false);
const switchCollapse = () => collapse.value = !(collapse.value)
import {useRouter,useRoute} from 'vue-router'
const router = useRouter()
const go = menu => {
  if (menu.to)
    router.push(`/admin/${menu.to}`)
  // else if(menu.href)
  else
    return false
}
const changeSelectedKey=Select=> {
  console.log(Select)
  return Select;
}

const routes= useRoute()
// console.log(routes.path)
const queryRoute = query => {
  for (const e of navList.value)
    if (e.to && `/admin/${e.to}` === query) return e.key
  else if (e.subMenu)
    for (const c of e.subMenu)
      if (c.to && `/admin/${c.to}` === query) return c.key
  return -1
};
const selectedKey = ref(queryRoute(routes.path))

const openKeys = ref([])
defineExpose({collapse,switchCollapse})
</script>

<template>

  <div class="c-side">
    <lay-menu class="menu"
              v-model:selected-key="selectedKey"
              v-model:open-keys="openKeys"
              @changeSelectedKey="changeSelectedKey"
              :collapse="collapse"
              :tree="true">
      <div style="color:white">

      </div>
      <div class="logo" @click="router.push('/')" >
        <img src="/src/assets/vue.svg" alt="logo"/>
        <span>LayUI-Vue-Admin</span>
      </div>
      <template v-for="nav of navList" >
        <lay-sub-menu v-if="nav.subMenu" :id="nav.key">
          <template #icon>
            <i class="iconfont" v-html='"&#"+nav.icon'></i>
          </template>
          <template #title>
<!--            {{nav.key}}-->
            {{ nav.name }}
          </template>
          <lay-menu-item v-for="menu of nav.subMenu" :id="menu.key" @click="go(menu)">
<!--            {{menu.key}}-->
            {{ menu.name }}
          </lay-menu-item>
        </lay-sub-menu>
        <lay-menu-item :id="nav.key" @click="go(nav)" v-else>
          <template #title>{{ nav.name }}</template>
          <template #icon>
            <i class="iconfont" v-html='"&#"+nav.icon'></i>
          </template>
        </lay-menu-item>
      </template>
    </lay-menu>
  </div>
</template>
<style>
.c-side .logo {
  height: 50px;
  display: block;
  text-align: center;
  line-height: 50px;
  background-color: #393d49;
}

.c-side .logo img {
  width: 25px;
  height: 25px;
}

.c-side .logo span{
  font-size: 16px;
  margin-left: 15px;
  cursor: pointer;
  color: #fff;

}
.c-side .logo a {
}

.c-side .menu {
  height: 100%;
}
</style>