import axios from "axios";
import { domain } from "env";

export default {
  namespaced: true,
  state: {
    users: []
  },
  actions: {
    async loadAllUsers({ commit }) {
      const getUsersURL = `${domain}/users`;

      try {
        const { data } = await axios.get(getUsersURL);
        commit("GET_ALL_USERS", data);
      } catch (error) {
        return error;
      }
    }
  },
  mutations: {
    GET_ALL_USERS(state, data) {
      state.users = data;
    }
  },
  getters: {
    users(state) {
      return state.users;
    }
  }
};
