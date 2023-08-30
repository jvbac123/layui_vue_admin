<script setup>
import {computed, ref, watch} from "vue";

const icon={
  more_unfold:"xe6a6;",//展开的
  more:"xe697;",//
}
const genData=()=>{
  let navList = [{
    name: "会员管理", icon: "xe6b8", subMenu: [
      {name: "会员列表", to: "member-list"},
      {name: "会员列表", to: "member-del.html"},
      {
        name: "会员管理", icon: "xe70b", subMenu: [
          {name: "会员列表", to: "member-list.html"},
          {name: "会员删除", to: "member-del.html"},
          {name: "等级管理", to: "member-del.html"},
        ]
      },
    ]
  },
    {name: "订单管理", icon: "xe723", subMenu: [{name: "订单列表", to: "order-list.html"}]},
    {name: "分类管理", icon: "xe723", subMenu: [{name: "多级分类", to: "cate.html"}]},
    {name: "城市联动", icon: "xe723", subMenu: [{name: "三级地区联动", to: "city.html"}]},
    {
      name: "管理员管理", icon: "xe726", subMenu: [
        {name: "管理员列表", to: "admin-list.html"},
        {name: "角色管理", to: "admin-role.html"},
        {name: "权限分类", to: "admin-cate.html"},
        {name: "权限管理", to: "admin-rule.html"}
      ]
    },
    {
      name: "系统统计", icon: "xe6ce", subMenu: [
        {name: "拆线图", to: "echarts1.html"},
        {name: "柱状图", to: "echarts2.html"},
        {name: "地图", to: "echarts3.html"},
        {name: "饼图", to: "echarts4.html"},
        {name: "雷达图", to: "echarts5.html"},
        {name: "k线图", to: "echarts6.html"},
        {name: "热力图", to: "echarts7.html"},
        {name: "仪表图", to: "echarts8.html"},
      ]
    },
    {
      name: "图标字体", icon: "xe6b4", subMenu: [
        {name: "图标对应字体", to: "unicode.html"}
      ]
    },
  ];
  let k=0;
  for (let nav of navList){
    k++;
    nav.key=k.toString();
    for (let sub of nav.subMenu) {
      k++;
      sub.key=k.toString();
      sub.icon="xe6a7"
    }
  }
  return navList;
}
const navList=ref(genData());

const openKeys2 = ref([null])
const selectedKey = ref(null)
const changeSelectedKey = val => selectedKey.value = val;
const changeOpenKeys = val => openKeys2.value = val

import { useRouter } from 'vue-router'
import {LayMenu} from "@layui/layui-vue";
const router = useRouter()

const go=obj=>{
  if (obj.to) {
    router.push(obj.to)
  }
}
const collapseValue=ref(false);
const collapse=computed({
  get: () => collapseValue.value,
  set(value) {
    collapseValue.value = value
  }
});


const switchCollapse= () => collapse.value = !(collapse.value)
defineExpose({
  collapse,
  go,
  switchCollapse
})
</script>
<template>
  <div class="c-side">

    <lay-menu class="menu" :selected-key="selectedKey"
              @change-selected-Key="changeSelectedKey"
              @change-open-keys="changeOpenKeys"
              :collapse="collapse"
              v-model:openKeys="openKeys2" :tree="true">
      <div class="logo">
        <img src="/src/assets/vue.svg"  alt="logo"/>
        <span>
          <router-link to="/">LayUI-Vue-Admin</router-link>
<!--          <a href="#">LayUI-Vue-Admin</a>-->
        </span>
      </div>
      <lay-sub-menu v-for="nav of navList" :id="nav.key" >
        <template #icon>
          <i class="iconfont" v-html='"&#"+nav.icon'></i>
        </template>
        <template #title>
          {{nav.name}}
        </template>
        <lay-menu-item v-for="menu of nav.subMenu" :id="menu.key" @click="go(menu)">
          {{menu.name}}
        </lay-menu-item>
      </lay-sub-menu>
    </lay-menu>
  </div>
</template>
<style>
.c-side .logo {
  height: 50px;
  display:block;
  text-align: center;
  line-height: 50px;
  background-color:#393d49;
}
.c-side .logo img{
  width: 25px;
  height: 25px;
}
.c-side .logo span{
  font-size: 16px;
  margin-left:15px;
  overflow: hidden;
}
.c-side .logo a{
  color: #fff;
}
.c-side .menu{
  height: 100%;
}
</style>