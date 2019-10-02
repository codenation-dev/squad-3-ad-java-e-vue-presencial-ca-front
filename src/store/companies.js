import axios from "axios";
import { domain } from "env";

const state = {
  companies: [],
  company: {
    code: "",
    name: ""
  }
};

const actions = {
  // eslint-disable-next-line no-unused-vars
  async createCompany({ commit }, form) {
    const getCompaniesURL = `${domain}/companies`;
    let params = {
      code: form.code,
      name: form.name
    };

    try {
      await axios.post(getCompaniesURL, params);
    } catch (error) {
      return error;
    }
  },
  async readCompany({ commit }, id) {
    const getCompaniesURL = `${domain}/companies/${id}`;

    try {
      const data = await axios.get(getCompaniesURL);
      commit("READ_COMPANY", data);
    } catch (error) {
      return error;
    }
  },
  // eslint-disable-next-line no-unused-vars
  async updateCompany({ commit }, form) {
    const getCompaniesURL = `${domain}/companies`;
    let params = {
      code: form.code,
      name: form.name,
      id: form.id
    };

    try {
      await axios.put(getCompaniesURL, params);
    } catch (error) {
      return error;
    }
  },
  updateNewCompany({ commit }) {
    commit("UPDATE_NEW_COMPANY");
  },
  async readAllCompanies({ commit }) {
    const getCompaniesURL = `${domain}/companies`;

    try {
      const data = await axios.get(getCompaniesURL);
      commit("READ_ALL_COMPANY", data);
    } catch (error) {
      return error;
    }
  },
  async deleteCompany({ commit }, id) {
    if (confirm("Confirmar exclusão?")) {
      const getCompaniesURL = `${domain}/companies/${id}`;

      try {
        const data = await axios.delete(getCompaniesURL);
        commit("READ_COMPANY", data);
      } catch (error) {
        return error;
      }
    }
  }
};

const mutations = {
  READ_COMPANY(state, { data }) {
    state.company = data;
  },
  READ_ALL_COMPANY(state, { data }) {
    state.companies = data;
  },
  UPDATE_NEW_COMPANY(state) {
    state.company = {
      code: "",
      name: ""
    };
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
