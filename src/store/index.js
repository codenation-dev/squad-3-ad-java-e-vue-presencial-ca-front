import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import login from "./login";
import workspace from "./workspace";
import userTypes from "./userTypes";
import companies from "./companies";
import users from "./users";
import applications from "./applications";
import logsources from "./logsources";
import logs from "./logs";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    new VuexPersistence({ storage: global.localStorage, key: "state" }).plugin
  ],
  modules: {
    login,
    workspace,
    userTypes,
    companies,
    users,
    applications,
    logsources,
    logs
  }
});
