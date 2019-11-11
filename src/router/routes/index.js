import tourism from './tourism';

const routes = [{
  path: '/',
  redirect: "/home"

}, {
  path: '/home',
  name: 'home',
  component: () => import('../../views/MainPage/MainPage.vue')
}, {
  ...tourism
}]
export default routes
