<template>
  <div>
    Nome:
    <input type="text" data-test="nome" v-model="form.name" />
    <button :data-test="dataTestButton" @click="submit(form, index)">
      {{ dataTestButton }}
    </button>
  </div>
</template>

<script>
import axios from "axios";
import { domain } from "env";
import router from "@/router";

export default {
  data() {
    return {
      form: {
        id: "iduser01",
        name: "nmuser01"
      }
    };
  },
  props: {
    index: Number
  },
  computed: {
    //...mapGetters(["contacts"]),
    dataTestButton() {
      return parseInt(this.index) > -1 ? "salvar" : "criar";
    }
  },
  methods: {
    //...mapActions(["createContact", "updateContact"]),
    submit(form, index) {
      if (parseInt(this.index) > -1) {
        this.updateContact({ form, index });
      } else {
        this.createContact(form);
      }
      router.push("/");
    },
    async load() {
      const getCompaniesURL = `${domain}/companies`;

      const { data } = await axios.get(getCompaniesURL);
      this.companies = data;
    }
  },
  created() {
    //this.load();
    if (parseInt(this.index) > -1) {
      let contact = this.contacts[this.index];

      if (contact) {
        this.form = contact;
      } else {
        router.push("/404");
      }
    }
  }
};
</script>
