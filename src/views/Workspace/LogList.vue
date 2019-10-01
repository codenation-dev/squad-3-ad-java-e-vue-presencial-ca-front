<template>
  <div>
    <section class="container main-section">
      <div class="card">
        <div class="card-header">
          <font-awesome-icon icon="bug" />
          <b class="menu-text">Logs</b>
        </div>
        <div class="card-body">
          <div class="container">
            <div class="row">
              <div class="col-2">
                <b>Level</b>
              </div>
              <div class="col-2">
                <b>Origem</b>
              </div>
              <div class="col-6">
                <b>Detalhes</b>
              </div>
              <div class="col-2">
                <b>Ações</b>
              </div>
            </div>
            <div class="row" v-for="log in logs" :key="log.id">
              <div class="col-2">{{ log.levelLog }}</div>
              <div class="col-2">{{ log.serverOrigin }}</div>
              <div class="col-6">{{ log.details }}</div>
              <div class="col-2">
                <RouterLink
                  class="icon-btn"
                  :to="{ name: 'log-view', params: { id: log.id } }"
                  tag="button"
                  :title="`Visualizar ${log.id}`"
                >
                  <font-awesome-icon icon="eye" />
                  <span class="menu-text">Visualizar</span>
                </RouterLink>
                <button class="icon-btn" @click="updateLog(log.id)" :title="`Arquivar ${log.id}`">
                  <font-awesome-icon icon="save" />
                  <span class="menu-text">Arquivar</span>
                </button>
                <button class="icon-btn" @click="deleteLog(log.id)" :title="`Excluir ${log.id}`">
                  <font-awesome-icon icon="trash-alt" />
                  <span class="menu-text">Excluir</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <nav class="navbar navbar-expand-lg navbar-dark bg-light fixed-bottom">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item dropup">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            style="margin-right: 8px;"
          >
            <font-awesome-icon icon="filter" />
            <span class="menu-text">Filtros</span>
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <div class="dropdown-item">
              <label for="companiesSelect">Empresa</label>
              <select
                class="form-control"
                id="companiesSelect"
                v-model="form.company"
                @change="readAllLogs(form)"
              >
                <option></option>
                <option v-for="company in companies" :key="company.id" :value="company.name">
                  <span>{{ company.name }}</span>
                </option>
              </select>
            </div>
            <div class="dropdown-item">
              <label for="applicationsSelect">Aplicação</label>
              <select
                class="form-control"
                id="applicationsSelect"
                v-model="form.application"
                @change="readAllLogs(form)"
              >
                <option></option>
                <option
                  v-for="application in applications"
                  :key="application.id"
                  :value="application.id"
                >{{ application.name }}</option>
              </select>
            </div>
            <div class="dropdown-item">
              <label for="serverOriginsSelect">Servidor de origem</label>
              <select
                class="form-control"
                id="serverOriginsSelect"
                v-model="form.serverOrigin"
                @change="readAllLogs(form)"
              >
                <option></option>
                <option
                  v-for="serverOrigin in serverOrigins"
                  :key="serverOrigin.id"
                  :value="serverOrigin.name"
                >{{ serverOrigin.name }}</option>
              </select>
            </div>
            <div class="dropdown-item">
              <label for="levelLogsSelect">Level</label>
              <select
                class="form-control"
                id="levelLogsSelect"
                v-model="form.levelLog"
                @change="readAllLogs(form)"
              >
                <option></option>
                <option
                  v-for="levelLog in levelLogs"
                  :key="levelLog.id"
                  :value="levelLog.name"
                >{{ levelLog.name }}</option>
              </select>
            </div>
            <div class="dropdown-item">
              <label for="OrderbySelect">Ordenar por</label>
              <select
                class="form-control"
                id="OrderbySelect"
                v-model="form.orderBy"
                @change="readAllLogs(form)"
              >
                <option>createdAt</option>
                <option>levelLog</option>
              </select>
            </div>
            <div class="dropdown-item">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
                v-model="form.toFile"
                @click="readAllLogs(form)"
              />
              <label class="form-check-label" for="exampleCheck1">Arquivado</label>
            </div>
          </div>
        </li>
      </ul>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2 form-control-sm"
            type="search"
            placeholder="Buscar detalhes"
            aria-label="Search"
            v-model="form.details"
            v-on:keyup.enter="readAllLogs(form)"
          />
          <button
            class="btn btn-outline-success my-2 my-sm-0"
            type="submit"
            @click="readAllLogs(form)"
          >
            <font-awesome-icon icon="search" />
          </button>
        </div>
      </div>
      <div class="form-inline my-2 my-lg-0">
        <button type="button" class="btn btn-danger" @click="updateLiveLog()">
          <font-awesome-icon icon="circle" style="margin-bottom: 4px; margin-right: 4px;" />Live
        </button>
        <button
          type="button"
          class="btn btn-success"
          @click="readAllLogs(form)"
          style="margin-left: 8px;"
        >
          <font-awesome-icon icon="sync-alt" style="margin-bottom: 4px; margin-right: 4px; " />Atualizar
        </button>
        <nav
          aria-label="Page navigation example"
          style="max-height: 38px; margin-left: 8px; margin-right: -8px;"
        >
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span class="sr-only">Previous</span>
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">1</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">2</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">3</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span class="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  </div>
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
        orderBy: "createdAt",
        toFile: [],
        details: ""
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
      "updateLog",
      "updateLiveLog",
      "deleteLog"
    ]),
    ...mapActions("companies", ["readAllCompanies"]),
    ...mapActions("applications", ["readAllApplications"]),
    ...mapActions("serverOrigins", ["readAllServerOrigins"]),
    ...mapActions("levelLogs", ["loadAllLevelLogs"]),
    ...mapActions("users", ["readCurrentUser"])
  },
  created() {
    this.readCurrentUser(this.$route.params.currentUser);
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

.nav-bg-color {
  background-color: var(--secondary);
}
</style>
