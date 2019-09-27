<template>
  <section class="container" style="text-align: left;">
    <div class="card">
      <div class="card-header">Empresas</div>
      <div class="card-body">
        <p class="card-text">
          <RouterLink :to="{ name: 'company-create', params: { id: '' } }">
            <font-awesome-icon icon="plus" />
            <span style="padding-left: 4px;">Adicionar</span>
          </RouterLink>
        </p>
        <div class="container">
          <div class="row">
            <div class="col-md">
              <b>ID</b>
            </div>
            <div class="col-lg">
              <b>Nome</b>
            </div>
            <div class="col-sm">
              <b>Ações</b>
            </div>
            <div class="col-sm"></div>
          </div>
          <div class="row" v-for="company in companies" :key="company.id">
            <div class="col-md">{{ company.id }}</div>
            <div class="col-lg" style="margin: 8px;">{{ company.name }}</div>
            <div class="col-sm">
              <RouterLink
                class="icon-btn"
                :to="{ name: 'company-edit', params: { id: company.id } }"
                tag="button"
                :title="`Editar ${company.id}`"
              >
                <font-awesome-icon icon="edit" />
                <span style="padding-left: 4px;">Editar</span>
              </RouterLink>
            </div>
            <div class="col-sm">
              <a
                class="icon-btn"
                @click="deleteCompany(company.id)"
                :title="`Excluir ${company.id}`"
              >
                <font-awesome-icon icon="trash-alt" />
                <span style="padding-left: 4px;">Excluir</span>
              </a>
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
/*
table
juntar colunas ações

fontes:
color: black;
opacity: 0.8;
*/
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
  border-bottom: 1px solid rgb(0, 0, 0, 0.2);
}

.row:hover {
  background-color: #f2f2f2;
}
</style>
