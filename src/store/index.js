import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import login from "./login";
import workspace from "./workspace";
import userTypes from "./userTypes";
import companies from "./companies";
import users from "./users";
import applications from "./applications";
import logSources from "./logSources";
import logs from "./logs";
import serverOrigins from "./serverOrigins";
import levelLogs from "./levelLogs";

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
    logSources,
    logs,
    serverOrigins,
    levelLogs
  }
});
