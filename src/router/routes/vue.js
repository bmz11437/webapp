export default {
  path: '/vue',
  name: 'vue',
  meta: {
    navTitle: "vue技术管理",
    weight: 1, // 权重
    icon: "icon-yizhangtu1",
    access: [] // 未来用于权限过滤
  },
  redirect: "/vue/DocInfo",
  component: () => import('@/components/Layout/index'),
  children: [{
    path: 'DocInfo',
    name: 'DocInfo',
    meta: {
      navTitle: "技术文档分享",
      weight: 1, // 权重
      icon: "icon-yizhangtu1",
      access: [] // 未来用于权限过滤
    },
    component: () => import('@/views/vue/DocInfo/index'),
    children: []
  }]
}
