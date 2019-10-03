<template>
  <section class="jumbotron main-section">
    <div class="card">
      <div class="card-header">
        <font-awesome-icon icon="user" />
        <b class="menu-text">{{ userDataTitle }}</b>
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
            <select
              class="form-control"
              id="companiesSelect"
              @change="changeCompany"
              v-model="form.company"
            >
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
            <label for="typeUserSelect">Tipo de usuário</label>
            <select
              class="form-control"
              id="typeUserSelect"
              @change="changeUserType"
              v-model="form.userType"
            >
              <option
                v-for="type in userTypes"
                :key="type.id"
                :value="type.id"
                >{{ type.name }}</option
              >
            </select>
          </div>
          <router-link
            class="btn btn-secondary float-left"
            :to="{ name: 'user-list' }"
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
        name: "",
        userType: 0,
        company: 0
      }
    };
  },
  props: {
    id: {
      type: [Number, String],
      default: ""
    }
  },
  computed: {
    ...mapGetters("users", ["user"]),
    ...mapGetters("userTypes", ["userTypes"]),
    ...mapGetters("companies", ["companies"]),
    userDataTitle() {
      return this.id ? "Edição de usuário" : "Cadastro de usuário";
    }
  },
  methods: {
    ...mapActions("users", ["createUser", "updateUser"]),
    ...mapActions("userTypes", ["readAllUserTypes"]),
    ...mapActions("companies", ["readAllCompanies"]),
    changeUserType({ target }) {
      this.form.userType = target.value;
    },
    changeCompany({ target }) {
      this.form.company = target.value;
    },
    submit(form, id) {
      if (id) {
        this.updateUser({ id, form });
      } else {
        this.createUser({ id, form });
      }
      router.push({ name: "user-list" });
    }
  },
  created() {
    var getUserById = this.$store.getters["users/userById"];

    this.readAllUserTypes();
    this.readAllCompanies();

    if (this.id) this.form = getUserById(parseInt(this.id));
    if (!this.form.userType) this.form.userType = this.userTypes[0].id;
    if (!this.form.company) this.form.company = this.companies[0].id;
  }
};
</script>
