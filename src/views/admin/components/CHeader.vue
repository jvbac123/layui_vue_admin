<template>
  <div class="c-header">
    <div class="c-left">
      <lay-icon type="layui-icon-spread-left" @click="switchSide(this)"/>
    </div>
    <div class="c-right">
      <lay-icon type="layui-icon-friends" size="22px"/>
    </div>
  </div>
</template>
<script setup>

function switchSide(event) {
  console.log(event.$parent.$parent.$refs)
  let switchCollapse =event.$parent.$parent.$refs.ref_cSide.switchCollapse;
  switchCollapse();
}

defineExpose({
  switchSide
})
</script>
<style>
 .c-header {
    padding: 0 15px ;
   height: 50px;
   line-height: 50px;
    background-color: white;
   overflow: hidden;
   display: flex;
}
.c-left{
  flex: 1;
}
 .c-right{
  flex: 1;
   text-align: right;
}

/*
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
}*/
</style>
