<template>
  <div>
    <RouterLink :to="{ name: 'log-source-create' }">
      <span>Adicionar fonte de logs</span>
    </RouterLink>
    <p v-for="log in logsources" :key="log.id">
      <span>Id: {{ log.id }}</span>
      <RouterLink :to="{ name: 'log-source-edit', params: { id: log.id } }" data-test="editar">
        <span>Editar</span>
      </RouterLink>
      <button data-test="apagar" @click="deleteContact(log.id)">
        <span>deletar</span>
      </button>
    </p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("logsources", ["logsources"])
  },
  methods: {
    ...mapActions("logsources", ["loadAllLogSources"])
  },
  created() {
    this.loadAllLogSources();
  }
};
</script>
