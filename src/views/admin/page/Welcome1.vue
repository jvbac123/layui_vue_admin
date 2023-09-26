<script setup>
import MiniCard from "./MiniCard.vue";

const data=[
  {name:"用户统计",count:1234,color:1},
  {name:"商品统计",count:1234,color:2},
  {name:"浏览统计",count:1234,color:3},
  {name:"订单统计",count:1234,color:4},
]
</script>
<template>
<div class="welcome">
  <lay-row space="10">
    <lay-col v-for="i in 9" md="8" sm="24" xs="24" >
      <lay-card class="card">
        <template #title>卡片</template>
        <template #body>
          <lay-row space="10">
            <lay-col md="12" sm="12" space="10" v-for="t of data">
              <MiniCard :data="t"/>
            </lay-col>
          </lay-row>
        </template>
      </lay-card>
    </lay-col>
  </lay-row>
</div>
</template>
<style>
.welcome{
}
.layui-card-body {
  background-color: #fff;
}
.mini-card>*{
  background-color: #f2f2f2;
}
.mini-card .layui-card-body{
  padding: 0 10px;
  font-size: 2em;
  font-weight:400;
}

</style>