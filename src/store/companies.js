import axios from "axios";
import { domain } from "env";

export default {
  namespaced: true,
  state: {
    companies: []
  },
  actions: {
    async loadAllCompanies({ commit }) {
      const getCompaniesURL = `${domain}/companies`;

      try {
        const { data } = await axios.get(getCompaniesURL);
        commit("GET_ALL_COMPANIES", data);
      } catch (error) {
        return error;
      }
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
