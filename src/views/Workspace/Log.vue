<template>
  <form @submit.prevent="submit(form)">
    <div class="field">
      <input class="input" v-model="form.title" placeholder="title" />
    </div>
    <div class="field">
      <input class="input" v-model="form.details" placeholder="details" />
    </div>
    <div class="field">
      <select>
        <option value="0">Fonte do log:</option>
        <option value="1">Fonte do log 01</option>
        <option value="2">Fonte do log 02</option>
        <option value="3">Fonte do log 03</option>
      </select>
    </div>
    <div class="field">
      <select>
        <option value="0">Log level:</option>
        <option value="1">INFO</option>
        <option value="2">TRACE</option>
        <option value="3">DEBUG</option>
        <option value="4">WARNING</option>
        <option value="5">ERROR</option>
        <option value="6">FATAL</option>
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
        id: "idlog01",
        title: "titlelog01",
        details: "",
        date: ""
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
