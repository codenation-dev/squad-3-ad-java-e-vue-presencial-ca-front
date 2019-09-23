<template>
  <div></div>
</template>

<script>
import NavBar from "@/components/Orgs/NavBar.vue";

export default {
  components: {
    NavBar
  },
  created() {
    debugger;
    this.$emit("showToolbar");
  }
};
</script>
