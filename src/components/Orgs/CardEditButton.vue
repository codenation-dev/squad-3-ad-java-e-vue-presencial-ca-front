<template>
  <RouterLink
    class="icon-btn card-action-btn"
    :to="{
      name,
      params
    }"
    title="`Editar`"
  >
    <font-awesome-icon icon="pencil-alt" />
    <span class="card-action-btn-label">Editar</span>
  </RouterLink>
</template>
<script>
export default {
  props: {
    name,
    params: {}
  }
};
</script>
