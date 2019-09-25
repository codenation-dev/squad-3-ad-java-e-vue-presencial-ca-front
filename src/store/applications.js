import axios from "axios";
import { domain } from "env";

export default {
  namespaced: true,
  state: {
    applications: []
  },
  actions: {
    async loadAllApplications({ commit }) {
      const getApplicationsURL = `${domain}/applications`;

      try {
        const { data } = await axios.get(getApplicationsURL);
        commit("GET_ALL_APPLICATIONS", data);
      } catch (error) {
        return error;
      }
    }
  },
  mutations: {
    GET_ALL_APPLICATIONS(state) {
      state.applications = [
        { id: "idapplications01", name: "nmapplications01" },
        { id: "idapplications02", name: "nmapplications02" },
        { id: "idapplications03", name: "nmapplications03" }
      ];
    }
  },
  getters: {
    applications(state) {
      return state.applications;
    }
  }
};
