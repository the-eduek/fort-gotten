// import Vue, Vue Router and all views (pages)
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import AllKidz from '../views/AllKidz.vue';

// defining routes 
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/all-kidz',
    component: AllKidz
  }
];

const router = new VueRouter({
  mode: 'history',
  routes: routes,
});

Vue.use(VueRouter);

export default router;