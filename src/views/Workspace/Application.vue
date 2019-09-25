<template>
  <form @submit.prevent="submit(form)">
    <div class="field">
      <input class="input" v-model="form.name" placeholder="Nome" />
    </div>
    <div class="field">
      <select>
        <option value="0">Empresa:</option>
        <option v-for="company in companies" :key="company.id" :value="company.id">
          <span>{{ company.name }}</span>
        </option>
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
        id: "idapplication01",
        name: "nmapplication01"
      }
    };
  },
  props: {
    index: Number
  },
  computed: {
    ...mapGetters("companies", ["companies"]),
    dataTestButton() {
      return parseInt(this.index) > -1 ? "salvar" : "criar";
    }
  },
  methods: {
    ...mapActions("companies", ["loadAllCompanies"]),
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
    this.loadAllCompanies();
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
