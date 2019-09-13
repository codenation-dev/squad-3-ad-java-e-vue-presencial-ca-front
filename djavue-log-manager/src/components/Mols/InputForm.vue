<template>
  <div>
    <label-vue :for="id" :text="label" />
    <input-vue
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :icon="icon"
      @onInput="onInput"
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
    onInput: Function
  }
};
</script>
