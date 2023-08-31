let navList = [
    {name: "欢迎页-1",icon: "xe6b8",to:"welcome"},
    {name: "欢迎页-2",icon: "xe6b8",to:"welcome-1"},
    {
        name: "图标字体", icon: "xe6b4", subMenu: [
            {name: "图标对应字体", href: "unicode.html"}
        ]
    },
    {name: "表单验证",icon: "xe6b8",to:"form-template"},
    {
        name: "会员管理", icon: "xe6b8", subMenu: [
            {name: "会员列表", to: "member-list"},
            {name: "会员列表", href: "member-del.html"},
            {
                name: "会员管理", icon: "xe70b", subMenu: [
                    {name: "会员列表", href: "member-list.html"},
                    {name: "会员删除", href: "member-del.html"},
                    {name: "等级管理", href: "member-del.html"},
                ]
            },
        ]
    },
    {name: "订单管理", icon: "xe723", subMenu: [{name: "订单列表", href: "order-list.html"}]},
    {name: "分类管理", icon: "xe723", subMenu: [{name: "多级分类", href: "cate.html"}]},
    {name: "城市联动", icon: "xe723", subMenu: [{name: "三级地区联动", href: "city.html"}]},
    {
        name: "管理员管理", icon: "xe726", subMenu: [
            {name: "管理员列表", href: "admin-list.html"},
            {name: "角色管理", href: "admin-role.html"},
            {name: "权限分类", href: "admin-cate.html"},
            {name: "权限管理", href: "admin-rule.html"}
        ]
    },
    {
        name: "系统统计", icon: "xe6ce", subMenu: [
            {name: "拆线图", href: "echarts1.html"},
            {name: "柱状图", href: "echarts2.html"},
            {name: "地图", href: "echarts3.html"},
            {name: "饼图", href: "echarts4.html"},
            {name: "雷达图", href: "echarts5.html"},
            {name: "k线图", href: "echarts6.html"},
            {name: "热力图", href: "echarts7.html"},
            {name: "仪表图", href: "echarts8.html"},
        ]
    },
];
export default navList;