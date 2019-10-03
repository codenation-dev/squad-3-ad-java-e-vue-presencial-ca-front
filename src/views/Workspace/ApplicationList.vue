<template>
  <section class="main-section">
    <card-list v-for="application in applications" :key="application.id">
      <template #title>
        <font-awesome-icon icon="desktop" />
        <b class="menu-text">{{ application.id }}</b>
      </template>
      <template #actions>
        <card-delete-button @click="deleteApplication(application.id)" />
        <card-edit-button
          name="application-edit"
          :params="{ id: application.id }"
        />
      </template>
      <template #body>
        <div class="row">
          <div class="col-sm">
            <b>Nome:</b>
            {{ application.name }}
          </div>
          <div class="col-sm">
            <b>Empresa:</b>
            Empresa
          </div>
        </div>
      </template>
    </card-list>
    <BackToLogsButton />
    <card-add-button name="application-create" />
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
    ...mapGetters("applications", ["applications"])
  },
  methods: {
    ...mapActions("applications", ["readAllApplications", "deleteApplication"])
  },
  created() {
    this.readAllApplications();
  }
};
</script>
