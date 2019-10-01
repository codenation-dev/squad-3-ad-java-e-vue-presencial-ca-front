<template>
  <card-vue subtitle="Insira o e-mail do usuário que deseja recuperar a senha">
    <img class="logo" slot="logo" src="@/logos/djavue-login.png" alt srcset />
    <form @submit.prevent="submit(form)">
      <input-form-vue id="email" :onInput="setEmail" label="E-mail" />
      <button-vue
        :disabled="$v.form.$invalid"
        text="Recuperar senha"
        @click="submit(form)"
        :isLoading="isLoading"
      />
      <router-link class="btn btn-link" :to="{ name: 'login' }"
        >Voltar</router-link
      >
    </form>
  </card-vue>
</template>

<script>
import { mapActions } from "vuex";
import { required, email } from "vuelidate/lib/validators";

import CardVue from "@/components/Orgs/Card.vue";
import InputFormVue from "../../components/Mols/InputForm.vue";
import ButtonVue from "../../components/Atoms/Button.vue";

export default {
  data() {
    return {
      errors: [],
      form: {
        email: ""
      },
      isLoading: false
    };
  },
  validations: {
    form: {
      email: {
        required,
        email
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
    setEmail(value) {
      this.form.email = value;
    }
  },
  components: {
    CardVue,
    InputFormVue,
    ButtonVue
  }
};
</script>

<style lang="css" scoped>
form {
  padding-top: 15px;
  margin-bottom: 0;
}
</style>
