<template>
  <div class="container">
    <div class="logo"><a href="/">LayUI-Vue-Admin</a></div>
    <div class="left_open">
      <i title="展开左侧栏" class="iconfont">&#xe699;</i>
    </div>
<!--    TODO 重做-->
    <ul class="layui-nav left fast-add">
      <li class="layui-nav-item">
        <a href="javascript:">+新增</a>
        <dl class="layui-nav-child"> <!-- 二级菜单 -->
          <dd><a onclick="show('资讯')"><i class="iconfont">&#xe6a2;</i>资讯</a></dd>
          <dd><a onclick="show('图片')"><i class="iconfont">&#xe6a8;</i>图片</a></dd>
          <dd><a onclick="show('用户')"><i class="iconfont">&#xe6b8;</i>用户</a></dd>
        </dl>
      </li>
    </ul>
    <ul class="layui-nav right">
      <li class="layui-nav-item">
        <a href="javascript:">admin</a>
        <dl class="layui-nav-child"> <!-- 二级菜单 -->
          <dd><a @click="show('个人信息')">个人信息</a></dd>
          <dd><a @click="show('切换帐号')">切换帐号</a></dd>
          <dd><a href="./login.html">退出</a></dd>
        </dl>
      </li>
      <li class="layui-nav-item to-index"><a href="/">前台首页</a></li>
    </ul>
  </div>
</template>
<script setup>

const show=(str)=>{
  console.log(str)
}
 import('../assets/style/xadmin.css')
// import('../assets/iconfont/font.css')
</script>
<style scoped>

.container{
  width: 100%;
  height: 45px;
  background-color: #222;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
.container a{
  color: white;
}
.container .logo a{
  float: left;
  color: #fff;
  font-size: 18px;
  padding-left: 20px;
  line-height: 45px;
  width: 200px;
}
.container .right{
  background-color:rgba(0,0,0,0);
  float: right;

}
.container .left_open{
  height: 45px;
  float: left;
}
.container .left_open i{
  display: block;
  background: rgba(255,255,255,0.1) ;
  color: #fff;
  width: 32px;
  height: 32px;
  line-height: 32px;
  border-radius: 3px;
  text-align: center;
  margin-top: 7px;
  cursor: pointer;
}
.container .left_open i:hover{
  background: rgba(255,255,255,0.3);
}

.container .left{
  background-color:rgba(0,0,0,0);
  float: left;

}
.container .layui-nav-item{
  line-height: 45px;
}
.container .layui-nav-more{
  top: 20px;
}
.container .layui-nav-child{
  top: 50px;
}
.container .layui-nav-child i{
  margin-right: 10px;
}
</style>
