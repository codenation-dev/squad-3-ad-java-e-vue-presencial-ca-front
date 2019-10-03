<template>
  <router-link
    class="btn btn-outline-secondary float-left back-btn"
    :to="{ name: 'log-list' }"
    tag="button"
    title="Voltar para lista de logs"
  >
    <font-awesome-icon icon="arrow-left" />Voltar
  </router-link>
</template>
<style scoped>
svg {
  margin-bottom: 4px;
  margin-right: 4px;
}
</style>
