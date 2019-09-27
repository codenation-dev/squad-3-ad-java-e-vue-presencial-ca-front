export default {
  namespaced: true,
  state: {
    serverOrigins: []
  },
  actions: {
    readAllServerOrigins: context => {
      context.commit("READ_ALL_SERVER_ORIGIN", true);
    }
  },
  mutations: {
    READ_ALL_SERVER_ORIGIN(state) {
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
