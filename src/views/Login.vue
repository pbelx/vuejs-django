<template>
  <v-app>
    <v-main>
      <v-container fluid fill-height>
        <v-layout justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12 mt-5">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login form</v-toolbar-title>
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
                    color="primary"
                    value="log in"
                    @click="login"
                    >Login</v-btn
                  >
                  <v-btn
                    type="submit"
                    class="mt-4 mx-2"
                    color="success"
                    value="register"
                    @click="$router.push('/register')"
                    >SignUp</v-btn
                  >
                  <v-progress-circular
                    v-if="loading"
                    indeterminate
                    color="purple"
                    class="ml-3"
                  ></v-progress-circular>
                  <p class="red--text pa-3">{{ err }}</p>
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
    login() {
      this.loading = true;
      axios
        .post('api/token/login', {
          username: this.username,
          password: this.password,
        })
        .then((result) => {
          console.log(result.data.auth_token);
          localStorage.setItem('token', result.data.auth_token);
          this.loading = false;
          this.$router.push('/');
        })
        .catch((e) => {
          this.loading = false;
          this.err = e.response.data.non_field_errors;
        });
    },
    login2() {
      const { username } = this;
      console.log(username + 'logged in');
    },
  },
};
</script>
