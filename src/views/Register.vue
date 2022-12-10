<template>
  <v-app>
    <v-main>
      <v-container fluid fill-height>
        <v-layout justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12 mt-5">
              <v-toolbar dark color="success">
                <v-toolbar-title>Register form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <form ref="form" @submit.prevent="login()">
                  <v-text-field
                    v-model="username"
                    name="username"
                    label="Username"
                    type="text"
                    placeholder="username"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="password"
                    name="password"
                    label="Password"
                    type="password"
                    placeholder="password"
                    required
                  ></v-text-field>
                  <v-btn
                    type="submit"
                    class="mt-4"
                    color="success"
                    value="log in"
                    @click="corsit"
                    >Register</v-btn
                  >
                  <v-btn
                    type="submit"
                    class="mt-4 mx-2"
                    color="primary"
                    value="log in"
                    @click="$router.push('/login')"
                    >Login</v-btn
                  >
                  <v-progress-circular
                    v-if="loading"
                    indeterminate
                    color="purple"
                    class="ml-3"
                  ></v-progress-circular>
                  <p class="pa-2 red--text">{{ err }}</p>
                </form>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      err: '',
      loading: false,
    };
  },
  methods: {
    corsit() {
      this.loading = true;
      axios
        .post('api/users/', {
          username: this.username,
          password: this.password,
        })
        .then((result) => {
          console.log(result.data);
          console.log(result.headers);
          //   this.e = result;
          this.loading = false;
          axios.post('api/roles/new/', {
            rname: this.username,
            role: 'teacher',
            password: this.password,
          });
          this.$router.push('/login');
        })
        .catch((e) => {
          console.log(e.response.data);
          this.loading = false;
          this.err = e.response.data;
        });
    },
    login() {
      const { username } = this;
      console.log(username + 'logged in');
    },
  },
};
</script>
