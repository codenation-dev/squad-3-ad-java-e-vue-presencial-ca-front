<template>
  <div id="app">
    <transition name="fade">
      <router-view v-if="show"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      show: false
    };
  },
  mounted() {
    this.show = true;
  }
};
</script>

<style lang="scss">
@import "@/theme/bootstrap.scss";

body {
  background: #8e0e00; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #1f1c18,
    #8e0e00
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #1f1c18,
    #8e0e00
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.fade-enter-active {
  transition: opacity 0.3s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
  opacity: 0;
}
</style>
