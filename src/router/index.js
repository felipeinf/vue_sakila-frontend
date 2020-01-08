import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'control-panel',
    component: () => import(/* webpackChunkName: "about" */ '@/Admin/views/ControlPanel.vue'),
  },
  {
    path: '/add',
    name: 'new-employe',
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '@/Admin/views/NewEmployee.vue'),
  },
  {
    path: '/employee/:id',
    name: 'employee-details',
    props: true,
    component: () => import("@/Admin/views/EmployeeDetails.vue")
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
