<template>
  <section class="main-section">
    <card-list v-for="logSource in logSources" :key="logSource.id">
      <template #title>
        <font-awesome-icon icon="code" />
        <b class="menu-text">{{ logSource.id }}</b>
      </template>
      <template #actions>
        <card-delete-button @click="deleteLogSource(logSource.id)" />
        <card-edit-button
          name="log-source-edit"
          :params="{ id: logSource.id }"
        />
        <card-add-button name="log-source-create" />
      </template>
      <template #body>
        <div class="row">
          <div class="col-sm">
            <b>Nome:</b>
            {{ logSource.name }}
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
    ...mapGetters("logSources", ["logSources"])
  },
  methods: {
    ...mapActions("logSources", ["readAllLogSources", "deleteLogSource"])
  },
  created() {
    this.readAllLogSources();
  }
};
</script>
