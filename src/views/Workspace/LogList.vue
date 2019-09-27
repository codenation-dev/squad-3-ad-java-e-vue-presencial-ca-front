<template>
  <section class="container" style="text-align: left;">
    <div class="card">
      <div class="card-header">
        <b>Logs</b>
      </div>
      <div class="card-body">
        <div class="container">
          <div class="row">
            <div class="col-3">
              <label for="companiesSelect">Empresa</label>
              <select
                class="form-control"
                id="companiesSelect"
                v-model="form.company"
                @change="readLogSearch(form)"
              >
                <option></option>
                <option
                  v-for="company in companies"
                  :key="company.id"
                  :value="company.name"
                >
                  <span>{{ company.name }}</span>
                </option>
              </select>
            </div>
            <div class="col-3">
              <label for="applicationsSelect">Aplicação</label>
              <select
                class="form-control"
                id="applicationsSelect"
                v-model="form.application"
                @change="readLogSearch(form)"
              >
                <option></option>
                <option
                  v-for="application in applications"
                  :key="application.id"
                  :value="application.id"
                  >{{ application.name }}</option
                >
              </select>
            </div>
            <div class="col-3">
              <label for="serverOriginsSelect">Servidor de origem</label>
              <select
                class="form-control"
                id="serverOriginsSelect"
                v-model="form.serverOrigin"
                @change="readLogSearch(form)"
              >
                <option></option>
                <option
                  v-for="serverOrigin in serverOrigins"
                  :key="serverOrigin.id"
                  :value="serverOrigin.name"
                  >{{ serverOrigin.name }}</option
                >
              </select>
            </div>
            <div class="col-3">
              <label for="levelLogsSelect">Level</label>
              <select
                class="form-control"
                id="levelLogsSelect"
                v-model="form.levelLog"
                @change="readLogSearch(form)"
              >
                <option></option>
                <option
                  v-for="levelLog in levelLogs"
                  :key="levelLog.id"
                  :value="levelLog.name"
                  >{{ levelLog.name }}</option
                >
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col-3">
              <label for="OrderbySelect">Ordenar por</label>
              <select
                class="form-control"
                id="OrderbySelect"
                v-model="form.orderBy"
                @change="readLogSearch(form)"
              >
                <option></option>
                <option>Level</option>
                <option>Frequência</option>
              </select>
            </div>
            <div class="col-3">
              <label for="SearchForSelect">Buscar por</label>
              <select
                class="form-control"
                id="SearchForSelect"
                v-model="form.searchFor"
              >
                <option></option>
                <option>Level</option>
                <option>Descrição</option>
                <option>Origem</option>
              </select>
            </div>
            <div class="col-6" style="padding-top: 32px;">
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  aria-label="buscar por"
                  aria-describedby="basic-addon2"
                  v-model="form.searchForText"
                />
                <div class="input-group-append">
                  <button
                    class="btn btn-outline-secondary"
                    type="button"
                    @click="readLogSearch(form)"
                  >
                    <font-awesome-icon icon="search" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-2">
              <b>ID</b>
            </div>
            <div class="col-8">
              <b>Nome</b>
            </div>
            <div class="col-2">
              <b>Ações</b>
            </div>
          </div>
          <div class="row" v-for="log in logs" :key="log.id">
            <div class="col-2">{{ log.id }}</div>
            <div class="col-8">{{ log.name }}</div>
            <div class="col-2">
              <RouterLink
                class="icon-btn"
                :to="{ name: 'log-view', params: { id: log.id } }"
                tag="button"
                :title="`Visualizar ${log.id}`"
              >
                <font-awesome-icon icon="eye" />
                <span style="padding-left: 4px;">Visualizar</span>
              </RouterLink>
              <button
                class="icon-btn"
                @click="updateLog(log.id)"
                :title="`Arquivar ${log.id}`"
              >
                <font-awesome-icon icon="save" />
                <span style="padding-left: 4px;">Arquivar</span>
              </button>
              <button
                class="icon-btn"
                @click="deleteLog(log.id)"
                :title="`Excluir ${log.id}`"
              >
                <font-awesome-icon icon="trash-alt" />
                <span style="padding-left: 4px;">Excluir</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      form: {
        company: "",
        application: "",
        serverOrigin: "",
        levelLog: "",
        orderBy: "",
        searchFor: "",
        searchForText: ""
      }
    };
  },
  computed: {
    ...mapGetters("logs", ["logs"]),
    ...mapGetters("companies", ["companies"]),
    ...mapGetters("applications", ["applications"]),
    ...mapGetters("serverOrigins", ["serverOrigins"]),
    ...mapGetters("levelLogs", ["levelLogs"])
  },
  methods: {
    ...mapActions("logs", [
      "readAllLogs",
      "readLogSearch",
      "updateLog",
      "deleteLog"
    ]),
    ...mapActions("companies", ["readAllCompanies"]),
    ...mapActions("applications", ["readAllApplications"]),
    ...mapActions("serverOrigins", ["readAllServerOrigins"]),
    ...mapActions("levelLogs", ["loadAllLevelLogs"])
  },
  created() {
    this.readAllLogs();
    this.readAllCompanies();
    this.readAllApplications();
    this.readAllServerOrigins();
    this.loadAllLevelLogs();
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
