<template>
  <card-vue subtitle="Iniciar sessão">
    <img class="logo" slot="logo" src="@/logos/djavue-login.png" alt srcset />
    <form class="form-group">
      <alert-vue v-if="error" :text="error" type="alert-danger" />

      <input-form-vue
        id="username"
        :onInput="setUsername"
        placeholder
        label="Usuário"
        icon="user"
      />
      <input-form-vue
        id="password"
        :onInput="setPassword"
        type="password"
        label="Senha"
        icon="key"
        @onEnter="submit(form)"
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
        :isLoading="isLoading"
      />
      <p style="padding-top: 15px; margin-bottom: 0px">
        Não tem cadastro?
        <router-link :to="{ name: 'signup' }">Cadastre-se agora</router-link>
      </p>
    </form>
  </card-vue>
</template>

<script>
/*
colocar botão voltar para cadastro sem fundo com hover
*/
import { mapActions } from "vuex";
import { required } from "vuelidate/lib/validators";

import CheckboxVue from "@/components/Atoms/Checkbox.vue";
import CardVue from "@/components/Orgs/Card.vue";
import InputFormVue from "@/components/Mols/InputForm.vue";
import ButtonVue from "@/components/Atoms/Button.vue";
import AlertVue from "@/components/Atoms/Alert.vue";

export default {
  data() {
    return {
      error: null,
      isLoading: false,
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
    ...mapActions("workspace", ["showToolbar", "hideToolbar"]),
    async submit(form) {
      this.isLoading = !this.isLoading;

      try {
        const res = await this.login(form);

        this.error = null;

        if (res && res.isAxiosError) {
          this.error = "Usuário e/ou senha inválido(s)";
        } else {
          this.$router.push({
            name: "log-list",
            params: { currentUser: form.username }
          });
          this.showToolbar();
        }
      } catch ({ response }) {
        this.error = response.data.message || response.data.errors;
      } finally {
        this.isLoading = !this.isLoading;
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
  created() {
    this.hideToolbar();
  },
  components: {
    CheckboxVue,
    CardVue,
    InputFormVue,
    ButtonVue,
    AlertVue
  }
};
</script>

<style lang="css" scoped>
form {
  padding-top: 15px;
  margin-bottom: 0;
}

.justify-content-around {
  padding: 10px;
}
</style>
