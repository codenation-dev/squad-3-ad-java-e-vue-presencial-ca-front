const state = {
  logSources: [],
  logSource: {}
};

const actions = {
  createLogSource({ commit }, form) {
    commit("CREATE_LOG_SOURCE", form);
  },
  updateLogSource({ commit }, data) {
    commit("UPDATE_LOG_SOURCE", data);
  },
  readLogSource({ commit }, id) {
    commit("READ_LOG_SOURCE", id);
  },
  async readAllLogSources({ commit }) {
    commit("READ_ALL_LOG_SOURCE");
  },
  deleteLogSource({ commit }, id) {
    if (confirm("Confirmar exclusão?")) {
      commit("DELETE_LOG_SOURCE", id);
    }
  }
};

const mutations = {
  CREATE_LOG_SOURCE(/*state, form*/) {},
  READ_LOG_SOURCE(/*state, id*/) {},
  READ_ALL_LOG_SOURCE(state) {
    state.logSources = state.logSources = [
      { id: "DB", name: "banco de dados" },
      { id: "BE", name: "back-end" },
      { id: "FE", name: "front-end" }
    ];
  },
  UPDATE_LOG_SOURCE(/*state, data*/) {},
  DELETE_LOG_SOURCE(/*state, id*/) {}
};

const getters = {
  logSources(state) {
    return state.logSources;
  },
  logSource(state) {
    return state.logSource;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
