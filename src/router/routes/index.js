import vue from './vue';

const routes = [{
  path: '/',
  redirect: "/home"

}, {
  path: '/home',
  name: 'home',
  component: () => import('../../views/HomePage.vue')
}, {
  ...vue
}]
export default routes
