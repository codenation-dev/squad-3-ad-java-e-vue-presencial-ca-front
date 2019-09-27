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
  CREATE_APPLICATION(/*state, form*/) {
    //chamar api
    alert("CREATE_APPLICATION");
  },
  READ_APPLICATION(/*state, id*/) {
    //chamar api
    alert("READ_APPLICATION");
  },
  READ_ALL_APPLICATION(state) {
    state.applications = [
      { id: "idapplications01", name: "nmapplications01" },
      { id: "idapplications02", name: "nmapplications02" },
      { id: "idapplications03", name: "nmapplications03" }
    ];
  },
  UPDATE_APPLICATION(/*state, data*/) {
    //chamar api
    alert("UPDATE_APPLICATION");
  },
  DELETE_APPLICATION(/*state, id*/) {
    //chamar api
    alert("DELETE_APPLICATION");
  }
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
