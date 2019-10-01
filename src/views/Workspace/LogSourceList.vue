<template>
  <section class="jumbotron main-section">
    <div class="card">
      <div class="card-header">
        <font-awesome-icon icon="code" />
        <b class="menu-text">Fontes de log</b>
      </div>
      <div class="card-body">
        <p class="card-text">
          <RouterLink :to="{ name: 'log-source-create', params: { id: '' } }">
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
            <div class="col-4">
              <b>Ações</b>
            </div>
          </div>
          <div class="row" v-for="logSource in logSources" :key="logSource.id">
            <div class="col-2">{{ logSource.id }}</div>
            <div class="col-6">{{ logSource.name }}</div>
            <div class="col-4">
              <RouterLink
                class="icon-btn"
                :to="{ name: 'log-source-edit', params: { id: logSource.id } }"
                tag="button"
                :title="`Editar ${logSource.id}`"
              >
                <font-awesome-icon icon="pencil-alt" />
                <span style="padding-left: 4px;">Editar</span>
              </RouterLink>
              <button
                class="icon-btn"
                @click="deleteLogSource(logSource.id)"
                :title="`Excluir ${logSource.id}`"
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
    ...mapGetters("logSources", ["logSources"])
  },
  methods: {
    ...mapActions("logSources", ["readAllLogSources", "deleteLogSource"])
  },
  created() {
    this.readAllLogSources();
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
