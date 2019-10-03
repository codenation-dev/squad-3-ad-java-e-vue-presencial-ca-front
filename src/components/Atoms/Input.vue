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
      v-on:input="handleInput"
      v-on:blur="handleBlur"
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
    onEnter: {
      type: Function,
      default: function() {}
    }
  },
  data() {
    return {
      value: ""
    };
  },
  methods: {
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

<style>
.form-control {
  margin: 0;
}
</style>
