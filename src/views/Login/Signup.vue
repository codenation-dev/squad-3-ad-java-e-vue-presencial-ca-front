<template>
  <card-vue title="Cadastro" subtitle="Preencha os campos abaixo">
    <form class="form-group" @submit.prevent="submit(form)">
      <input-form-vue
        id="name"
        label="Nome"
        placeholder="João das Neves"
        :onInput="setName"
      />
      <input-form-vue
        id="userCode"
        label="Código do usuário"
        placeholder="jonsnow"
        :onInput="setUserCode"
      />
      <input-form-vue
        id="email"
        label="E-mail"
        placeholder="jon@stark.wf"
        :onInput="setEmail"
      />
      <input-form-vue
        id="password"
        type="password"
        label="Senha"
        autocomplete="new-password"
        :onInput="setPassword"
      />
      <button-vue
        :disabled="$v.form.$invalid"
        @click="submit(form)"
        text="Cadastrar"
        :isLoading="isLoading"
      />
      <router-link class="btn btn-link" :to="{ name: 'login' }"
        >Já possui cadastro?</router-link
      >
    </form>
  </card-vue>
</template>

<script>
import { mapActions } from "vuex";
import { required, minLength, email } from "vuelidate/lib/validators";

import CardVue from "@/components/Orgs/Card.vue";
import InputFormVue from "../../components/Mols/InputForm.vue";
import ButtonVue from "../../components/Atoms/Button.vue";

export default {
  data() {
    return {
      errors: [],
      form: {
        name: "",
        userCode: "",
        email: "",
        password: ""
      }, 
      isLoading: false
    };
  },
  validations: {
    form: {
      name: {
        required
      },
      userCode: {
        required,
        regex(user) {
          return /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i.test(user);
        }
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
  methods: {
    ...mapActions("login", ["signup"]),
    async submit(form) {
      this.isLoading = !this.isLoading;

      try {
        await this.signup(form);
      } catch ({ response }) {
        this.errors = response.data.errors;
      } finally {
        this.isLoading = !this.isLoading;
      }
    },
    setName(value) {
      this.form.name = value;
    },
    setUserCode(value) {
      this.form.userCode = value;
    },
    setEmail(value) {
      this.form.email = value;
    },
    setPassword(value) {
      this.form.password = value;
    }
  },
  components: {
    CardVue,
    InputFormVue,
    ButtonVue
  }
};
</script>
