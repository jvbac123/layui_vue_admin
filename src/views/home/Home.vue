<script setup>
import CHeader from "../../components/CHeader.vue";
import Side from "./componts/Side.vue";

</script>
<template>
  <lay-layout class="main">
    <lay-header><CHeader/></lay-header>
    <lay-layout>
      <lay-side><side/></lay-side>
      <lay-body>
        <div class="page-content">
          <RouterView/>
          <!--    <div class="layui-tab tab">
                <ul class="layui-tab-title">
                  <li class="home"><i class="layui-icon">&#xe68e;</i>我的桌面</li>
                </ul>
                <div class="layui-tab-content">
                  <div class="layui-tab-item layui-show">

                  </div>
                </div>
              </div>-->
        </div>
        <!--    <div class="page-content-bg"></div>-->
        <!--    <div class="footer"><div class="copyright">Copyright ©2017 x-admin v2.3 All Rights Reserved</div></div>-->
      </lay-body>
    </lay-layout>
  </lay-layout>
</template>
<script>

</script>
<style scoped>
  .main {

  }
</style>
