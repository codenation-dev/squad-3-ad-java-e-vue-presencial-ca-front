<template>
  <section class="container" style="text-align: left;">
    <div class="card">
      <div class="card-header">Empresas</div>
      <div class="card-body">
        <p class="card-text">
          <RouterLink :to="{ name: 'company-create', params: { id: '' }  }">
            <font-awesome-icon icon="plus" />
            <span style="padding-left: 8px;">Adicionar</span>
          </RouterLink>
        </p>
        <div class="container">
          <div class="row">
            <div class="col-sm"></div>
            <div class="col-md">ID</div>
            <div class="col-lg">Nome</div>
            <div class="col-sm"></div>
          </div>
          <div class="row" v-for="company in companies" :key="company.id">
            <div class="col-sm">
              <RouterLink
                class="icon-btn"
                :to="{ name: 'company-edit', params: { id: company.id } }"
                tag="button"
                :title="`Editar ${company.id}`"
              >
                <font-awesome-icon icon="edit" />
              </RouterLink>
            </div>
            <div class="col-md">{{ company.id }}</div>
            <div class="col-lg">{{ company.name }}</div>
            <div class="col-sm">
              <button
                class="icon-btn"
                @click="deleteCompany(company.id)"
                :title="`Excluir ${company.id}`"
              >
                <font-awesome-icon icon="trash-alt" />
              </button>
            </div>
          </div>
        </div>
        <router-link
          class="btn btn-secondary float-left back-btn"
          :to="{ name: 'workspace' }"
          tag="button"
        >
          <span>Voltar</span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("companies", ["companies"])
  },
  methods: {
    ...mapActions("companies", ["readAllCompanies", "deleteCompany"])
  },
  created() {
    this.readAllCompanies();
  }
};
</script>

<style scoped>
.icon-btn {
  background: none;
  border: none;
  color: var(--primary);
}

.back-btn {
  margin-top: 20px;
}

.row {
  border-bottom: 1px solid var(--secondary);
}

.row:hover {
  background-color: var(--secondary);
}
</style>
