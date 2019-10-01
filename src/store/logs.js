import axios from "axios";
import { domain } from "env";

const state = {
  logs: [],
  log: {},
  live: false
};

const actions = {
  readLog({ commit }, id) {
    commit("READ_LOG", id);
  },
  async readAllLogs({ commit }, form) {
    const getLogsURL = `${domain}/logs`;
    let params = {};

    if (form) {
      params = {
        origin: form.serverOrigin ? form.serverOrigin : "",
        levelLog: form.levelLog ? form.levelLog : "",
        //toFile: !(form.toFile.length > 0),
        details: form.details ? form.details : "",
        orderBy: form.orderBy ? form.orderBy : ""
      };
    }

    try {
      const { data } = await axios.get(getLogsURL, { params });
      commit("READ_ALL_LOG", data);
    } catch (error) {
      return error;
    }
  },
  // eslint-disable-next-line no-unused-vars
  async updateLog({ commit }, id) {
    const setFileURL = `${domain}/logs/file/${id}`;

    try {
      await axios.put(setFileURL);
    } catch (error) {
      return error;
    }
  },
  deleteLog({ commit }, id) {
    if (confirm("Confirmar exclusão?")) {
      commit("DELETE_LOG", id);
    }
  }
};

const mutations = {
  READ_LOG(/*state, id*/) {
    alert("READ_LOG");
  },
  READ_ALL_LOG(state, data) {
    state.logs = data.content;
  },
  DELETE_LOG(/*state, id*/) {
    alert("DELETE_LOG");
  }
};

const getters = {
  logs(state) {
    return state.logs;
  },
  log(state) {
    return state.logs;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
