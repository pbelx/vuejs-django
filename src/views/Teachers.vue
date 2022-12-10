<template>
  <div class="mt-0 p-4">
    <Navbar />
    <v-container>
      <v-btn class="success ml-3" @click="getstudents">
        <span>
          <v-icon class="mr-2">mdi-view-list </v-icon>
        </span>
        Teachers
      </v-btn>
      <v-btn
        class="primary ml-1"
        @click="$router.push('/AddTeacher')"
      >
        <span>
          <v-icon class="mr-1">mdi-account-plus </v-icon>
        </span>
        Add
      </v-btn>
      <div>
        <v-data-table
          :headers="headers"
          :items="students"
          item-key="id"
          :items-per-page="5"
          class="elevation-2"
          :loading="load"
          loading-text="Loading... Please wait"
          :search="search"
        >
          <!-- <template v-slot:top>
            <v-text-field
              v-model="search"
              label="Search "
              rounded
              dense
              append-icon="mdi-magnify"
              prepend-icon="mdi-account-search"
              class="mx-4 mt-2"
            ></v-text-field>
          </template> -->

          <template v-slot:top>
            <v-text-field
              solo
              dense
              rounded
              v-model="search"
              label="Search "
              append-icon="mdi-magnify"
              prepend-icon="mdi-account-search"
              class="mx-4 mt-3"
              md="5"
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
import Navbar from '@/components/Navbar';
export default {
  components: {
    Navbar,
  },
  methods: {
    getstudents() {
      this.load = true;
      axios.get('api/t').then((result) => {
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
        { text: 'Subject', value: 'subject' },
        { text: 'Address', value: 'address' },
        { text: 'Contact', value: 'contact' },
        { text: 'Title', value: 'title' },
        { text: 'Email', value: 'email' },
        { text: 'Refree', value: 'refname' },
        { text: 'RefreeNo', value: 'refcontact' },
        { text: 'Marital Status', value: 'maritals' },
        { text: 'id', value: 'id', sortable: true },
      ],
      students: [
        {
          firstname: 'James',
          secondname: 'Blunt',
          subject: '3232',
          title: 'miss',
          maritals: 'single',
          id: 6,
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
