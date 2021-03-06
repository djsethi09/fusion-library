<template>
  <v-data-table :headers="headers" :items="books" sort-by="calories" class="elevation-1">
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Manage Books</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on">New Book</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.name" label="Book name"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.author" label="Author"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4"></v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.action="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
      <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>
</template>
<script>
export default {
  data: () => ({
    dialog: false,
    headers: [
      {
        text: "#",
        align: "start",
        sortable: false,
        value: "name"
      },
      { text: "Name", value: "name" },
      { text: "Author", value: "author" },
      { text: "Actions", value: "action", sortable: false }
    ],
    books: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      author: ""
    },
    defaultItem: {
      name: "",
      author: ""
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.books = [
        {
          name: "Book 1",
          author: "Mai"
        },
        {
          name: "Book 2",
          author: "Mai"
        },
        {
          name: "Book 3",
          author: "Mai"
        },
        {
          name: "Book 4",
          author: "Mai"
        },
        {
          name: "Book 5",
          author: "Mai"
        }
      ];
    },

    editItem(item) {
      this.editedIndex = this.books.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.books.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.books.splice(index, 1);
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.books[this.editedIndex], this.editedItem);
      } else {
        this.books.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>