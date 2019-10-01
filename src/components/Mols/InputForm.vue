<template>
  <div>
    <label-vue :for="id" :text="label" />
    <input-vue
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :icon="icon"
      @onInput="onInput"
      @onBlur="onBlur"
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
    icon: String,
    onInput: {
      type: Function,
      default: function() {}
    },
    onBlur: {
      type: Function,
      default: function() {}
    }
  },
  methods: {
    handleEnter() {
      const me = this;

      me.$emit("onEnter");
    }
  }
};
</script>
