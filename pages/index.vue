<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-center">
        <h2>Library</h2>
      </div>
      <v-data-table :headers="headers" :items="books" class="elevation-1">
        <template v-slot:item.status="{ item }">
          <v-chip :color="getColor(item.status)" dark>{{item.status }}</v-chip>
        </template>
        <template v-slot:item.availableOn="{ item }">
          <v-btn x-small color="secondary" v-if="item.status=='free'">Get this</v-btn>
        </template>
      </v-data-table>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      headers: [
        {
          text: "#",
          align: "start",
          sortable: false,
          value: "id"
        },
        { text: "Name", value: "name" },
        { text: "Author", value: "author" },
        { text: "Issued By", value: "issuedBy" },
        { text: "Available on", value: "availableOn" },
        { text: "Status", value: "status" }
      ],
      books: [
        {
          id: "001",
          name: "ML Book",
          author: "Sridharan",
          issuedBy: "Dheeraj",
          availableOn: "",
          status: "free"
        },
        {
          id: "002",
          name: "ML Book",
          author: "Sridharan",
          issuedBy: "Dheeraj",
          availableOn: "2020-04-08",
          status: "issued"
        },
        {
          id: "001",
          name: "ML Book",
          author: "Sridharan",
          issuedBy: "Dheeraj",
          availableOn: "2020-04-08",
          status: "free"
        },
        {
          id: "001",
          name: "ML Book",
          author: "Sridharan",
          issuedBy: "Dheeraj",
          availableOn: "2020-04-08",
          status: "issued"
        },
        {
          id: "001",
          name: "ML Book",
          author: "Sridharan",
          issuedBy: "Dheeraj",
          availableOn: "2020-04-08",
          status: "issued"
        },
        {
          id: "001",
          name: "ML Book",
          author: "Sridharan",
          issuedBy: "Dheeraj",
          availableOn: "2020-04-08",
          status: "free"
        },
        {
          id: "001",
          name: "ML Book",
          author: "Sridharan",
          issuedBy: "Dheeraj",
          availableOn: "2020-04-08",
          status: "free"
        }
      ]
    };
  },
  methods: {
    getColor(status) {
      if (status == "free") return "green";
      else if (status == "issued") return "red";
      else return "orange";
    }
  }
};
</script>
