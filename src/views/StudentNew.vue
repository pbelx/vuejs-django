<template>
  <div>
    <Navbar />
    <v-form v-model="valid" dense class="px-4">
      <v-container>
        <v-row justify="start">
          <v-col cols="6" md="4">
            <b class="text-h6">Student Details</b>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              label="First name"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="lastname"
              :rules="nameRules"
              label="Last name"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
              prepend-icon="mdi-email"
            ></v-text-field>
          </v-col>
        </v-row>
        <!-- more student details  -->
        <v-row>
          <!-- gender  -->
          <v-col cols="12" md="4">
            <v-select
              v-model="selectgender"
              :items="gender"
              prepend-icon="mdi-human-child"
              label="Gender"
              hint="Pick Student's Gender"
              persistent-hint
            ></v-select>
          </v-col>
          <!-- classess  -->
          <v-col cols="12" md="4">
            <v-select
              v-model="selectclass"
              :items="classes"
              prepend-icon="mdi-school"
              label="Class"
              hint="Pick Student's Class"
              persistent-hint
            ></v-select>
          </v-col>
          <v-col cols="12" md="4">
            <p>Date of Birth</p>
            <input type="date" v-model="bdate" />
          </v-col>
        </v-row>
        <v-row justify="start">
          <v-col cols="6" md="4">
            <b class="text-h6"> Father Details</b>
          </v-col>
        </v-row>
        <!-- father details  -->
        <v-row justify="center">
          <v-col cols="12" md="4">
            <v-text-field
              v-model="fathersname"
              :rules="nameRules"
              label="Father's Names"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="fathersno"
              label="Father's number"
              required
              prepend-icon="mdi-cellphone"
              type="number"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="start">
          <v-col cols="6" md="4"
            ><b class="text-h6">Mother's Details</b>
          </v-col>
        </v-row>
        <!-- mothers details  -->
        <v-row justify="center">
          <v-col cols="12" md="4">
            <v-text-field
              v-model="mothersname"
              :rules="nameRules"
              label="Mother's Names"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="mothersno"
              label="Mother's number"
              required
              type="number"
              prepend-icon="mdi-cellphone"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="start">
          <v-col cols="6" md="4">
            <b class="text-h6">Emergency Contact Details</b>
          </v-col>
        </v-row>
        <!-- Emergency Contanct  -->
        <v-row justify="center">
          <v-col cols="12" md="4">
            <v-text-field
              v-model="emergencyname"
              :rules="nameRules"
              label="Emergency Names"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="emergencynumber"
              label="Emergency number"
              required
              prepend-icon="mdi-cellphone"
              type="number"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-btn class="success my-3" @click="savestuff"> Save </v-btn>
        <v-btn
          class="warning ml-2"
          @click="$router.push('/students')"
        >
          Back
        </v-btn>
      </v-container>
      <v-snackbar v-model="snackbar" :timeout="timeout">
        {{ text }}

        <template v-slot:action="{ attrs }">
          <v-btn
            color="blue"
            text
            v-bind="attrs"
            @click="snackbar = false"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </v-form>
  </div>
</template>
<script>
import axios from 'axios';
import Navbar from '@/components/Navbar.vue';
export default {
  components: {
    Navbar,
  },
  data: () => ({
    snackbar: false,
    text: 'Information saved',
    timeout: 2000,
    valid: false,
    firstname: '',
    lastname: '',
    fathersname: '',
    mothersname: '',
    fathersno: '',
    mothersno: '',
    selectclass: '',
    selectgender: '',
    emergencyname: '',
    emergencynumber: '',
    bdate: '',
    gender: ['B', 'G'],
    classes: ['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7'],
    nameRules: [(v) => !!v || 'Name is required'],
    email: '',
    emailRules: [
      //   (v) => !!v || 'E-mail is required',
      //   (v) => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
  }),
  methods: {
    savestuff() {
      axios
        .post('api/create', {
          firstname: this.firstname,
          secondname: this.lastname,
          fathersname: this.fathersname,
          mothersname: this.mothersname,
          fathersnumber: this.fathersno,
          mothersnumber: this.mothersno,
          studentgender: this.selectgender,
          studentbirth: this.bdate,
          studentclass: this.selectclass,
          parentemail: this.email,
          emergencyname: this.emergencyname,
          emergencyno: this.emergencynumber,
        })
        .then((result) => {
          this.snackbar = true;
          console.log(result.data);
        });
    },
  },
};
</script>
