<template>
  <section class="jumbotron main-section">
    <div
      class="card card-list"
      v-for="application in applications"
      :key="application.id"
    >
      <div class="card-header">
        <div class="w-100">
          <div class="row">
            <div class="col-9">
              <font-awesome-icon icon="desktop" />
              <b class="menu-text">{{ application.id }}</b>
            </div>
            <div class="col-3 card-action-btn-group">
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
            </div>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="w-100">
          <div class="row">
            <div class="col-sm">
              <b>Nome:</b>
              {{ application.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <BackToLogsButton />
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import BackToLogsButton from "@/components/Orgs/BackToLogsButton.vue";

export default {
  components: { BackToLogsButton },
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
