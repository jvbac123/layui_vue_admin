<template>
<div>

  <div class="x-nav">
    <lay-breadcrumb >
        <lay-breadcrumb-item>首页</lay-breadcrumb-item>
        <lay-breadcrumb-item>演示</lay-breadcrumb-item>
        <lay-breadcrumb-item>导航元素</lay-breadcrumb-item>
    </lay-breadcrumb>
    <lay-button class="x-right" type="primary">
      <lay-icon type="layui-icon-refresh"></lay-icon>
    </lay-button>
  </div>
  <div class="x-body">
    <lay-form class="row">
      <lay-date-picker class="input" v-model="data.startTime" placeholder="开始日" allowClear/>
      <lay-date-picker class="input" v-model="data.endTime" placeholder="截止日" allowClear/>
      <lay-input class="input" placeholder="请输入用户名"/>
      <lay-button type="primary" prefix-icon="layui-icon-search" />
    </lay-form>
    <div class="row clock-x">
      <lay-button type="danger" prefix-icon="layui-icon-delete">批量删除</lay-button>
      <lay-button type="primary" prefix-icon="layui-icon-add-circle" @click="add">添加</lay-button>
      <div class="x-right">共有数据：{{dataSource.length}} 条</div>
    </div>

    <lay-table
        :default-toolbar="false"
        :columns="columns"
        :data-source="dataSource"
        :v-model:selectedKeys="selectKey">
      <template v-slot:stats="row">
        <div style="padding: 5px;">
          <lay-button :type='row.stats==="已启用"?"danger":"normal"'>已启用</lay-button>
        </div>
      </template>
      <template v-slot:options="row">
        <div class="options">
          <a title="停用" @click="options(0,row)"><lay-icon type="layui-icon-snowflake" /></a>
          <a title="编辑" @click="options(1,row)"><lay-icon type="layui-icon-edit" /></a>
          <a title="修改密码"  @click="options(2,row)"><lay-icon type="layui-icon-set-fill" /></a>
          <a title="删除"  @click="options(3,row)"><lay-icon type="layui-icon-delete" /></a>
        </div>
      </template>
    </lay-table>
  </div>
  <PopupBox v-model="showBox"/>
</div>
</template>
<script setup>

import {
  LayButton, LayIcon,
  LayRow, LayCol,
  LayBreadcrumb, LayBreadcrumbItem,
  LayForm, LayInput, LayDatePicker, LayTable, layer
} from '@layui/layui-vue'

import {ref} from "vue";
import PopupBox from "../../../components/PopupBox.vue";
const data=ref({
  startTime:null,
  endTime:null,
  username:null,
})
const columns=ref([
  { fixed: 'left', type: 'checkbox', title: '复选' },
  { title: 'ID', width: '20px', key: 'rid' },
  { title: '用户名', width: '80px', key: 'name' },
  { title: '性别', width: '80px', key: 'sax' },
  { title: '手机', width: '80px', key: 'tel' },
  { title: '邮箱', width: '80px', key: 'email' },
  { title: '地址', width: '80px', key: 'address' },
  { title: '加入时间', width: '80px', key: 'joinTime' },
  { title: '状态', width: '15px', key: 'stats',customSlot: "stats" },
  { title: '操作', width: '35px' ,customSlot:"options"},
])
let datas=[]
for (let i = 1; i < 20; i++) {
  let data={rid:1,name:"小明",sax:"男",tel:"13000000000",email:"admin@mail.com", address:"北京市 海淀区",joinTime:"2017-01-01 11:11:42",stats:"已启用"}
  data.id=i
  datas.push(data)
}
const dataSource=ref(datas)
const selectKey=ref([])

const showBox=ref(true)
const add = () => {
  showBox.value=!showBox.value
}
const options = (option,obj) => {

  layer.confirm("确认");
}
</script>

<style scoped>
.x-body {
  padding: 20px;
  /*background-color: #f5f5f5;*/
  overflow: auto;
}
.row {
/*  display: flex;
  align-items: end;*/
  margin:10px 0;
}
.clock-x{
  background-color: #f2f2f2;
  padding: 5px;
  line-height: 50px;
  margin-bottom: 10px;
  border-radius: 0 2px 2px 0;
}
.row>*{
  display: inline-block;
}
.input {
  flex-flow: column;
  width: 280px;
  height: 50px;
  padding: 0;
  margin-right: 10px;
  margin-bottom: 0;
}
.x-nav{
  padding: 0 20px;
  position: relative;
  z-index: 99;
  border-bottom: 1px solid #e5e5e5;
  line-height: 39px;
  height: 39px;
  overflow: hidden;
}
.x-right{
  float: right;
}
</style>