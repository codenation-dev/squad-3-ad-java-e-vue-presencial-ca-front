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
    }
  },
  mutations: {
    SET_TOOLBAR(state, value) {
      state.toolbar = value;
    }
  },
  getters: {
    toolbar(state) {
      return state.toolbar;
    }
  }
};
