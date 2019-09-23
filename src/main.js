import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Vue from "vue";
import Vuelidate from "vuelidate";
import VueRouter from "vue-router";

import axios from "axios";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import interceptor from "@/utils/interceptor";

axios.interceptors.request.use(interceptor);

library.add(faUser);
library.add(faKey);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(Vuelidate);
Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
