export default {
  namespaced: true,
  state: {
    userTypes: []
  },
  actions: {
    readAllUserTypes: context => {
      context.commit("READ_ALL_USER_TYPE", true);
    }
  },
  mutations: {
    READ_ALL_USER_TYPE(state) {
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
