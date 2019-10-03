<template>
  <section class="main-section">
    <div class="card-top-options">
      <BackToLogsButton />
      <card-add-button name="user-create" />
    </div>
    <div>
      <card-list v-for="user in users" :key="user.id">
        <template #title>
          <font-awesome-icon icon="user" />
          <b class="menu-text">{{ user.code }}</b>
        </template>
        <template #actions>
          <card-delete-button @click="deleteUser(user.id)" />
          <card-edit-button name="user-edit" :params="{ id: user.id }" />
        </template>
        <template #body>
          <div class="row">
            <div class="col-sm">
              <b>Nome:</b>
              {{ user.name }}
            </div>
            <div class="col-sm">
              <b>Email:</b>
              {{ user.email }}
            </div>
            <div class="col-sm">
              <b>Empresa:</b>
              {{ user.company }}
            </div>
          </div>
        </template>
      </card-list>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import BackToLogsButton from "@/components/Orgs/BackToLogsButton.vue";
import CardList from "@/components/Orgs/CardList.vue";
import CardDeleteButton from "@/components/Orgs/CardDeleteButton.vue";
import CardEditButton from "@/components/Orgs/CardEditButton.vue";
import CardAddButton from "@/components/Orgs/CardAddButton.vue";

export default {
  components: {
    CardList,
    CardEditButton,
    CardDeleteButton,
    CardAddButton,
    BackToLogsButton
  },
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
