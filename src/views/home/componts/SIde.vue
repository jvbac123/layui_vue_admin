<template>
  <!--    TODO 重做-->
  <lay-menu>
    <lay-menu-item v-for="nav of navList">
<!--      <a @click="open(nav)">
        <i class="iconfont" v-html='"&#"+nav.icon+";"'></i>
        <cite>{{nav.name}}</cite>
        <i class="iconfont nav_right" v-html="nav.show ? icon.more_unfold:icon.more"></i>
      </a>
      <ul class="sub-menu" v-show="nav.show">
        <li v-for="menu of nav.subMenu">
          <a @click="openlink(menu)">
            <i class="iconfont" v-html='"&#"+menu.icon+";"'></i>
            <cite>{{menu.name}}</cite>
          </a>
        </li>
      </ul>-->
     ebs
    </lay-menu-item>
  </lay-menu>
</template>
<script setup>
import {ref} from "vue";

const icon={
  more_unfold:"&#xe6a6;",//展开的
  more:"&#xe697;",//
}
const navList=ref([
  {name:"会员管理",icon:"xe6b8",subMenu:[
      {name: "会员列表",to:"member-list"},
      {name: "会员列表",to:"member-del.html"},
      {name: "会员管理",icon:"xe70b",subMenu:[
          {name: "会员列表",to:"member-list.html"},
          {name: "会员删除",to:"member-del.html"},
          {name: "等级管理",to:"member-del.html"},
        ]},
    ]},
  {name:"订单管理",icon:"xe723",subMenu:[{name: "订单列表",to:"order-list.html"}]},
  {name:"分类管理",icon:"xe723",subMenu:[{name: "多级分类",to:"cate.html"}]},
  {name:"城市联动",icon:"xe723",subMenu:[{name:"三级地区联动",to: "city.html"}]},
  {name:"管理员管理",icon:"xe726",subMenu:[
      {name: "管理员列表",to:"admin-list.html"},
      {name: "角色管理",to:"admin-role.html"},
      {name: "权限分类",to:"admin-cate.html"},
      {name: "权限管理",to:"admin-rule.html"}
    ]},
  {name:"系统统计",icon:"xe6ce",subMenu:[
      {name:"拆线图",to:"echarts1.html"},
      {name:"柱状图",to:"echarts2.html"},
      {name:"地图",to:"echarts3.html"},
      {name:"饼图",to:"echarts4.html"},
      {name:"雷达图",to:"echarts5.html"},
      {name:"k线图",to:"echarts6.html"},
      {name:"热力图",to:"echarts7.html"},
      {name:"仪表图",to:"echarts8.html"},
    ]},
  {name:"图标字体",icon:"xe6b4",subMenu:[
      {name:"图标对应字体",to:"unicode.html"}
  ]},
])
for (let n of navList.value){
  n.show=false
  for (let c of n.subMenu) {
    if(!c.icon) c.icon="xe6a7";
  }
}

const open=obj=>{
  obj.show=!obj.show
}
import { useRouter,useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()

const openlink=obj=>{
  if (obj.to) {
    router.push(obj.to)
  }
}


/*
    //左侧菜单效果
    // $('#content').bind("click",function(event){

    $('.left-nav #nav li').click(function (event) {

        if($(this).children('.sub-menu').length){
            if($(this).hasClass('open')){
                $(this).removeClass('open');
                $(this).find('.nav_right').html('&#xe697;');
                $(this).children('.sub-menu').stop().slideUp();
                $(this).siblings().children('.sub-menu').slideUp();
            }else{
                $(this).addClass('open');
                $(this).children('a').find('.nav_right').html('&#xe6a6;');
                $(this).children('.sub-menu').stop().slideDown();
                $(this).siblings().children('.sub-menu').stop().slideUp();
                $(this).siblings().find('.nav_right').html('&#xe697;');
                $(this).siblings().removeClass('open');
            }
        }else{

            var url = $(this).children('a').attr('_href');
            var title = $(this).find('cite').html();
            var index  = $('.left-nav #nav li').index($(this));

            for (var i = 0; i <$('.x-iframe').length; i++) {
                if($('.x-iframe').eq(i).attr('tab-id')==index+1){
                    tab.tabChange(index+1);
                    event.stopPropagation();
                    return;
                }
            };

            tab.tabAdd(title,url,index+1);
            tab.tabChange(index+1);
        }

        event.stopPropagation();

    })
    */
</script>
<style scoped>
/*.left-nav{
  position: absolute;
  top: 46px;
  !*TODO*!
  bottom:1px;
  left: 0;
  z-index: 2;
  padding-top: 10px;
  background-color: #EEEEEE;
  width: 220px;
  max-width: 220px;
  overflow: auto;
  overflow-x:hidden;
  border-right: 1px solid #e5e5e5;
}
.layui-nav .layui-nav-child a{
  color: #333;
  cursor: pointer;
}
.left-nav #nav li{
  border-bottom: 1px solid #e5e5e5;
}
.left-nav #nav li:hover > a{
  !*color: blue;*!
}
.left-nav #nav .current{
  background-color: rgba(0, 0, 0, 0.3);
}
.left-nav #nav li a{
  font-size: 14px;
  padding: 10px 15px 10px 20px;
  display: block;
  cursor: pointer;
}
.left-nav #nav li a cite{
  font-size: 14px;
}
.left-nav #nav li .opened{
  display: block;
}
.left-nav #nav li .opened:hover{
  !*background: #fff url() 0 0 no-repeat;*!
}
.left-nav #nav li .opened .current{

}
.left-nav #nav li .sub-menu li:hover{
  !*color: blue;*!
  !*background: #fff url() 0 0 no-repeat;*!
}
.left-nav #nav li .sub-menu li a{
  padding: 12px 15px 12px 30px;
  font-size: 14px;
  cursor: pointer;
}
.left-nav #nav li .sub-menu li .sub-menu li a{
  padding-left: 45px;
}
.left-nav #nav li .sub-menu li a:hover{
  color: #148cf1;
}
.left-nav #nav li .sub-menu li a i{
  font-size: 12px;
}
.left-nav #nav li a i{
  padding-right: 15px;
  line-height: 14px;
}
.left-nav #nav li .nav_right{
  float: right;
  font-size: 16px;
}
.layui-nav .layui-nav-item a{
  color: #fff;
  cursor: pointer;
}*/
</style>