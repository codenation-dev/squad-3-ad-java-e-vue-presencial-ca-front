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
      alert(
        form.company +
          ", " +
          form.application +
          ", " +
          form.serverOrigin +
          ", " +
          form.levelLog +
          ", " +
          form.orderBy +
          ", " +
          form.searchFor +
          ", " +
          form.searchForText
      );
      params = {
        origin: form.serverOrigin ? form.serverOrigin : "",
        levelLog: form.levelLog ? form.levelLog : ""
      };
    }

    try {
      const { data } = await axios.get(getLogsURL, { params });
      commit("READ_ALL_LOG", data);
    } catch (error) {
      return error;
    }
  },
  updateLog({ commit }, data) {
    commit("UPDATE_LOG", data);
  },
  async updateLiveLog({ commit }, data) {
    const getLiveLogURL = `${domain}/gerarLog`;

    try {
      const { data } = await axios.get(getLiveLogURL);
      commit("UPDATE_LIVE_LOG", data);
    } catch (error) {
      commit("UPDATE_LIVE_LOG", data);
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
    //chamar api
    alert("READ_LOG");
  },
  READ_ALL_LOG(state, data) {
    state.logs = data.content;
  },
  UPDATE_LOG(/*state, data*/) {
    //chamar api
    alert("UPDATE_LOG");
  },
  UPDATE_LIVE_LOG(state) {
    alert("UPDATE_LIVE_LOG");
    state.live = !state.live;
  },
  DELETE_LOG(/*state, id*/) {
    //chamar api
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
