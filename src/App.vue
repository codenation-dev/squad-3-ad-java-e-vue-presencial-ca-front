<template>
  <div id="app">
    <nav-bar v-show="toolbar" />
    <transition name="fade">
      <router-view v-if="show"></router-view>
    </transition>
  </div>
</template>

<script>
import NavBar from "@/components/Orgs/NavBar.vue";

export default {
  name: "app",
  data() {
    return {
      show: false,
      toolbar: false
    };
  },
  mounted() {
    this.show = true;
  },
  methods: {
    showToolbar() {
      this.toolbar = true;
    },
    hideToolbar() {
      this.toolbar = false;
    }
  },
  components: {
    NavBar
  }
};
</script>

<style lang="scss">
@import "@/theme/bootstrap.scss";

.fade-enter-active {
  transition: opacity 0.3s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
  opacity: 0;
}
</style>
