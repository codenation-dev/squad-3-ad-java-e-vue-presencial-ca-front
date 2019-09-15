<template>
  <card-vue
    title="Login"
    subtitle="Insira seu usuário e senha para acessar o sistema"
  >
    <form class="form-group">
      <input-form-vue
        id="username"
        :onInput="setUsername"
        placeholder="João das Neves"
        label="Usuário"
        icon="user"
      />
      <input-form-vue
        id="password"
        :onInput="setPassword"
        type="password"
        label="Senha"
        icon="key"
      />
      <div class="d-flex justify-content-around">
        <checkbox-vue
          id="keepConnected"
          @onChange="setKeepConnected"
          label="Manter conectado"
        ></checkbox-vue>
        <router-link :to="{ name: 'forgotPassword' }"
          >Esqueceu sua senha?</router-link
        >
      </div>
      <button-vue
        :disabled="$v.form.$invalid"
        @click="submit(form)"
        text="Login"
      />
      <p style="padding-top: 15px;">
        Não tem cadastro?
        <router-link :to="{ name: 'signup' }">Cadastre-se agora</router-link>
      </p>
    </form>
  </card-vue>
</template>

<script>
import { mapActions } from "vuex";
import { required } from "vuelidate/lib/validators";

import CheckboxVue from "@/components/Atoms/Checkbox.vue";
import CardVue from "@/components/Orgs/Card.vue";
import InputFormVue from "../../components/Mols/InputForm.vue";
import ButtonVue from "../../components/Atoms/Button.vue";

export default {
  data() {
    return {
      error: null,
      form: {
        username: "",
        password: "",
        keepConnected: false
      }
    };
  },
  validations: {
    form: {
      username: {
        required,
        regex(user) {
          return /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i.test(user);
        }
      },
      password: {
        required
      }
    }
  },
  methods: {
    ...mapActions("login", ["login"]),
    async submit(form) {
      try {
        await this.login(form);
        this.$router.push({ name: "workspace" });
      } catch ({ response }) {
        this.error = response.data.message || response.data.errors;
      }
    },
    setUsername(value) {
      this.form.username = value;
    },
    setPassword(value) {
      this.form.password = value;
    },
    setKeepConnected(value) {
      this.form.keepConnected = value;
    }
  },
  components: {
    CheckboxVue,
    CardVue,
    InputFormVue,
    ButtonVue
  }
};
</script>

<style lang="scss">
form {
  padding-top: 15px;
}

.justify-content-around {
  padding: 10px;
}
</style>
