<template>
  <section class="container" style="text-align: left;">
    <div class="card">
      <div class="card-header">{{ companyDataTitle }}</div>
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
    ...mapGetters("companies", ["company"]),
    companyDataTitle() {
      return this.id ? "Edição de empresa" : "Cadastro de empresa";
    }
  },
  methods: {
    ...mapActions("companies", [
      "createCompany",
      "readCompany",
      "updateCompany"
    ]),
    submit(form, id) {
      if (id) {
        this.updateCompany({ id, form });
      } else {
        this.createCompany({ id, form });
      }
      router.push({ name: "company-list" });
    }
  },
  created() {
    if (this.id) {
      this.readCompany(this.id);
    }
  }
};
</script>
