<template>
  <a
    class="icon-btn card-action-btn"
    title="Arquivar"
    href="#"
    v-on:click="handleClick"
  >
    <font-awesome-icon icon="save" />
    <span class="card-action-btn-label">Arquivar</span>
  </a>
</template>
<script>
export default {
  methods: {
    handleClick() {
      this.$emit("click");
    }
  }
};
</script>
