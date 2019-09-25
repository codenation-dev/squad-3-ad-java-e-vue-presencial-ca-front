export default {
  namespaced: true,
  state: {
    levelLogs: []
  },
  actions: {
    loadAllLevelLogs: context => {
      context.commit("GET_ALL_LEVEL_LOGS", true);
    }
  },
  mutations: {
    GET_ALL_LEVEL_LOGS(state) {
      state.levelLogs = [
        { id: "1", name: "INFO" },
        { id: "2", name: "TRACE" },
        { id: "3", name: "DEBUG" },
        { id: "4", name: "WARNING" },
        { id: "5", name: "ERROR" },
        { id: "6", name: "FATAL" }
      ];
    }
  },
  getters: {
    levelLogs(state) {
      return state.levelLogs;
    }
  }
};
