import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Dash from '../views/Dash.vue';
import Test from '../views/Test.vue';
import Teachers from '../views/Teachers.vue';
import TeacherNew from '../views/TeacherNew.vue';
import Students from '../views/Students.vue';
import StudentNew from '../views/StudentNew.vue';
import LoginVue from '@/views/Login.vue';
import RegisterVue from '@/views/Register.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'dash',
    component: Dash,
  },
  // {
  //   path: '/students',
  //   name: 'student',
  //   component: Students,
  // },
  {
    path: '/teachers',
    name: 'teachers',
    component: Teachers,
  },
  {
    path: '/Addteacher',
    name: 'teachersNew',
    component: TeacherNew,
    meta: {
      needsAuth: true,
    },
  },
  {
    path: '/students',
    name: 'students',
    component: Students,
  },
  {
    path: '/Addstudent',
    name: 'studentNew',
    component: StudentNew,
    meta: {
      needsAuth: true,
    },
  },
  {
    path: '/test',
    name: 'test',
    component: Test,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginVue,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterVue,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(
        /* webpackChunkName: "about" */ '../views/AboutView.vue'
      );
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.needsAuth) {
    if (localStorage.getItem('token')) {
      next();
    } else {
      next('/login');
    }
  } else {
    next();
  }
});

export default router;
