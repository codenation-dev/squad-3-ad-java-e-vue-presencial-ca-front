<template>
  <section class="jumbotron main-section">
    <div class="card">
      <div class="card-header">
        <font-awesome-icon icon="building" />
        <b class="menu-text">{{ companyDataTitle }}</b>
      </div>
      <div class="card-body">
        <form @submit.prevent="submit(company, id)">
          <div class="form-group">
            <label for="code">Code</label>
            <input
              type="text"
              class="form-control"
              id="code"
              placeholder="Code"
              v-model="company.code"
            />
          </div>
          <div class="form-group">
            <label for="nome">Nome</label>
            <input
              type="text"
              class="form-control"
              id="nome"
              placeholder="Nome"
              v-model="company.name"
            />
          </div>
          <router-link
            class="btn btn-secondary float-left"
            :to="{ name: 'company-list' }"
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
  props: {
    id: {
      type: String,
      default: ""
    }
  },
  computed: {
    ...mapGetters("companies", ["company"]),
    companyDataTitle() {
      return this.id ? "Edição de empresa" : "Cadastro de empresa";
    }
  },
  methods: {
    ...mapActions("companies", [
      "createCompany",
      "readCompany",
      "updateCompany",
      "updateNewCompany"
    ]),
    submit(form, id) {
      if (id) {
        this.updateCompany(form);
      } else {
        this.createCompany(form);
      }
      router.push({ name: "company-list" });
    }
  },
  created() {
    if (this.id) {
      this.readCompany(this.id);
    } else {
      this.updateNewCompany();
    }
  }
};
</script>
