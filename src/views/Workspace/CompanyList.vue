<template>
  <div>
    <RouterLink :to="{ name: 'company-create' }">
      <span>Adicionar empresa</span>
    </RouterLink>
    <p v-for="company in companies" :key="company.id">
      <span>Id: {{ company.id }}</span>
      <span>Name: {{ company.name }}</span>
      <RouterLink :to="{ name: 'company-edit', params: { id: company.id } }" data-test="editar">
        <span>Editar</span>
      </RouterLink>
      <button data-test="apagar" @click="deleteContact(company.id)">
        <span>deletar</span>
      </button>
    </p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("companies", ["companies"])
  },
  methods: {
    ...mapActions("companies", ["loadAllCompanies"])
  },
  created() {
    this.loadAllCompanies();
  }
};
</script>
