import axios from "axios";
import { domain } from "env";

const state = {
  users: [],
  user: {}
};

const actions = {
  createUser({ commit }, form) {
    commit("CREATE_USER", form);
  },
  updateUser({ commit }, data) {
    commit("UPDATE_USER", data);
  },
  async readCurrentUser({ commit }, id) {
    const getUserURL = `${domain}/users/${id}`;

    try {
      const { data } = await axios.get(getUserURL);

      commit("SET_CURRENT_USER", data);
    } catch (error) {
      return error;
    }
  },
  async readAllUsers({ commit }) {
    const getUsersURL = `${domain}/users`;

    try {
      const { data } = await axios.get(getUsersURL);
      commit("READ_ALL_USER", data);
    } catch (error) {
      return error;
    }
  },
  deleteUser({ commit }, id) {
    if (confirm("Confirmar exclusão?")) {
      commit("DELETE_USER", id);
    }
  }
};

const mutations = {
  CREATE_USER(/*state, form*/) {
    //chamar api
    alert("CREATE_USER");
  },
  SET_CURRENT_USER(state, user) {
    console.log("SET_USER");
  },
  READ_USER(/*state, id*/) {
    //chamar api
    alert("READ_USER");
  },
  READ_ALL_USER(state, data) {
    state.users = data;
  },
  UPDATE_USER(/*state, data*/) {
    //chamar api
    alert("UPDATE_USER");
  },
  DELETE_USER(/*state, id*/) {
    //chamar api
    alert("DELETE_USER");
  }
};

const getters = {
  users(state) {
    return state.users;
  },
  user(state) {
    return state.user;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
