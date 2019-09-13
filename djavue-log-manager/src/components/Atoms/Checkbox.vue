<template>
  <div class="custom-control custom-checkbox mb-3">
    <input
      type="checkbox"
      class="custom-control-input"
      :id="id"
      v-model="value"
      v-on:change="change"
    />
    <label class="custom-control-label" :for="id">{{ label }}</label>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      default: "Sua label",
      type: String
    },
    id: {
      default: "Seu id",
      type: String
    }
  },
  data() {
    return {
      value: false
    };
  },
  methods: {
    change() {
      this.$emit("onChange", this.value);
    }
  }
};
</script>

<style></style>
