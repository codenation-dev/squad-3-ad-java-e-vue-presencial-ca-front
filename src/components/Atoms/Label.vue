<template>
  <div :class="className">
    <label for="id" v-bind="$props">
      {{ text }}
    </label>
  </div>
</template>

<script>
export default {
  props: {
    for: {
      type: String,
      default: "ID do elemento alvo"
    },
    className: {
      type: String,
      default: "label"
    },
    text: {
      type: String,
      default: "Label"
    }
  }
};
</script>

<style>
.label {
  display: flex;
}
</style>
