import axios from "axios";
import { domain } from "env";

const state = {
  logs: [],
  log: {}
};

const actions = {
  readLogSearch({ commit }, form) {
    commit("READ_LOG_SEARCH", form);
  },
  updateLog({ commit }, data) {
    commit("UPDATE_LOG", data);
  },
  readLog({ commit }, id) {
    commit("READ_LOG", id);
  },
  async readAllLogs({ commit }) {
    const getLogsURL = `${domain}/logs`;
    const params = {
      serverOrigin: "desenvolvimento"
    };

    try {
      const { data } = await axios.get(getLogsURL, {
        params
      });
      commit("READ_ALL_LOG", data);
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
    //chamar api
    alert("READ_LOG");
  },
  READ_ALL_LOG(state /*, data*/) {
    state.logs = [
      { id: "idlogsource01", name: "nmlogsource01" },
      { id: "idlogsource02", name: "nmlogsource02" },
      { id: "idlogsource03", name: "nmlogsource03" }
    ];
  },
  READ_LOG_SEARCH(state, form) {
    //chamar api
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
  },
  UPDATE_LOG(/*state, data*/) {
    //chamar api
    alert("UPDATE_LOG");
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
