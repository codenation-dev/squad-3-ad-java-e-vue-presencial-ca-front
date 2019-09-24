export default {
  namespaced: true,
  state: {
    userTypes: []
  },
  actions: {
    loadAllUserTypes: context => {
      context.commit("GET_ALL_USER_TYPES", true);
    }
  },
  mutations: {
    GET_ALL_USER_TYPES(state) {
      state.userTypes = [
        { id: "1", name: "USER" },
        { id: "2", name: "ADMIN" },
        { id: "3", name: "COMPANYADMIN" }
      ];
    }
  },
  getters: {
    userTypes(state) {
      return state.userTypes;
    }
  }
};
