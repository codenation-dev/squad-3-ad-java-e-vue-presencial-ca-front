<template>
  <div>
    <RouterLink :to="{ name: 'user-create' }">
      <span>Adicionar usuário</span>
    </RouterLink>
    <p v-for="user in users" :key="user.id">
      <span>Username: {{ user.username }}</span>
      <span>,Name: {{ user.name }}</span>
      <span>,Email: {{ user.email }}</span>
      <span>,Empresa: {{ user.company }}</span>
      <RouterLink
        :to="{ name: 'user-edit', params: { id: user.id } }"
        data-test="editar"
      >
        <span>Editar</span>
      </RouterLink>
      <button data-test="apagar" @click="deleteContact(user.id)">
        <span>deletar</span>
      </button>
    </p>
  </div>
</template>

<script>
import axios from "axios";
import { domain } from "env";

export default {
  data() {
    return {
      users: []
    };
  },
  methods: {
    async load() {
      const getUsersURL = `${domain}/users`;

      const { data } = await axios.get(getUsersURL);
      this.users = data;
    }
  },
  created() {
    this.load();
  }
};
</script>
