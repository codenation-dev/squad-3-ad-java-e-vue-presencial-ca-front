<template>
  <div>
    <RouterLink :to="{name: 'application-create'}">
      <span>Adicionar aplicação</span>
    </RouterLink>
    <p v-for="application in applications" :key="application.id">
      <span>Id: {{application.id}}</span>
      <span>Name: {{application.name}}</span>
      <RouterLink
        :to="{name: 'application-edit', params: { id: application.id}}"
        data-test="editar"
      >
        <span>Editar</span>
      </RouterLink>
      <button data-test="apagar" @click="deleteContact(application.id)">
        <span>deletar</span>
      </button>
    </p>
  </div>
</template>

<script>
import axios from "axios";
import { domain } from "env";

export default {
  data() {
    return {
      applications: [
        { id: "idapplications01", name: "nmapplications01" },
        { id: "idapplications02", name: "nmapplications02" },
        { id: "idapplications03", name: "nmapplications03" }
      ]
    };
  },
  methods: {
    async load() {
      const getApplicationsURL = `${domain}/applications`;

      const { data } = await axios.get(getApplicationsURL);
      this.applications = data;
    }
  },
  created() {
    //this.load();
  }
};
</script>
