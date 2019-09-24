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
        <option value="1">Aplicação 01</option>
        <option value="2">Aplicação 02</option>
        <option value="3">Aplicação 03</option>
      </select>
    </div>
    <div class="field">
      <select>
        <option value="0">Ambiente:</option>
        <option value="1">PRODUCTION</option>
        <option value="2">HOMOLOGATION</option>
        <option value="3">DEVELOPMENT</option>
      </select>
    </div>

    <button class="button">Cadastrar</button>
  </form>
</template>

<script>
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
