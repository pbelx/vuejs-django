<template>
  <div>
    <Navbar />
    <v-container>
      <span class="text-h5 center-text">Information Center</span>
      <v-divider></v-divider>
      <v-row class="mt-3 ml-4">
        <v-col cols="8" offset="1" md="4">
          <v-card
            elevation="3"
            class="rounded-xl py-4"
            color="grey lighten-3"
          >
            <v-card-text
              class="d-flex justify-space-between align-center"
            >
              <div class="strong text-h5">Students</div>
              <br />
              <v-chip class="ma-2" large color="lime accent-3" label>
                <!-- <v-icon left> mdi-account-circle-outline </v-icon> -->
                <b class="pa-3">{{ allstudents.length }}</b>
              </v-chip>

              <!-- <v-avatar color="orange lighten-2" size="80">
                <span class="bold">2000</span>
              </v-avatar> -->
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="8" offset="1" md="4">
          <v-card
            elevation="3"
            class="rounded-xl py-4"
            color="grey lighten-3"
          >
            <v-card-text
              class="d-flex justify-space-between align-center"
            >
              <div class="strong text-h5">Teachers</div>
              <br />

              <v-chip
                class="ma-2"
                large
                color="orange lighten-1"
                label
              >
                <!-- <v-icon left> mdi-account-circle-outline </v-icon> -->
                <b class="pa-3">{{ teachers.length }}</b>
              </v-chip>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="ml-3" max-width="374">
        <v-col cols="8" offset="1" md="4">
          <v-card
            elevation="3"
            class="rounded-xl py-4"
            color="grey lighten-3"
          >
            <v-card-text
              class="d-flex justify-space-between align-center"
            >
              <div class="strong text-h5">Girls</div>
              <br />

              <!-- <v-avatar color="pink accent-2" size="50">
                <span class="white--text pa-3">2000</span>
              </v-avatar> -->
              <v-chip class="ma-2" large color="pink accent-2" label>
                <!-- <v-icon left> mdi-account-circle-outline </v-icon> -->
                <b class="pa-3">{{ girls.length }}</b>
              </v-chip>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="8" offset="1" md="4" max-width="374">
          <v-card
            elevation="3"
            class="rounded-xl py-4"
            color="grey lighten-3"
          >
            <v-card-text
              class="d-flex justify-space-between align-center"
            >
              <div class="strong text-h5">Boys</div>
              <br />

              <v-chip
                class="ma-2"
                large
                color="deep-purple lighten-2"
                label
              >
                <!-- <v-icon left> mdi-account-circle-outline </v-icon> -->
                <b class="pa-3">{{ boys.length }}</b>
              </v-chip>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios';
import Navbar from '@/components/Navbar.vue';
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      allstudents: [1],

      boys: 3,
      girls: 4,
      teachers: 2,
      gals: [],
    };
  },
  async mounted() {
    await this.getstudents();
    await this.getteachers();
    await this.getgals();
    await this.getboys();
  },
  methods: {
    getstudents() {
      axios.get('http://techwiz.icu:2082/api/all').then((result) => {
        this.allstudents = result.data;
        // console.log(result.data);
      });
    },
    getteachers() {
      axios.get('http://techwiz.icu:2082/api/t').then((result) => {
        this.teachers = result.data;
        // console.log(result.data);
      });
    },
    getgals() {
      axios
        .get('http://techwiz.icu:2082/api/getgals')
        .then((result) => {
          this.girls = result.data;
          // console.log(result.data);
        });
    },
    getboys() {
      axios
        .get('http://techwiz.icu:2082/api/getboys')
        .then((result) => {
          this.boys = result.data;
          // console.log(result.data);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
