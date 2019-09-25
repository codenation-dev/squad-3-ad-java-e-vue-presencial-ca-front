export default {
  namespaced: true,
  state: {
    logsources: []
  },
  actions: {
    async loadAllLogSources({ commit }) {
      commit("GET_ALL_LOG_SOURCES", true);
    }
  },
  mutations: {
    GET_ALL_LOG_SOURCES(state) {
      state.logsources = [
        { id: "idlogsource01", name: "nmlogsource01" },
        { id: "idlogsource02", name: "nmlogsource02" },
        { id: "idlogsource03", name: "nmlogsource03" }
      ];
    }
  },
  getters: {
    logsources(state) {
      return state.logsources;
    }
  }
};
