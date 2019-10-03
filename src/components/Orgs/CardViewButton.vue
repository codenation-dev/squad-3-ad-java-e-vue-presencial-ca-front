<template>
  <RouterLink
    class="icon-btn card-action-btn"
    :to="{
      name,
      params
    }"
    title="Visualizar"
  >
    <font-awesome-icon icon="eye" />
    <span class="menu-text">Visualizar</span>
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
