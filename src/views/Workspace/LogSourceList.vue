<template>
  <div>
    <RouterLink :to="{name: 'log-source-create'}">
      <span>Adicionar fonte de logs</span>
    </RouterLink>
    <p v-for="log in logs" :key="log.id">
      <span>Id: {{log.id}}</span>
      <RouterLink :to="{name: 'log-source-edit', params: { id: log.id}}" data-test="editar">
        <span>Editar</span>
      </RouterLink>
      <button data-test="apagar" @click="deleteContact(log.id)">
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
      logs: [
        { id: "idlogsource01", name: "nmlogsource01" },
        { id: "idlogsource02", name: "nmlogsource02" },
        { id: "idlogsource03", name: "nmlogsource03" }
      ]
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
    //this.load();
  }
};
</script>
