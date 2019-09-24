<template>
  <nav class="navbar navbar-expand-lg navbar-light nav-bg-color">
    <a class="navbar-brand" href="#">DjaVue</a>
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
          <router-link class="nav-link" :to="{ name: 'workspace' }">
            <span>Home</span>
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
            <span>Cadastro</span>
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <router-link class="dropdown-item" :to="{ name: 'company-list' }">
              <span>Empresa</span>
            </router-link>
            <router-link class="dropdown-item" :to="{ name: 'user-list' }">
              <span>Usuário</span>
            </router-link>
            <router-link
              class="dropdown-item"
              :to="{ name: 'application-list' }"
            >
              <span>Aplicação</span>
            </router-link>
            <router-link
              class="dropdown-item"
              :to="{ name: 'log-source-list' }"
            >
              <span>Fonte de logs</span>
            </router-link>
            <router-link class="dropdown-item" :to="{ name: 'log-list' }">
              <span>Log</span>
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
          <span>**username</span>
        </a>
        <div
          class="dropdown-menu dropdown-menu-right"
          aria-labelledby="navbarDropdown"
        >
          <router-link
            class="dropdown-item"
            :to="{ name: 'user-edit', params: { id: 'logged' } }"
          >
            <span>Perfil</span>
          </router-link>
          <router-link
            @click="logout"
            class="dropdown-item"
            :to="{ name: 'login' }"
          >
            <span>Sair</span>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions("workspace", ["logout"])
  }
};
</script>

<style scoped>
.nav-bg-color {
  background-color: #cda34f;
}
</style>
