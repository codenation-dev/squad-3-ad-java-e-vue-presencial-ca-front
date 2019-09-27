<template>
  <section class="container" style="text-align: left;">
    <div class="card">
      <div class="card-header">
        <b>Usuários</b>
      </div>
      <div class="card-body">
        <p class="card-text">
          <RouterLink :to="{ name: 'user-create', params: { id: '' } }">
            <font-awesome-icon icon="plus" />
            <span style="padding-left: 4px;">Adicionar</span>
          </RouterLink>
        </p>
        <div class="container">
          <div class="row">
            <div class="col-2">
              <b>Username</b>
            </div>
            <div class="col-2">
              <b>Nome</b>
            </div>
            <div class="col-2">
              <b>Email</b>
            </div>
            <div class="col-2">
              <b>Empresa</b>
            </div>
            <div class="col-3">
              <b>Ações</b>
            </div>
          </div>
          <div class="row" v-for="user in users" :key="user.id">
            <div class="col-2">{{ user.code }}</div>
            <div class="col-2">{{ user.name }}</div>
            <div class="col-2">{{ user.email }}</div>
            <div class="col-2">{{ user.company }}</div>
            <div class="col-3">
              <RouterLink
                class="icon-btn"
                :to="{ name: 'user-edit', params: { id: `${user.id}` } }"
                tag="button"
                :title="`Editar ${user.id}`"
              >
                <font-awesome-icon icon="pencil-alt" />
                <span style="padding-left: 4px;">Editar</span>
              </RouterLink>
              <button
                class="icon-btn"
                @click="deleteUser(user.id)"
                :title="`Excluir ${user.id}`"
              >
                <font-awesome-icon icon="trash-alt" />
                <span style="padding-left: 4px;">Excluir</span>
              </button>
            </div>
          </div>
        </div>
        <router-link
          class="btn btn-secondary float-left back-btn"
          :to="{ name: 'log-list' }"
          tag="button"
        >
          <span>Voltar</span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("users", ["users"])
  },
  methods: {
    ...mapActions("users", ["readAllUsers", "deleteUser"])
  },
  created() {
    this.readAllUsers();
  }
};
</script>

<style scoped>
.icon-btn {
  background: none;
  border: none;
  color: var(--primary);
}

.back-btn {
  margin-top: 20px;
}

.row {
  border-bottom: 1px solid rgb(0, 0, 0, 0.2);
  padding-top: 8px;
  padding-bottom: 8px;
}

.row:hover {
  background-color: #f2f2f2;
}
</style>
