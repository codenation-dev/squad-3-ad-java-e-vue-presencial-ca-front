<template>
  <button
    :class="className"
    :type="type"
    :disabled="disabled || isLoading"
    v-on:click="handleClick"
  >
    <loading-vue v-if="isLoading" />
    <template v-else>{{ text }}</template>
  </button>
</template>

<script>
import LoadingVue from "./Loading";

export default {
  props: {
    type: {
      type: String,
      default: "button"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    className: {
      type: String,
      default: "btn btn-lg btn-primary btn-block text-uppercase"
    },
    text: {
      type: String,
      default: "Botão"
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick() {
      const me = this;

      me.$emit("click");
    }
  },
  components: {
    LoadingVue
  }
};
</script>

<style lang="css">
.btn {
  max-height: 45px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
</style>
