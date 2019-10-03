<template>
  <RouterLink
    tag="button"
    class="btn btn-outline-secondary icon-btn card-action-btn"
    :to="{
      name,
      params: { id: '' }
    }"
    title="Adicionar"
  >
    <font-awesome-icon icon="plus" />
    <span class="card-action-btn-label">Adicionar</span>
  </RouterLink>
</template>
<script>
export default {
  props: {
    name
  }
};
</script>
