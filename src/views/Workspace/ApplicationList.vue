<template>
  <section class="container" style="text-align: left;">
    <div class="card">
      <div class="card-header">
        <b>Aplicações</b>
      </div>
      <div class="card-body">
        <p class="card-text">
          <RouterLink :to="{ name: 'application-create', params: { id: '' } }">
            <font-awesome-icon icon="plus" />
            <span style="padding-left: 4px;">Adicionar</span>
          </RouterLink>
        </p>
        <div class="container">
          <div class="row">
            <div class="col-2">
              <b>ID</b>
            </div>
            <div class="col-6">
              <b>Nome</b>
            </div>
            <div class="col-2">
              <b>Ações</b>
            </div>
          </div>
          <div class="row" v-for="application in applications" :key="application.id">
            <div class="col-2">{{ application.id }}</div>
            <div class="col-6">{{ application.name }}</div>
            <div class="col-4">
              <RouterLink
                class="icon-btn"
                :to="{ name: 'application-edit', params: { id: application.id } }"
                tag="button"
                :title="`Editar ${application.id}`"
              >
                <font-awesome-icon icon="pencil-alt" />
                <span style="padding-left: 4px;">Editar</span>
              </RouterLink>
              <button
                class="icon-btn"
                @click="deleteApplication(application.id)"
                :title="`Excluir ${application.id}`"
              >
                <font-awesome-icon icon="trash-alt" />
                <span style="padding-left: 4px;">Excluir</span>
              </button>
            </div>
          </div>
        </div>
        <router-link
          class="btn btn-secondary float-left back-btn"
          :to="{ name: 'log-list' }"
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
    ...mapGetters("applications", ["applications"])
  },
  methods: {
    ...mapActions("applications", ["readAllApplications", "deleteApplication"])
  },
  created() {
    this.readAllApplications();
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
  padding-top: 8px;
  padding-bottom: 8px;
}

.row:hover {
  background-color: #f2f2f2;
}
</style>
