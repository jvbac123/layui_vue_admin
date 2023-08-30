<!--suppress VueUnrecognizedSlot -->
<script setup>
import {computed, ref, watch} from "vue";

const icon = {
  more_unfold: "xe6a6;",//展开的
  more: "xe697;",//
}
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


import {useRouter} from 'vue-router'

const router = useRouter()
const go = obj => {
  if (obj.to) {
    router.push(obj.to)
  }
}
const collapseValue = ref(false);
const collapse = computed({
  get: () => collapseValue.value,
  set(value) {
    collapseValue.value = value
  }
});
const switchCollapse = () => collapse.value = !(collapse.value)
defineExpose({
  collapse,
  go,
  switchCollapse
})

const openKeys2 = ref(["2"])
const selectedKey = ref(null)
const changeSelectedKey = (val) => {
  selectedKey.value = val;
}
const changeOpenKeys = (val) => {
  console.log(val)
  openKeys2.value = val;
}
</script>
<template>
  <div class="c-side">
    <lay-menu class="menu"
              :selected-key="selectedKey" @change-selected-Key="changeSelectedKey"
              v-model:openKeys="openKeys2" @change-open-keys="changeOpenKeys"
              :collapse="collapse"
              :tree="true"
    >
      <div class="logo" @click="router.push('/')">
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
        <lay-menu-item  v-else @click="go(nav)">
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