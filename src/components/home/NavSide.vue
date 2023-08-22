<template>
  <lay-menu class="menu" :selected-key="selectedKey"
            @change-selected-Key="changeSelectedKey"
            @change-open-keys="changeOpenKeys"
            v-model:openKeys="openKeys2" :tree="true">
    <lay-sub-menu v-for="nav of navList" :id="nav.key">
      <template #title>
        <i class="iconfont" v-html='"&#"+nav.icon'></i>
        {{nav.name}}
      </template>
      <lay-menu-item v-for="menu of nav.subMenu" :id="menu.key">
        <a @click="go(menu)">
          <i class="iconfont" v-html='"&#"+menu.icon'></i>{{menu.name}}
        </a>
      </lay-menu-item>
    </lay-sub-menu>
  </lay-menu>


<!--  <lay-menu :tree="true" v-model:openKeys="openKeys" v-model:selectedKey="selectedKey">
    <lay-menu-item v-for="nav of navList" :id="nav.key" title="测试" icon="icon">
      {{nav.name}}
      <lay-sub-menu  v-for="menu of nav.subMenu" :id="menu.key" :title="menu.name">
        <i class="iconfont" v-html='"&#"+menu.icon+";"'></i>
        {{menu.name}}
      </lay-sub-menu>
    </lay-menu-item>

    &lt;!&ndash;      <a @click="open(nav)">

            <cite>{{nav.name}}</cite>
            <i class="iconfont nav_right" v-html="nav.show ? icon.more_unfold:icon.more"></i>
          </a>
          <ul class="sub-menu" v-show="nav.show">

          </ul>&ndash;&gt;
  </lay-menu>-->
</template>
<script setup>
import {ref} from "vue";

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




import { useRouter,useRoute } from 'vue-router'
const router = useRouter()

const go=obj=>{
  if (obj.to) {
    router.push(obj.to)
  }
}


/*
    //左侧菜单效果
    // $('#content').bind("click",function(event){

    $('.left-nav #nav li').click(function (event) {

        if($(this).children('.sub-menu').length){
            if($(this).hasClass('open')){
                $(this).removeClass('open');
                $(this).find('.nav_right').html('&#xe697;');
                $(this).children('.sub-menu').stop().slideUp();
                $(this).siblings().children('.sub-menu').slideUp();
            }else{
                $(this).addClass('open');
                $(this).children('a').find('.nav_right').html('&#xe6a6;');
                $(this).children('.sub-menu').stop().slideDown();
                $(this).siblings().children('.sub-menu').stop().slideUp();
                $(this).siblings().find('.nav_right').html('&#xe697;');
                $(this).siblings().removeClass('open');
            }
        }else{

            var url = $(this).children('a').attr('_href');
            var title = $(this).find('cite').html();
            var index  = $('.left-nav #nav li').index($(this));

            for (var i = 0; i <$('.x-iframe').length; i++) {
                if($('.x-iframe').eq(i).attr('tab-id')==index+1){
                    tab.tabChange(index+1);
                    event.stopPropagation();
                    return;
                }
            };

            tab.tabAdd(title,url,index+1);
            tab.tabChange(index+1);
        }

        event.stopPropagation();

    })
    */
</script>
<style scoped>

.menu{
  height: 100%;
}
</style>