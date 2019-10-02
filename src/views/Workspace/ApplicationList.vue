<template>
  <section class="jumbotron main-section">
    <card-list v-for="application in applications" :key="application.id">
      <template v-slot:title>
        <font-awesome-icon icon="desktop" />
        <b class="menu-text">{{ application.id }}</b>
      </template>
      <template v-slot:actions>
        <a
          class="icon-btn card-action-btn"
          @click="deleteApplication(application.id)"
          :title="`Excluir ${application.id}`"
          href="#"
        >
          <font-awesome-icon icon="trash-alt" />
          <span class="card-action-btn-label">Excluir</span>
        </a>
        <RouterLink
          class="icon-btn card-action-btn"
          :to="{
            name: 'application-edit',
            params: { id: application.id }
          }"
          :title="`Editar ${application.id}`"
        >
          <font-awesome-icon icon="pencil-alt" />
          <span class="card-action-btn-label">Editar</span>
        </RouterLink>
      </template>
      <template v-slot:body>
        <div class="row">
          <div class="col-sm">
            <b>Nome:</b>
            {{ application.name }}
          </div>
        </div>
      </template>
    </card-list>
    <BackToLogsButton />
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import BackToLogsButton from "@/components/Orgs/BackToLogsButton.vue";
import CardList from "@/components/Orgs/CardList.vue";

export default {
  components: { CardList, BackToLogsButton },
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
