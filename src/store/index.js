import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import login from "./login";
import workspace from "./workspace";
import userTypes from "./userTypes";
import companies from "./companies";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    new VuexPersistence({ storage: global.localStorage, key: "state" }).plugin
  ],
  modules: {
    login,
    workspace,
    userTypes,
    companies
  }
});
