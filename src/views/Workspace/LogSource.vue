<template>
  <section class="container main-section" style="text-align: left;">
    <div class="card">
      <div class="card-header">
        <font-awesome-icon icon="code" />
        <b class="menu-text">{{ logSourceDataTitle }}</b>
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
            />
          </div>
          <div class="form-group">
            <label for="applicationsSelect">Aplicação</label>
            <select class="form-control" id="applicationsSelect">
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
            <select class="form-control" id="serverOriginsSelect">
              <option
                v-for="serverOrigin in serverOrigins"
                :key="serverOrigin.id"
                :value="serverOrigin.id"
                >{{ serverOrigin.name }}</option
              >
            </select>
          </div>
          <router-link
            class="btn btn-secondary float-left"
            :to="{ name: 'log-source-list' }"
            tag="button"
          >
            <span>Cancelar</span>
          </router-link>
          <input
            class="btn btn-primary float-right"
            type="submit"
            value="Salvar"
          />
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
    ...mapGetters("logSources", ["logSource"]),
    ...mapGetters("applications", ["applications"]),
    ...mapGetters("serverOrigins", ["serverOrigins"]),
    logSourceDataTitle() {
      return this.id ? "Edição de fonte de logs" : "Cadastro de fonte de logs";
    }
  },
  methods: {
    ...mapActions("applications", ["readAllApplications"]),
    ...mapActions("serverOrigins", ["readAllServerOrigins"]),
    ...mapActions("logSources", [
      "createLogSource",
      "readLogSource",
      "updateLogSource"
    ]),
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
      this.readLogSource(this.id);
    }
  }
};
</script>
