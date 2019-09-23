<template>
  <div>
    <p v-for="company in companies" :key="company.id">
      <span>Id: {{company.id}}</span>
    </p>
  </div>
</template>

<script>
import axios from "axios";
import { domain } from "env";

export default {
  data() {
    return {
      companies: []
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
    this.load();
  }
};
</script>
