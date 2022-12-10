<template>
  <v-app class="primary lighten-4">
    <v-main>
      <!-- <Navbar /> -->
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar';
// import Drawer from '@/components/Drawer';
export default {
  name: 'App',
  components: {
    Navbar,
  },
  methods: {
    changeDrawer: function () {
      this.drawer = !this.drawer;
    },
  },

  data: () => ({
    drawer: false,
    links: [
      {
        name: 'Dashboard',
        url: '/dash',
        icon: 'mdi-view-dashboard',
      },
      {
        name: 'Home',
        url: '/',
        icon: 'mdi-home',
      },
      {
        name: 'Students',
        url: '/students',
        icon: 'mdi-account-school-outline',
      },
      {
        name: 'Teachers',
        url: '/teachers',
        icon: 'mdi-human-male-board',
      },
    ],
    items: [
      { title: 'Dashboard', icon: 'mdi-view-dashboard' },
      { title: 'Photos', icon: 'mdi-image' },
      { title: 'About', icon: 'mdi-help-box' },
    ],
    right: null,
  }),
};
</script>
