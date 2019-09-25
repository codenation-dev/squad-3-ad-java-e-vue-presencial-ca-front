<template>
  <form @submit.prevent="submit(form)">
    <div class="field">
      <input class="input" v-model="form.name" placeholder="Nome" />
    </div>
    <div class="field">
      <input class="input" v-model="form.url" placeholder="URL" />
    </div>
    <div class="field">
      <select>
        <option value="0">Aplicação:</option>
        <option
          v-for="application in applications"
          :key="application.id"
          :value="application.id"
          >{{ application.name }}</option
        >
      </select>
    </div>
    <div class="field">
      <select>
        <option value="0">Ambiente:</option>
        <option
          v-for="serverOrigin in serverOrigins"
          :key="serverOrigin.id"
          :value="serverOrigin.id"
          >{{ serverOrigin.name }}</option
        >
      </select>
    </div>

    <button class="button">Cadastrar</button>
  </form>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import axios from "axios";
import { domain } from "env";
import router from "@/router";

export default {
  data() {
    return {
      form: {
        id: "idlogsource01",
        name: "nmlogsource01",
        url: ""
      }
    };
  },
  props: {
    index: Number
  },
  computed: {
    ...mapGetters("applications", ["applications"]),
    ...mapGetters("serverOrigins", ["serverOrigins"]),
    dataTestButton() {
      return parseInt(this.index) > -1 ? "salvar" : "criar";
    }
  },
  methods: {
    ...mapActions("applications", ["loadAllApplications"]),
    ...mapActions("serverOrigins", ["loadAllServerOrigins"]),
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
    this.loadAllApplications();
    this.loadAllServerOrigins();
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
