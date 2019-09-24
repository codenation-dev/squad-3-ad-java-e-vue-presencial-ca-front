<template>
  <div>
    <RouterLink :to="{name: 'log-create'}">
      <span>Adicionar log</span>
    </RouterLink>
    <p v-for="log in logs" :key="log.id">
      <span>Id: {{log.id}}</span>
      <RouterLink :to="{name: 'log-edit', params: { id: log.id}}" data-test="editar">
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
        { id: "idlog01", name: "nmlog01" },
        { id: "idlog02", name: "nmlog02" },
        { id: "idlog03", name: "nmlog03" }
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
