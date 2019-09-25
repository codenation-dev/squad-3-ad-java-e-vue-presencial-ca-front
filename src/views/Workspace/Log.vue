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
        <option
          v-for="logSource in logSources"
          :key="logSource.id"
          :value="logSource.id"
        >{{logSource.name}}</option>
      </select>
    </div>
    <div class="field">
      <select>
        <option value="0">Level log:</option>
        <option
          v-for="levelLog in levelLogs"
          :key="levelLog.id"
          :value="levelLog.id"
        >{{levelLog.name}}</option>
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
    ...mapGetters("logSources", ["logSources"]),
    ...mapGetters("levelLogs", ["levelLogs"]),
    dataTestButton() {
      return parseInt(this.index) > -1 ? "salvar" : "criar";
    }
  },
  methods: {
    ...mapActions("logSources", ["loadAllLogSources"]),
    ...mapActions("levelLogs", ["loadAllLevelLogs"]),
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
    this.loadAllLogSources();
    this.loadAllLevelLogs();
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
