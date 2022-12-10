<template>
  <div>
    <Navbar />
    <v-form v-model="valid" dense class="px-4">
      <v-container>
        <v-row justify="center">
          <v-col cols="6" md="4">
            <b class="text-h6">Teacher Details</b>
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
            <v-select
              v-model="selecttitle"
              :items="title"
              prepend-icon="mdi-human"
              label="Title"
            ></v-select>
          </v-col>
        </v-row>
        <!-- more student details  -->
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              prepend-icon="mdi-email"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="address"
              label="Address"
              prepend-icon="mdi-home"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="contact"
              label="Contact no"
              prepend-icon="mdi-cellphone-basic"
              required
              type="number"
            ></v-text-field>
          </v-col>

          <!-- classess  -->
          <v-col cols="12" md="4">
            <v-select
              v-model="selectmaritals"
              :items="maritals"
              label="Select"
              hint="Pick your Marital Status"
              persistent-hint
            ></v-select>
          </v-col>
          <v-col>
            <v-select
              v-model="selectsubject"
              :items="subject"
              prepend-icon="mdi-school"
              label="Subjects"
              hint="Pick Subject You Teach"
              persistent-hint
            ></v-select>
          </v-col>
          <v-col cols="12" md="4"> </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="nin"
              label="National Identity Number(Nin)"
              prepend-icon="mdi-identifier"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="refname"
              label="Referee Name"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="refcontact"
              label="Referee Contact number"
              prepend-icon="mdi-cellphone-basic"
              required
            ></v-text-field>
          </v-col>
        </v-row>

        <v-btn class="success my-3" @click="savestuff"> Save </v-btn>
        <v-btn
          class="warning ml-2"
          @click="$router.push('/teachers')"
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
import Navbar from '@/components/Navbar';
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
    address: '',
    contact: '',
    email: '',
    nin: '',
    refname: '',
    refcontact: '',
    maritals: ['Single', 'Married', 'Divorced'],
    subject: [
      'English',
      'Science',
      'Math',
      'SST',
      'Art',
      'Computer',
      'RE',
      'Music',
    ],
    selectsubject: [],
    selectmaritals: [],
    selecttitle: '',
    title: ['Mr', 'Miss', 'Mrs'],
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
        .post('api/t/create', {
          firstname: this.firstname,
          secondname: this.lastname,
          nin: this.nin,
          subject: this.selectsubject,
          title: this.selecttitle,
          maritals: this.selectmaritals,
          contact: this.contact,
          address: this.address,
          email: this.email,
          refname: this.refname,
          refcontact: this.refcontact,
        })
        .then((result) => {
          this.snackbar = true;
          console.log(result.data);
        });
    },
  },
};
</script>
