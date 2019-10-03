<template>
  <div id="app">
    <nav-bar v-show="toolbar" :user="user" />
    <transition name="fade">
      <router-view v-if="show"></router-view>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import NavBar from "@/components/Orgs/NavBar.vue";

export default {
  name: "app",
  data() {
    return {
      show: false
    };
  },
  mounted() {
    this.show = true;
  },
  computed: {
    ...mapGetters("workspace", ["toolbar"]),
    ...mapGetters("users", ["user"])
  },
  components: {
    NavBar
  }
};
</script>

<style lang="scss">
@import "@/theme/bootstrap.scss";

html,
body,
#app {
  margin: 0;
  height: 100%;
  width: 100%;
  min-height: 100%;
}

.fade-enter-active {
  transition: opacity 0.3s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
  opacity: 0;
}

.main-section {
  @extend .jumbotron;
  padding-top: 100px;
  padding-bottom: 50px;
}

.menu-text {
  margin-left: 4px;
}
</style>
