import axios from "axios";
import { domain } from "env";

const state = {
  applications: [],
  application: {}
};

const actions = {
  createApplication({ commit }, form) {
    commit("CREATE_APPLICATION", form);
  },
  updateApplication({ commit }, data) {
    commit("UPDATE_APPLICATION", data);
  },
  readApplication({ commit }, id) {
    commit("READ_APPLICATION", id);
  },
  async readAllApplications({ commit }) {
    const getApplicationsURL = `${domain}/applications`;

    try {
      const { data } = await axios.get(getApplicationsURL);
      commit("READ_ALL_APPLICATION", data);
    } catch (error) {
      commit("READ_ALL_APPLICATION");
      return error;
    }
  },
  deleteApplication({ commit }, id) {
    if (confirm("Confirmar exclusão?")) {
      commit("DELETE_APPLICATION", id);
    }
  }
};

const mutations = {
  CREATE_APPLICATION(/*state, form*/) {},
  READ_APPLICATION(/*state, id*/) {},
  READ_ALL_APPLICATION(state) {
    state.applications = [
      { id: "site", name: "site da empresa" },
      { id: "sistema", name: "gerenciador de logs" },
      { id: "RH", name: "recursos humanos" }
    ];
  },
  UPDATE_APPLICATION(/*state, data*/) {},
  DELETE_APPLICATION(/*state, id*/) {}
};

const getters = {
  applications(state) {
    return state.applications;
  },
  application(state) {
    return state.application;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
