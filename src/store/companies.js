import axios from "axios";
import { domain } from "env";

const state = {
  companies: [],
  company: {}
};

const actions = {
  createCompany({ commit }, form) {
    commit("CREATE_COMPANY", form);
  },
  updateCompany({ commit }, data) {
    commit("UPDATE_COMPANY", data);
  },
  readCompany({ commit }, id) {
    commit("READ_COMPANY", id);
  },
  async readAllCompanies({ commit }) {
    const getCompaniesURL = `${domain}/companies`;

    try {
      const { data } = await axios.get(getCompaniesURL);
      commit("READ_ALL_COMPANY", data);
    } catch (error) {
      return error;
    }
  },
  deleteCompany({ commit }, id) {
    if (confirm("Confirmar exclusão?")) {
      commit("DELETE_COMPANY", id);
    }
  }
};

const mutations = {
  CREATE_COMPANY(/*state, form*/) {
    //chamar api
    alert("CREATE_COMPANY");
  },
  READ_COMPANY(/*state, id*/) {
    //chamar api
    alert("READ_COMPANY");
  },
  READ_ALL_COMPANIES(state) {
    state.companies = [
      { id: "1", name: "Empresa 01" },
      { id: "2", name: "Empresa 02" },
      { id: "3", name: "Empresa 03" }
    ];
  },
  UPDATE_COMPANY(/*state, data*/) {
    //chamar api
    alert("UPDATE_COMPANY");
  },
  DELETE_COMPANY(/*state, id*/) {
    //chamar api
    alert("DELETE_COMPANY");
  }
};

const getters = {
  companies(state) {
    return state.companies;
  },
  company(state) {
    return state.company;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
