<template>
  <section class="jumbotron main-section">
    <div class="card">
      <div class="card-header">
        <font-awesome-icon icon="bug" />
        <b class="menu-text">Logs</b>
      </div>
      <div class="card-body">
        <form @submit.prevent="submit(form, id)">
          <div class="form-group">
            <label for="exampleInputEmail1">Nome</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Nome"
              v-model="form.name"
              disabled
            />
          </div>
          <div class="form-group">
            <label for="applicationsSelect">Aplicação</label>
            <select class="form-control" id="applicationsSelect" disabled>
              <option
                v-for="application in applications"
                :key="application.id"
                :value="application.id"
              >{{ application.name }}</option>
            </select>
          </div>
          <div class="form-group">
            <label for="serverOriginsSelect">Servidor de origem</label>
            <select class="form-control" id="serverOriginsSelect" disabled>
              <option
                v-for="serverOrigin in serverOrigins"
                :key="serverOrigin.id"
                :value="serverOrigin.id"
              >{{ serverOrigin.name }}</option>
            </select>
          </div>
          <router-link class="btn btn-secondary float-left" :to="{ name: 'log-list' }" tag="button">
            <span>Cancelar</span>
          </router-link>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import router from "@/router";
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      form: {
        name: ""
      }
    };
  },
  props: {
    id: {
      type: String,
      default: ""
    }
  },
  computed: {
    ...mapGetters("logs", ["log"]),
    ...mapGetters("logSources", ["logSource"]),
    ...mapGetters("applications", ["applications"]),
    ...mapGetters("serverOrigins", ["serverOrigins"])
  },
  methods: {
    ...mapActions("applications", ["readAllApplications"]),
    ...mapActions("serverOrigins", ["readAllServerOrigins"]),
    ...mapActions("logs", ["readLog"]),
    ...mapActions("companies", ["readAllCompanies"]),
    submit(form, id) {
      if (id) {
        this.updateLogSource({ id, form });
      } else {
        this.createLogSource({ id, form });
      }
      router.push({ name: "log-source-list" });
    }
  },
  created() {
    this.readAllApplications();
    this.readAllServerOrigins();
    if (this.id) {
      this.readLog(this.id);
    }
  }
};
</script>
