<template>
  <div class="home">
    <b-list-group>
      <b-list-group-item v-for="(item, key, index) in getAllLabels()" :key="index">
        <span v-for="(value, key, index ) in item" :key="index">
          {{key}}: {{value}}
          <br>
          <b-button @click="getLabel(key, value)" v-b-modal.modal-1>Edit</b-button>
        </span>
      </b-list-group-item>
    </b-list-group>
    <b-modal id="modal-1" title="BootstrapVue" ok-only ok-variant="secondary" ok-title="Cancel">
      <b-form-input v-model="id" placeholder="Enter your name"></b-form-input>
      <b-form-input v-model="label" placeholder="Enter your name"></b-form-input>
      <b-button @click="submit()">Submit</b-button>
    </b-modal>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Home",

  data: () => ({
    id: undefined,
    label: undefined
  }),
  created: function() {
    this.doGetAllLabelsRequest();
  },
  computed: {
    ...mapGetters("pictures", ["getPictures"])
  },
  methods: {
    ...mapActions("pictures", ["getAllPictures", "updatePictures"]),
    doGetAllLabelsRequest() {
      this.getAllPictures();
    },
    getAllLabels() {
      return this.getPictures;
    },
    getLabel(key, value) {
      this.id = key;
      this.label = value;
    },
    submit() {
      const theNewPicture = [...this.getPictures];
      theNewPicture.forEach(element => {
        for (let key in element) {
          if (key === this.id) {
            element[key] = this.label;
          }
        }
      });
      this.updatePictures(theNewPicture);
    }
  }
};
</script>
