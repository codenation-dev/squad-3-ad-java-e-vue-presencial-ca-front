<template>
  <button
    :class="className"
    :type="type"
    :disabled="disabled"
    v-on:click="handleClick"
  >
    {{ text }}
  </button>
</template>

<script>
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
    }
  },
  methods: {
    handleClick() {
      const me = this;

      me.$emit("click");
    }
  }
};
</script>
