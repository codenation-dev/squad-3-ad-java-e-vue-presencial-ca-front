<template>
  <div class="input-group mb-3">
    <div class="input-group-prepend" v-if="icon">
      <span class="input-group-text" id="basic-addon1">
        <font-awesome-icon :icon="icon" />
      </span>
    </div>
    <input
      class="form-control"
      v-bind="$props"
      v-model="value"
      v-on:input="onInput"
      v-on:blur="onBlur"
      v-on:keyup.enter="onEnter"
    />
  </div>
</template>

<script>
export default {
  props: {
    id: {
      default: "",
      type: String
    },
    placeholder: {
      default: "",
      type: String
    },
    type: {
      default: "text",
      type: String
    },
    autocomplete: String,
    icon: String,
    onInput: {
      type: Function,
      default: function() {}
    },
    onBlur: {
      type: Function,
      default: function() {}
    },
    onEnter: {
      type: Function,
      default: function() {}
    }
  },
  data() {
    return {
      value: ""
    };
  }
};
</script>

<style>
.form-control {
  margin: 0;
}
</style>
