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
  CREATE_LOG_SOURCE(/*state, form*/) {
    //chamar api
    alert("CREATE_LOG_SOURCE");
  },
  READ_LOG_SOURCE(/*state, id*/) {
    //chamar api
    alert("READ_LOG_SOURCE");
  },
  READ_ALL_LOG_SOURCE(state) {
    state.logSources = state.logSources = [
      { id: "idlogsource01", name: "nmlogsource01" },
      { id: "idlogsource02", name: "nmlogsource02" },
      { id: "idlogsource03", name: "nmlogsource03" }
    ];
  },
  UPDATE_LOG_SOURCE(/*state, data*/) {
    //chamar api
    alert("UPDATE_LOG_SOURCE");
  },
  DELETE_LOG_SOURCE(/*state, id*/) {
    //chamar api
    alert("DELETE_LOG_SOURCE");
  }
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
