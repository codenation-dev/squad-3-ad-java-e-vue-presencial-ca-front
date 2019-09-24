<template>
  <div>
    <RouterLink :to="{ name: 'company-create' }">
      <span>Adicionar empresa</span>
    </RouterLink>
    <p v-for="company in companies" :key="company.id">
      <span>Id: {{ company.id }}</span>
      <span>Name: {{ company.name }}</span>
      <RouterLink
        :to="{ name: 'company-edit', params: { id: company.id } }"
        data-test="editar"
      >
        <span>Editar</span>
      </RouterLink>
      <button data-test="apagar" @click="deleteContact(company.id)">
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
      companies: [
        { id: "idcompany01", name: "idcompany01" },
        { id: "idcompany02", name: "idcompany02" },
        { id: "idcompany03", name: "idcompany03" }
      ]
    };
  },
  methods: {
    async load() {
      const getCompaniesURL = `${domain}/companies`;

      const { data } = await axios.get(getCompaniesURL);
      this.companies = data;
    }
  },
  created() {
    //this.load();
  }
};
</script>
