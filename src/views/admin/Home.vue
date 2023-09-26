<script>
export default {
  name: "Home",

};
</script>
<script setup>
import CHeader from "./components/CHeader.vue";
import CSide from "./components/CSide.vue";
import {ref} from "vue";

const ref_cSide = ref(null)
const mt = (refs) => {
  ref_cSide.value.test()
}
</script>
<template>
  <div class="home">
    <lay-layout class="main">
      <c-side v-if="true" ref="ref_cSide"/>
      <div class="right-content">
        <c-header/>
        <div class="c-body">
          <div class="c-content">
            <div class="view">
              <RouterView/>
            </div>
          </div>
        </div>
      </div>
    </lay-layout>
  </div>
</template>
<style>
/*
right-content 右视图
 header 头部 高 x
 c-body 主体 高度为 屏幕高度 - x
  c-content 主体内容
    view 具体组件

*/
.main .right-content{
  width: 100%;
}
.main .c-body {
  background-color: #f2f2f2;

  overflow: auto;
}
.c-body{
  height: calc( 100vh - 60px ) ;
}
.main .c-content {
  height: 100%;
  background-color: #ffffff;
  margin: 15px;
}
.main .layui-side {
//flex: initial !important; //width: initial !important;
}

</style>

