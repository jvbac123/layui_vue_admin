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
 
</style>
