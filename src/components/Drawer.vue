<template>
  <v-navigation-drawer v-model="drawer" app class="blue">
    <v-list v-for="link in links" :key="link.name" class="mt-0">
      <router-link :to="link.url">
        <v-list-item>
          <v-list-item-title-action>
            <span
              ><v-icon :icon="link.icon" class="ml-3"></v-icon></span
          ></v-list-item-title-action>

          <v-list-item-title>
            <span class="ml-2"
              ><v-btn>{{ link.name }}</v-btn></span
            >
          </v-list-item-title>
        </v-list-item>
      </router-link>
    </v-list>
  </v-navigation-drawer>
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
};
</script>

<style lang="scss" scoped></style>
