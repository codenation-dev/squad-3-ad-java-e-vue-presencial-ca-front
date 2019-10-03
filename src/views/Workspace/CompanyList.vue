<template>
  <section class="main-section">
    <card-list v-for="company in companies" :key="company.id">
      <template #title>
        <font-awesome-icon icon="building" />
        <b class="menu-text">{{ company.code }}</b>
      </template>
      <template #actions>
        <card-delete-button @click="deleteCompany(company.id)" />
        <card-edit-button
          name="company-edit"
          :params="{ id: `${company.id}` }"
        />
      </template>
      <template #body>
        <div class="row">
          <div class="col-sm">
            <b>Nome:</b>
            {{ company.name }}
          </div>
        </div>
      </template>
    </card-list>
    <BackToLogsButton />
    <card-add-button name="company-create" />
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
    ...mapGetters("companies", ["companies"])
  },
  methods: {
    ...mapActions("companies", ["readAllCompanies", "deleteCompany"])
  },
  created() {
    this.readAllCompanies();
  }
};
</script>
