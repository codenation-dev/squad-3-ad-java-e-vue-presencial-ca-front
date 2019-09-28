<template>
  <card-vue title="Esqueci minha senha" subtitle="Preencha os campos abaixo">
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

<style scoped>
html,
body,
#app {
  margin: 0;
  height: 100%;
  width: 100%;
  min-height: 100%;
}

.container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

form {
  padding-top: 15px;
}

.justify-content-around {
  padding: 10px;
}
</style>
