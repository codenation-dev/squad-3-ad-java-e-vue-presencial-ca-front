export default {
  namespaced: true,
  state: {
    companies: []
  },
  actions: {
    loadAllCompanies: context => {
      context.commit("GET_ALL_COMPANIES", true);
    }
  },
  mutations: {
    GET_ALL_COMPANIES(state) {
      state.companies = [
        { id: "1", name: "Empresa 01" },
        { id: "2", name: "Empresa 02" },
        { id: "3", name: "Empresa 03" }
      ];
    }
  },
  getters: {
    companies(state) {
      return state.companies;
    }
  }
};
