<template>
  <RouterLink
    class="btn btn-success float-right"
    :to="{
      name,
      params: { id: '' }
    }"
    title="Adicionar"
    tag="button"
  >
    <font-awesome-icon icon="plus" />Adicionar
  </RouterLink>
</template>
<script>
export default {
  props: {
    name
  }
};
</script>
<style scoped>
svg {
  margin-bottom: 4px;
  margin-right: 4px;
}
</style>
