<template>
  <nav>
    <v-navigation-drawer v-model="drawer" app>
      <v-sheet color="grey lighten-4" class="">
        <v-img src="@/assets/green.jpg">
          <div class="text-center e pa-4">
            <v-avatar class="mb-4" color="grey darken-1" size="64">
              <v-img src="@/assets/5.jpg"> </v-img>
            </v-avatar>

            <h3 color="white" class="white--text">
              {{ username }}@techwiz.icu
            </h3>
          </div>
        </v-img>
      </v-sheet>
      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.name"
          router
          :to="link.url"
        >
          <v-list-item-action-text>
            <span
              ><v-icon :icon="link.icon" class="ml-3">{{
                link.icon
              }}</v-icon></span
            ></v-list-item-action-text
          >

          <v-list-item-action-text>
            <span class="ml-2"
              ><v-btn text>{{ link.name }}</v-btn></span
            >
          </v-list-item-action-text>
        </v-list-item>
        <v-list-item
          v-if="usermode == 'teacher' || usermode == 'admin'"
        >
          <v-list-item-action-text class="ml-3">
            <span class="m" text
              ><v-icon>mdi-microsoft-excel</v-icon></span
            >
          </v-list-item-action-text>
          <v-list-item-action-text>
            <v-btn text class="ml-2">Reports</v-btn>
          </v-list-item-action-text>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar>
      <v-btn text @click="changeDrawer">
        <v-icon class="mx-2" color="primary">mdi-menu</v-icon>
      </v-btn>
      <v-app-bar-title>
        <span class="font-weight-light">School </span>
        <span class="underline">Management System</span>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn color="success" text size="x-small"
        >{{ username }}
      </v-btn>
      <!-- <v-btn color="info" text size="x-small" @click="checkRole"
        >check</v-btn
      > -->

      <v-btn
        color="green"
        text
        size="x-small"
        @click="$router.push('/login')"
        v-if="!username"
      >
        <span>Login</span>
        <span><v-icon>mdi-door-open</v-icon></span>
      </v-btn>
      <v-btn
        v-if="username"
        color="grey"
        text
        size="x-small"
        @click="sendlogout"
      >
        <span>logout</span>
        <span><v-icon>mdi-logout</v-icon></span>
      </v-btn>
    </v-toolbar>
  </nav>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      drawer: false,
      username: null,
      usermode: '',
      links: [
        {
          name: 'Dashboard',
          url: '/',
          // icon: 'mdi-view-dashboard',
          icon: 'mdi-microsoft-windows',
        },
        // {
        //   name: 'Home',
        //   url: '/',
        //   icon: 'mdi-home',
        // },
        {
          name: 'Students',
          url: '/students',
          icon: 'mdi-school',
        },
        {
          name: 'Teachers',
          url: '/teachers',
          icon: 'mdi-teach',
        },
      ],
    };
  },
  async mounted() {
    await this.checkstorage();
    await this.checkRole();
  },
  methods: {
    changeDrawer: function () {
      this.drawer = !this.drawer;
    },
    async checkstorage() {
      // console.log(localStorage.getItem('token'));
      const response = await axios.get('api/users/', {
        headers: {
          Authorization: 'Token ' + localStorage.getItem('token'),
        },
      });
      this.username = response.data[0].username;
    },
    sendlogout() {
      localStorage.removeItem('token');
      this.$router.push('/login');
    },
    checkRole() {
      console.log(this.username);
      axios.get('api/roles/' + this.username).then((result) => {
        console.log(result.data[0].role);
        this.usermode = result.data[0].role;
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
