<template>
  <div>
    <RouterLink :to="{ name: 'log-source-create' }">
      <span>Adicionar fonte de logs</span>
    </RouterLink>
    <p v-for="logSource in logSources" :key="logSource.id">
      <span>Id: {{ logSource.id }}</span>
      <RouterLink
        :to="{ name: 'log-source-edit', params: { id: logSource.id } }"
        data-test="editar"
      >
        <span>Editar</span>
      </RouterLink>
      <button data-test="apagar" @click="deleteContact(logSource.id)">
        <span>deletar</span>
      </button>
    </p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("logSources", ["logSources"])
  },
  methods: {
    ...mapActions("logSources", ["loadAllLogSources"])
  },
  created() {
    this.loadAllLogSources();
  }
};
</script>
