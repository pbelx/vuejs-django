<template>
  <!-- <v-navigation-drawer v-model="drawer">
      <v-list v-for="link in links" :key="link.name" class="mt-0">
        <router-link :to="link.url">
          <v-list-title>
            <v-list-title-action>
              <span
                ><v-icon
                  :icon="link.icon"
                  class="ml-3"
                ></v-icon></span
            ></v-list-title-action>

            <v-list-title>
              <span class="ml-2"
                ><v-btn>{{ link.name }}</v-btn></span
              >
            </v-list-title>
          </v-list-title>
        </router-link>
      </v-list>
    </v-navigation-drawer> -->
  <v-app-bar title="Student Management System" color="primary">
    <template v-slot:prepend>
      <v-app-bar-nav-icon
        @click="changeDrawer"
      ></v-app-bar-nav-icon> </template
  ></v-app-bar>
</template>

<script>
export default {
  data() {
    return {
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
    };
  },
  methods: {
    changeDrawer: function () {
      this.drawer = !this.drawer;
    },
  },
};
</script>

<style lang="scss" scoped></style>
