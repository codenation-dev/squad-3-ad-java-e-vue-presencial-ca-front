<template>
  <a
    class="icon-btn card-action-btn"
    :title="`Excluir`"
    href="#"
    v-on:click="handleClick"
  >
    <font-awesome-icon icon="trash-alt" />
    <span class="card-action-btn-label">Excluir</span>
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
