<template>
  <section class="container" style="text-align: left;">
    <div class="card">
      <div class="card-header">
        <b>{{ applicationDataTitle }}</b>
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
            <label for="companiesSelect">Empresa</label>
            <select class="form-control" id="companiesSelect">
              <option v-for="company in companies" :key="company.id" :value="company.id">
                <span>{{ company.name }}</span>
              </option>
            </select>
          </div>
          <router-link
            class="btn btn-secondary float-left"
            :to="{ name: 'application-list' }"
            tag="button"
          >
            <span>Cancelar</span>
          </router-link>
          <input class="btn btn-primary float-right" type="submit" value="Salvar" />
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
    ...mapGetters("applications", ["application"]),
    ...mapGetters("companies", ["companies"]),
    applicationDataTitle() {
      return this.id ? "Edição de aplicação" : "Cadastro de aplicação";
    }
  },
  methods: {
    ...mapActions("applications", [
      "createApplication",
      "readApplication",
      "updateApplication"
    ]),
    ...mapActions("companies", ["readAllCompanies"]),
    submit(form, id) {
      if (id) {
        this.updateApplication({ id, form });
      } else {
        this.createApplication({ id, form });
      }
      router.push({ name: "application-list" });
    }
  },
  created() {
    this.readAllCompanies();
    if (this.id) {
      this.readApplication(this.id);
    }
  }
};
</script>
