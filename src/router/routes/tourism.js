export default {
  path: '/tourism',
  name: 'tourism',
  meta: {
    navTitle: "旅游攻略",
    weight: 1, // 权重
    icon: "icon-yizhangtu1",
    access: [] // 未来用于权限过滤
  },
  redirect: "/tourism/Attraction",
  component: () => import('@/views/tourism/index'),
  children: [{
    path: 'DocInfo',
    name: 'DocInfo',
    meta: {
      navTitle: "技术文档分享",
      weight: 1, // 权重
      icon: "icon-yizhangtu1",
      access: [] // 未来用于权限过滤
    },
    component: () => import('@/views/tourism/DocInfo/index'),
    children: []
  }, {
    path: 'Attraction',
    name: 'Attraction',
    meta: {
      navTitle: "技术文档分享",
      weight: 1, // 权重
      icon: "icon-yizhangtu1",
      access: [] // 未来用于权限过滤
    },
    component: () => import('@/views/tourism/Attraction/index'),
    children: []
  }]
}
