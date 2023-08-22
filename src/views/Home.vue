<script setup>
import CHeader from "../components/home/CHeader.vue";
import NavSide from "../components/home/NavSide.vue";

</script>
<template>
  <lay-layout class="main">
    <lay-header>
      <CHeader/>
    </lay-header>
    <lay-layout class="main-layout">
      <lay-side>
        <NavSide/>
      </lay-side>
      <lay-body class="x-body">
        <RouterView/>
        <!--        <div class="page-content">

                  &lt;!&ndash;
                  <div class="layui-tab tab">
                        <ul class="layui-tab-title">
                          <li class="home"><i class="layui-icon">&#xe68e;</i>我的桌面</li>
                        </ul>
                        <div class="layui-tab-content">
                          <div class="layui-tab-item layui-show">

                          </div>
                        </div>
                      </div>&ndash;&gt;
                </div>-->
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
.main-layout {
  overflow:hidden;
}
.main .x-body {
  width: 100%;
  height: calc(100vh - 45px); /* 减去 header 的高度 */
  overflow: auto;
}

.main .layui-header {
  height: 45px;
  line-height: 45px;
  overflow: hidden;
}

</style>

