<template>
  <div>
    <label-vue :for="id" :text="label" />
    <input-vue
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :icon="icon"
      :onInput="handleInput"
      :onBlur="handleBlur"
      :onEnter="handleEnter"
    />
  </div>
</template>

<script>
import LabelVue from "../Atoms/Label.vue";
import InputVue from "../Atoms/Input.vue";

export default {
  components: {
    LabelVue,
    InputVue
  },
  props: {
    id: String,
    placeholder: String,
    type: String,
    label: String,
    icon: String
  },
  methods: {
    handleEnter() {
      const me = this;

      me.$emit("onEnter");
    },
    handleInput(event) {
      const me = this,
        value = event.target.value;

      me.$emit("onInput", value);
    },
    handleBlur(event) {
      const me = this,
        value = event.target.value;

      me.$emit("onBlur", value);
    }
  }
};
</script>
