<script setup>
import {LayQuote, LayCard, LaySpace, LayRow, LayCol, LayField} from "@layui/layui-vue";
import {ref} from "vue";

const data1 = [
  {title: "文章数", info: "66"},
  {title: "会员数", info: "12"},
  {title: "回复数", info: "99"},
  {title: "商品数", info: "67"},
  {title: "文章数", info: "67"},
  {title: "文章数", info: "6767"},
]
const data2 = [{
  name: "系统信息",
  children: [
    {key: "xxx版本", value: "1.0.180420"},
    {key: "服务器地址", value: "x.xuebingsi.com"},
    {key: "操作系统", value: "WINNT"},
    {key: "运行环境", value: "Apache/2.4.23 (Win32) OpenSSL/1.0.2j mod_fcgid/2.3.9"},
    {key: "PHP版本", value: "5.6.27"},
    {key: "PHP运行方式", value: "cgi-fcgi"},
    {key: "MYSQL版本", value: "5.5.53"},
    {key: "ThinkPHP", value: "5.0.18"},
    {key: "上传附件限制", value: "2M"},
    {key: "执行时间限制", value: "30s"},
    {key: "剩余空间", value: "86015.2M"},
  ]
},
  {name: "开发团队",children: [
      {key: "版权所有",value: "a"},
      {key: "开发者",value: "ss"},
    ]}
]

</script>
<template>
  <div class="x-body">
    <LayQuote>欢迎管理员：
      <span class="x-red">test</span>！当前时间: {{new Date()}}
    </LayQuote>
    <LayField title="数据统计">
      <lay-col md="24">
        <LayCard>
          <lay-row class="x-admin-backlog" space="10">
            <lay-col v-for="col of data1" md="4" xs="2">
              <a href="#" class="x-admin-backlog-body">
                <h3>{{ col.title }}</h3>
                <p><cite>{{ col.info }}</cite></p>
              </a>
            </lay-col>
          </lay-row>
        </LayCard>
      </lay-col>
    </LayField>
    <LayField v-for="table of data2" :title="table.name">
      <table class="layui-table">
        <tbody>
        <tr v-for="td of table.children">
          <th>{{ td.key }}</th>
          <td>{{ td.value }}</td>
        </tr>
        </tbody>

      </table>
    </LayField>
    <LayQuote>结束</LayQuote>
  </div>
</template>
<style>

</style>
<style scoped>
.x-body {
  /*background-color: #f5f5f5;*/

}

.x-admin-carousel > [carousel-item] > * {
  background-color: #fff
}

.x-admin-backlog .x-admin-backlog-body {
  display: block;
  padding: 10px 15px;
  background-color: #f8f8f8;
  color: #999;
  border-radius: 2px;
  transition: all .3s;
  -webkit-transition: all .3s
}

.x-admin-backlog-body h3 {
  padding-bottom: 10px;
  font-size: 12px
}

.x-admin-backlog-body p cite {
  font-style: normal;
  font-size: 30px;
  font-weight: 300;
  color: #009688
}

.x-admin-backlog-body:hover {
  background-color: #CFCFCF;
  color: #888
}
.x-a{
  color: #1AA093;
}
.x-a:hover{
  color: #127F74;
}
</style>
