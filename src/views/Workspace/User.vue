<template>
  <form @submit.prevent="submit(form)">
    <div class="field">
      <input
        class="input"
        :class="{ 'is-danger': $v.form.name.$invalid }"
        v-model="form.name"
        placeholder="Nome"
      />
      <span class="help is-danger" v-show="$v.form.name.$invalid">Nome é obrigatório</span>
    </div>
    <div class="field">
      <input
        class="input"
        :class="{ 'is-danger': $v.form.email.$invalid }"
        v-model="form.email"
        placeholder="Email"
      />
      <span class="help is-danger" v-show="$v.form.email.$invalid">Email inválido</span>
    </div>
    <div class="field">
      <input
        class="input"
        :class="{ 'is-danger': $v.form.password.$invalid }"
        v-model="form.password"
        placeholder="Senha"
        autocomplete="new-password"
        type="password"
      />
      <span class="help is-danger" v-show="$v.form.password.$invalid">Senha é obrigatório</span>
    </div>
    <div class="field">
      <input
        class="input"
        v-model="form.qtdItensPerPage"
        placeholder="itens por página"
        type="number"
      />
    </div>
    <div class="field">
      <select>
        <option value="0">Tipo de usuário:</option>
        <option value="1">USER</option>
        <option value="2">ADMIN</option>
        <option value="3">COMPANYADMIN</option>
      </select>
    </div>
    <div class="field">
      <select>
        <option value="0">Empresa:</option>
        <option value="1">Empresa 01</option>
        <option value="2">Empresa 02</option>
        <option value="3">Empresa 03</option>
      </select>
    </div>

    <button class="button" :disabled="$v.form.$invalid">Cadastrar</button>
  </form>
</template>

<script>
import axios from "axios";
import { domain } from "env";
import router from "@/router";
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      form: {
        id: "iduser01",
        name: "nmuser01",
        email: "",
        password: "",
        qtdItensPerPage: 10,
        fkCompany: 0,
        fkUserType: 0
      }
    };
  },
  validations: {
    form: {
      name: {
        required
      },
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(8)
      }
    }
  },
  props: {
    index: Number
  },
  computed: {
    //...mapGetters(["contacts"]),
    dataTestButton() {
      return parseInt(this.index) > -1 ? "salvar" : "criar";
    }
  },
  methods: {
    //...mapActions(["createContact", "updateContact"]),
    submit(form, index) {
      if (parseInt(this.index) > -1) {
        this.updateContact({ form, index });
      } else {
        this.createContact(form);
      }
      router.push("/");
    },
    async load() {
      const getCompaniesURL = `${domain}/companies`;

      const { data } = await axios.get(getCompaniesURL);
      this.companies = data;
    }
  },
  created() {
    //this.load();
    if (parseInt(this.index) > -1) {
      let contact = this.contacts[this.index];

      if (contact) {
        this.form = contact;
      } else {
        router.push("/404");
      }
    }
  }
};
</script>
