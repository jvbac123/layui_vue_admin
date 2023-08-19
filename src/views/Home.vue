<script setup>
import LeftNav from "../components/leftNav.vue";
import CHeader from "../components/CHeader.vue";

</script>
<template>
  <div>
    <CHeader/>
    <LeftNav />
    <div class="x-slide_left"></div>
    <div class="page-content">
      <RouterView  />
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
  </div>






</template>
<script>

</script>
<style scoped>
.page-content{
  position: absolute;
  top: 46px;
  right: 0;
  /*bottom: 42px;*/
  left: 221px;
  overflow: auto;
  z-index: 1;
}
.page-content-bg{
  position: absolute;
  top: 46px;
  right: 0;
  bottom: 42px;
  left: 221px;
  background: rgba(0,0,0,0.5);
  overflow: hidden;
  z-index: 100;
  display: none;
}
.page-content .tab{
  height: 100%;
  width: 100%;
  background: #EFEEF0 ;
  margin: 0;
}

.page-content .layui-tab-title{
  /*padding-top: 5px;*/
  height: 35px;
  background: #EFEEF0 ;
  position: relative;
  z-index: 100;
}


.page-content .layui-tab-title li.home i{
  padding-right: 5px;
}
.page-content .layui-tab-title li.home .layui-tab-close{
  display: none;
}
.page-content .layui-tab-title li{
  line-height: 35px;
}
.page-content .layui-tab-title .layui-this:after{
  height: 36px;
}
.page-content .layui-tab-title li .layui-tab-close{
  border-radius: 50%;
}
.page-content .layui-tab-title .layui-this{
  background: #fff ;
}
.page-content .layui-tab-bar{
  height:34px;
  line-height: 35px;
}
.page-content .layui-tab-content{
  position: absolute;
  top: 36px;
  bottom: 0px;
  width: 100%;
  background: #fff;
  padding: 0px;
  overflow: hidden;
}
.page-content .layui-tab-content .layui-tab-item{
  width: 100%;
  height: 100%;

}
.page-content .layui-tab-content .layui-tab-item iframe{
  width: 100%;
  height: 100%;

}
.footer{
  position: fixed;
  bottom: 0px;
  width: 100%;
  background-color: #222;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  line-height: 41px;
  color: #fff;
  /*padding-left: 10px;*/
}
.footer .copyright{
  margin-left: 10px;
}
@media screen and (max-width: 768px) {
  .container .logo a{
    width: 140px;
  }
  .container .left_open {
    /*float: right;*/
  }
  .page-content{
    left: 0;
  }
  .page-content .layui-tab-content .layui-tab-item{
    -webkit-overflow-scrolling: touch;
    overflow-y: scroll;
  }
}
.x-slide_left {
  width: 17px;
  height: 61px;
  background: #ffffff 0 0 no-repeat;
  position: absolute;
  top: 200px;
  left: 221px;
  cursor: pointer;
  z-index: 3;
}
</style>
