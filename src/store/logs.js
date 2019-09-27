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
      const params = {
        serverOrigin: "desenvolvimento"
      };

      try {
        const { data } = await axios.get(getLogsURL, {
          params
        });
        commit("GET_ALL_LOGS", data);
      } catch (error) {
        return error;
      }
    }
  },
  mutations: {
    GET_ALL_LOGS(state, data) {
      state.logs = data;
    }
  },
  getters: {
    logs(state) {
      return state.logs;
    }
  }
};
