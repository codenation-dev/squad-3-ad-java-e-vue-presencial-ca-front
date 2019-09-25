export default {
  namespaced: true,
  state: {
    serverOrigins: []
  },
  actions: {
    loadAllServerOrigins: context => {
      context.commit("GET_ALL_SERVER_ORIGINS", true);
    }
  },
  mutations: {
    GET_ALL_SERVER_ORIGINS(state) {
      state.serverOrigins = [
        { id: "1", name: "PRODUCTION" },
        { id: "2", name: "HOMOLOGATION" },
        { id: "3", name: "DEVELOPMENT" }
      ];
    }
  },
  getters: {
    serverOrigins(state) {
      return state.serverOrigins;
    }
  }
};
