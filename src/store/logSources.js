export default {
  namespaced: true,
  state: {
    logSources: []
  },
  actions: {
    async loadAllLogSources({ commit }) {
      commit("GET_ALL_LOG_SOURCES", true);
    }
  },
  mutations: {
    GET_ALL_LOG_SOURCES(state) {
      state.logSources = [
        { id: "idlogsource01", name: "nmlogsource01" },
        { id: "idlogsource02", name: "nmlogsource02" },
        { id: "idlogsource03", name: "nmlogsource03" }
      ];
    }
  },
  getters: {
    logSources(state) {
      return state.logSources;
    }
  }
};
