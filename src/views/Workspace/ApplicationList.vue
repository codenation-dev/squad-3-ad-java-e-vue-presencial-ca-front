<template>
  <div>
    <RouterLink :to="{ name: 'application-create' }">
      <span>Adicionar aplicação</span>
    </RouterLink>
    <p v-for="application in applications" :key="application.id">
      <span>Id: {{ application.id }}</span>
      <span>Name: {{ application.name }}</span>
      <RouterLink
        :to="{ name: 'application-edit', params: { id: application.id } }"
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
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("applications", ["applications"])
  },
  methods: {
    ...mapActions("applications", ["loadAllApplications"])
  },
  created() {
    this.loadAllApplications();
  }
};
</script>
