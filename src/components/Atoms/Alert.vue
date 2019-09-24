<template>
  <div class="alert" :class="type" role="alert">
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    text: String
  }
};
</script>
