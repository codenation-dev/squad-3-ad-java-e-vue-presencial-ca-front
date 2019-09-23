<template>
  <div>
    <p v-for="application in applications" :key="application.id">
      <span>Id: {{application.id}}</span>
    </p>
  </div>
</template>

<script>
import axios from "axios";
import { domain } from "env";

export default {
  data() {
    return {
      applications: []
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
    this.load();
  }
};
</script>
