export default {
  namespaced: true,
  state: {
    toolbar: false
  },
  actions: {
    showToolbar: context => {
      context.commit("SET_TOOLBAR", true);
    },
    hideToolbar: context => {
      context.commit("SET_TOOLBAR", false);
    },
    logout({ commit }) {
      commit("DELETE_TOKEN");
    }
  },
  mutations: {
    SET_TOOLBAR(state, value) {
      state.toolbar = value;
    },
    DELETE_TOKEN(state) {
      state.oauth = {};
    }
  },
  getters: {
    toolbar(state) {
      return state.toolbar;
    }
  }
};
