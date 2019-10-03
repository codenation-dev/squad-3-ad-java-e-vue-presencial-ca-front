<template>
  <div class="custom-control custom-checkbox mb-3">
    <checkbox-vue type="checkbox" class="custom-control-input" id="id" />
    <label-vue class="custom-control-label" for="id" :text="label" />
  </div>
</template>

<script>
import CheckboxVue from "@/components/Atoms/Checkbox.vue";
import LabelVue from "@/components/Atoms/Label.vue";

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
  components: {
    CheckboxVue,
    LabelVue
  }
};
</script>

<style></style>
