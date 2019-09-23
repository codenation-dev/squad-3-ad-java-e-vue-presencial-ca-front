<template>
  <div>
    <p v-for="log in logs" :key="log.id">
      <span>Id: {{log.id}}</span>
    </p>
  </div>
</template>

<script>
import axios from "axios";
import { domain } from "env";

export default {
  data() {
    return {
      logs: []
    };
  },
  methods: {
    async load() {
      const getLogsURL = `${domain}/logs`;

      const { data } = await axios.get(getLogsURL);
      this.logs = data;
    }
  },
  created() {
    this.load();
  }
};
</script>
