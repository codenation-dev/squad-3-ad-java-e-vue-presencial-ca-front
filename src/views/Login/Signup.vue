<template>
  <card-vue subtitle="Preencha os dados abaixo">
    <img class="logo" slot="logo" src="@/logos/djavue-login.png" alt srcset />
    <form class="form-group" @submit.prevent="submit(form)">
      <alert-vue v-if="signUpError" :text="signUpError" type="alert-danger" />

      <input-form-vue
        id="name"
        label="Nome"
        :onInput="setName"
        @onEnter="submit(form)"
      />
      <div
        v-if="
          !$v.form.name.$required &&
            $v.form.name.$dirty &&
            $v.form.name.$invalid
        "
      >
        <small class="form-text text-danger">Nome é obrigatório</small>
      </div>
      <input-form-vue
        id="code"
        label="Código do usuário"
        :onInput="setCode"
        :onBlur="checkCode"
        @onEnter="submit(form)"
      />
      <div v-if="$v.form.code.$dirty && $v.form.code.$invalid">
        <small v-if="userError" class="form-text text-danger">
          {{ userError }}
        </small>
        <small
          v-else-if="$v.form.code.$model === ''"
          class="form-text text-danger"
          >Código do usuário é obrigatório</small
        >
      </div>
      <small v-else-if="userOK && !userError" class="form-text text-success">
        {{ userOK }}
      </small>
      <input-form-vue
        id="email"
        label="E-mail"
        :onInput="setEmail"
        @onEnter="submit(form)"
      />
      <div
        v-if="
          !$v.form.email.$required &&
            $v.form.email.$dirty &&
            $v.form.email.$invalid
        "
      >
        <small class="form-text text-danger">E-mail é obrigatório</small>
      </div>
      <input-form-vue
        id="password"
        type="password"
        label="Senha"
        autocomplete="new-password"
        :onInput="setPassword"
        @onEnter="submit(form)"
      />
      <div v-if="$v.form.password.$dirty && $v.form.password.$invalid">
        <small v-if="!$v.form.password.minLength" class="form-text text-danger"
          >Senha precisa ter 8 caracteres no mínimo</small
        >
        <small
          v-if="!$v.form.password.$model === ''"
          class="form-text text-danger"
          >Senha é obrigatória</small
        >
      </div>
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
import AlertVue from "@/components/Atoms/Alert.vue";

export default {
  data() {
    return {
      signUpError: null,
      userError: null,
      userOK: null,
      form: {
        name: "",
        code: "",
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
      code: {
        required,
        regex(code) {
          return /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i.test(code);
        },
        async checkCode() {
          return this.userOK && !this.userError ? true : false;
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
    ...mapActions("login", ["signup", "checkAvailability"]),
    async submit(form) {
      if (!this.$v.form.$invalid) {
        this.isLoading = !this.isLoading;
        this.signUpError = null;

        try {
          const status = await this.signup(form);

          if (status === 200) this.$router.push("/login");
        } catch ({ response }) {
          this.signUpError = response.data.message;
        } finally {
          this.isLoading = !this.isLoading;
        }
      }
    },
    async checkCode(value) {
      this.signUpError = this.userError = this.userOK = null;

      if (value !== "") {
        const res = await this.checkAvailability(value);

        if (res.error) {
          this.signUpError = res.error_description;
        } else if (res.status === 200) {
          this.userOK = res.data;
        } else if (res.code === 400) {
          this.userError = res.message;
        } else {
          this.userError = res.data;
        }
      } else {
        this.userError = "Código do usuário é obrigatório";
      }
    },
    setName(value) {
      this.form.name = value;
      this.$v.form.name.$touch();
    },
    setCode(value) {
      this.form.code = value;
      this.$v.form.code.$touch();
    },
    setEmail(value) {
      this.form.email = value;
      this.$v.form.email.$touch();
    },
    setPassword(value) {
      this.form.password = value;
      this.$v.form.password.$touch();
    }
  },
  components: {
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

.form-text {
  text-align: left;
  margin-bottom: 10px;
}
</style>
