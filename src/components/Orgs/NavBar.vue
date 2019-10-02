<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-light fixed-top">
    <router-link class="navbar-brand" :to="{ name: 'log-list' }">
      <img :src="require('@/logos/djavue.png')" width="50" height="50" alt />
      <b>Djavue</b>
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#conteudoNavbarSuportado"
      aria-controls="conteudoNavbarSuportado"
      aria-expanded="false"
      aria-label="Alterna navegação"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="conteudoNavbarSuportado">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link class="nav-link" :to="{ name: 'log-list' }">
            <font-awesome-icon icon="bug" />
            <span class="menu-text">Logs</span>
          </router-link>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <font-awesome-icon icon="plus" />
            <span class="menu-text">Cadastro</span>
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <router-link class="dropdown-item" :to="{ name: 'company-list' }">
              <font-awesome-icon icon="building" />
              <span class="menu-text">Empresa</span>
            </router-link>
            <router-link class="dropdown-item" :to="{ name: 'user-list' }">
              <font-awesome-icon icon="user" />
              <span class="menu-text">Usuário</span>
            </router-link>
            <router-link
              class="dropdown-item"
              :to="{ name: 'application-list' }"
            >
              <font-awesome-icon icon="desktop" />
              <span class="menu-text">Aplicação</span>
            </router-link>
            <router-link
              class="dropdown-item"
              :to="{ name: 'log-source-list' }"
            >
              <font-awesome-icon icon="code" />
              <span class="menu-text">Fonte de logs</span>
            </router-link>
          </div>
        </li>
        <li class="nav-item dropdown nav navbar-nav navbar-right"></li>
      </ul>
      <div class="navbar-nav">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span>{{ user.code }}</span>
        </a>
        <div
          class="dropdown-menu dropdown-menu-right"
          aria-labelledby="navbarDropdown"
        >
          <router-link
            class="dropdown-item"
            :to="{ name: 'user-edit', params: { id: 'logged' } }"
          >
            <font-awesome-icon icon="user" />
            <span class="menu-text">Perfil</span>
          </router-link>
          <router-link
            @click="logout"
            class="dropdown-item"
            :to="{ name: 'login' }"
          >
            <font-awesome-icon icon="sign-out-alt" />
            <span class="menu-text">Sair</span>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    user: {}
  },
  methods: {
    ...mapActions("workspace", ["logout"])
  }
};
</script>

<style scoped>
.nav-bg-color {
  background-color: var(--secondary);
}
</style>
