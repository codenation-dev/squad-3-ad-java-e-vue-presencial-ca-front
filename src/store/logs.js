import axios from "axios";
import { domain } from "env";

export default {
  namespaced: true,
  state: {
    logs: []
  },
  actions: {
    async loadAllLogs({ commit }) {
      const getLogsURL = `${domain}/logs`;

      try {
        const { data } = await axios.get(getLogsURL);
        commit("GET_ALL_LOGS", data);
      } catch (error) {
        return error;
      }
    }
  },
  mutations: {
    GET_ALL_LOGS(state) {
      state.logs = [
        { id: "idlog01", name: "nmlog01" },
        { id: "idlog02", name: "nmlog02" },
        { id: "idlog03", name: "nmlog03" }
      ];
    }
  },
  getters: {
    logs(state) {
      return state.logs;
    }
  }
};
