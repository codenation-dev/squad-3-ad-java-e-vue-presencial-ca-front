<template>
  <div>
    <RouterLink :to="{ name: 'log-create' }">
      <span>Adicionar log</span>
    </RouterLink>
    <p v-for="log in logs" :key="log.id">
      <span>Id: {{ log.id }}</span>
      <RouterLink :to="{ name: 'log-edit', params: { id: log.id } }" data-test="editar">
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
    ...mapGetters("logs", ["logs"])
  },
  methods: {
    ...mapActions("logs", ["loadAllLogs"])
  },
  created() {
    this.loadAllLogs();
  }
};
</script>
