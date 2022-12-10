<template>
  <div class="mt-0 p-4">
    <Navbar />
    <v-container>
      <v-btn class="success ml-3 mb-1" @click="getstudents">
        <span>
          <v-icon class="mr-2">mdi-view-list </v-icon>
        </span>
        students
      </v-btn>
      <v-btn
        class="primary ml-1 mb-1"
        @click="$router.push('/AddStudent')"
      >
        <span>
          <v-icon class="mr-1">mdi-account-plus </v-icon>
        </span>
        Add
      </v-btn>
      <div>
        <v-data-table
          dense
          :headers="headers"
          :items="students"
          item-key="id"
          :items-per-page="5"
          class="elevation-1"
          :loading="load"
          loading-text="Loading... Please wait"
          :search="search"
        >
          <template v-slot:top>
            <v-text-field
              solo
              dense
              rounded
              v-model="search"
              label="Search "
              append-icon="mdi-magnify"
              prepend-icon="mdi-account-search"
              class="mx-4 mt-2"
            ></v-text-field>
          </template>
          <!-- <template v-slot:body>
            <tr>
              <td></td>
              <td>
                <v-text-field
                  v-model="calories"
                  type="number"
                  label="Less than"
                ></v-text-field>
              </td>
              <td colspan="4"></td>
            </tr>
          </template> -->
        </v-data-table>
      </div>
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
  methods: {
    getstudents() {
      this.load = true;
      axios.get('api/all').then((result) => {
        this.students = result.data;
        this.load = false;
      });
    },
  },
  data() {
    return {
      search: '',
      load: false,
      headers: [
        {
          text: 'FirstName',
          align: 'start',
          sortable: true,
          value: 'firstname',
        },
        {
          text: 'SecondName',

          sortable: true,
          value: 'secondname',
        },
        { text: 'Class', value: 'studentclass' },
        { text: 'Gender', value: 'studentgender' },
        { text: 'Email', value: 'parentemail' },
        { text: 'BDate', value: 'studentbirth' },
        { text: 'Mother', value: 'mothersname' },
        { text: 'Father', value: 'fathersname' },
        { text: 'MothersNo', value: 'mothersnumber' },
        { text: 'FathersNo', value: 'fathersnumber' },
        { text: 'Guardian', value: 'emergencyname' },
        { text: 'GuardianNo', value: 'emergencyno' },

        { text: 'ID', value: 'id', sortable: true },
      ],
      students: [
        {
          firstname: 'james',
          secondname: 'blunt',
          password: '3232',
          id: 6,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
