<template>
  <div>
    <section class="main-section">
      <card-list v-for="log in logs" :key="log.id">
        <template #title>
          <font-awesome-icon icon="bug" />
          <b class="menu-text">{{ log.createdAt }}:</b>
          <b class="menu-text">{{ log.title }}</b>
        </template>
        <template #actions>
          <card-delete-button @click="deleteLog(log.id)" />
          <card-file-button @click="updateLog(log.id)" v-show="!log.toFile" />
          <card-view-button name="log-view" :params="{ id: `${log.id}` }" />
        </template>
        <template #body>
          <div class="row">
            <div class="col-sm">
              <b>Level:</b>
              <span
                class="menu-text badge badge-secondary"
                :class="{
                  'bg-info': log.levelLog == 'INFO',
                  'bg-warning': log.levelLog == 'WARNING',
                  'bg-danger': log.levelLog == 'FATAL',
                  'bg-success': log.levelLog == 'TRACE',
                  'bg-dark': log.levelLog == 'ERROR'
                }"
                >{{ log.levelLog }}</span
              >
            </div>
            <div class="col-sm">
              <b>Origem:</b>
              <span
                class="menu-text badge badge-secondary"
                :class="{
                  'bg-warning': log.serverOrigin == 'HOMOLOGATION',
                  'bg-danger': log.serverOrigin == 'PRODUCTION'
                }"
                >{{ log.serverOrigin }}</span
              >
            </div>
            <div class="col-sm">
              <b>Aplicação:</b>
              {{ log.application }}
            </div>
            <div class="col-sm">
              <b>Empresa:</b>
              {{ log.company }}
            </div>
            <div class="col-sm">
              <b>Fonte de log:</b>
              {{ log.logSource }}
            </div>
          </div>
        </template>
        <template #footer>
          <div class="card-footer">
            <b>Descrição:</b>
            {{ log.details }}
          </div>
        </template>
      </card-list>
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
          <div
            class="dropup-filter-menu dropdown-menu"
            onclick=" event.stopPropagation();"
          >
            <form class="px-4 py-3">
              <div class="form-group">
                <label for="companiesSelect">Empresa</label>
                <select
                  class="form-control"
                  id="companiesSelect"
                  v-model="form.company"
                  @change="readAllLogs(form)"
                >
                  <option></option>
                  <option
                    v-for="company in companies"
                    :key="company.id"
                    :value="company.id"
                  >
                    <span>{{ company.name }}</span>
                  </option>
                </select>
              </div>
              <div class="form-group">
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
                    >{{ application.name }}</option
                  >
                </select>
              </div>
              <div class="form-group">
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
                    >{{ serverOrigin.name }}</option
                  >
                </select>
              </div>
              <div class="form-group">
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
                    >{{ levelLog.name }}</option
                  >
                </select>
              </div>
              <div class="form-group">
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
              <div class="form-group">
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                    v-model="form.toFile"
                    @click="readAllLogs(form)"
                  />
                  <label class="form-check-label" for="exampleCheck1"
                    >Arquivado</label
                  >
                </div>
              </div>
            </form>
          </div>
        </li>
      </ul>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2 form-control-sm"
            type="search"
            placeholder="Buscar descrição"
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
        <button
          type="button"
          class="btn btn-danger"
          :class="{ live: live }"
          @click="updateLiveLog(live, form)"
        >
          <font-awesome-icon
            icon="circle"
            style="margin-bottom: 4px; margin-right: 4px;"
          />Live
        </button>
        <button
          type="button"
          class="btn btn-success"
          @click="readAllLogs(form)"
          style="margin-left: 8px;"
        >
          <font-awesome-icon
            icon="sync-alt"
            style="margin-bottom: 4px; margin-right: 4px; "
          />Atualizar
        </button>
        <nav
          aria-label="Page navigation example"
          style="max-height: 38px; margin-left: 8px; margin-right: -8px;"
        >
          <ul class="pagination">
            <li class="page-item">
              <a
                class="page-link"
                href="#"
                aria-label="Previous"
                @click="updateToPreviousPage(form)"
              >
                <span aria-hidden="true">&laquo;</span>
                <span class="sr-only">Previous</span>
              </a>
            </li>
            <li class="page-item" :class="{ active: pageNumber == 1 }">
              <a class="page-link" href="#">{{
                pageNumber - 1 > 0 ? pageNumber - 1 : 1
              }}</a>
            </li>
            <li
              class="page-item"
              :class="{ active: pageNumber > 1 && pageNumber < 3 }"
            >
              <a class="page-link" href="#">{{
                pageNumber > 1 ? pageNumber : 2
              }}</a>
            </li>
            <li class="page-item" :class="{ active: pageNumber > 2 }">
              <a class="page-link" href="#">{{
                pageNumber > 2 ? pageNumber + 1 : 3
              }}</a>
            </li>
            <li class="page-item">
              <a
                class="page-link"
                href="#"
                aria-label="Next"
                @click="updateToNextPage(form)"
              >
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
import CardList from "@/components/Orgs/CardList.vue";
import CardDeleteButton from "@/components/Orgs/CardDeleteButton.vue";
import CardFileButton from "@/components/Orgs/CardFileButton.vue";
import CardViewButton from "@/components/Orgs/CardViewButton.vue";

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
      },
      live: false
    };
  },
  components: {
    CardList,
    CardDeleteButton,
    CardFileButton,
    CardViewButton
  },
  computed: {
    ...mapGetters("logs", ["logs", "pageNumber"]),
    ...mapGetters("companies", ["companies"]),
    ...mapGetters("applications", ["applications"]),
    ...mapGetters("serverOrigins", ["serverOrigins"]),
    ...mapGetters("levelLogs", ["levelLogs"])
  },
  methods: {
    ...mapActions("logs", [
      "readAllLogs",
      "updateLog",
      "updateToNextPage",
      "updateToPreviousPage",
      "deleteLog"
    ]),
    ...mapActions("users", ["readLoggedUser"]),
    ...mapActions("companies", ["readAllCompanies"]),
    ...mapActions("applications", ["readAllApplications"]),
    ...mapActions("serverOrigins", ["readAllServerOrigins"]),
    ...mapActions("levelLogs", ["loadAllLevelLogs"]),
    updateLiveLog(live, form) {
      if (!live) {
        this.readAllLogs(form);
        this.live = setInterval(() => {
          this.readAllLogs(form);
        }, 7500);
      } else {
        clearInterval(live);
        this.live = false;
      }
    }
  },
  created() {
    this.readLoggedUser(this.$route.params.currentUser);
    this.readAllLogs();
    this.readAllCompanies();
    this.readAllApplications();
    this.readAllServerOrigins();
    this.loadAllLevelLogs();
  }
};
</script>

<style scoped>
.nav-bg-color {
  background-color: var(--secondary);
}

.dropup-filter-menu {
  width: 300px !important;
}

@keyframes blink {
  0% {
    background-color: rgba(255, 0, 0, 1);
  }
  50% {
    background-color: rgba(255, 0, 0, 0.25);
  }
  100% {
    background-color: rgba(255, 0, 0, 1);
  }
}
@-webkit-keyframes blink {
  0% {
    background-color: rgba(255, 0, 0, 1);
  }
  50% {
    background-color: rgba(255, 0, 0, 0.25);
  }
  100% {
    background-color: rgba(255, 0, 0, 1);
  }
}

.live {
  -moz-transition: all 0.5s ease-in-out;
  -webkit-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -moz-animation: blink normal 1.5s infinite ease-in-out;
  /* Firefox */
  -webkit-animation: blink normal 1.5s infinite ease-in-out;
  /* Webkit */
  -ms-animation: blink normal 1.5s infinite ease-in-out;
  /* IE */
  animation: blink normal 1.5s infinite ease-in-out;
  /* Opera */
}
</style>
