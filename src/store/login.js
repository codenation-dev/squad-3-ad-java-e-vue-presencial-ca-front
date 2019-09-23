import axios from "axios";
import { domain } from "env";

export default {
  namespaced: true,
  state: {
    oauth: {}
  },
  actions: {
    async login({ commit }, form) {
      const headers = {
        Authorization: "Basic YWRtaW46YWRtaW4="
      };
      const getTokenURL = `${domain}/oauth/token`;
      const body = null;
      const params = {
        grant_type: "password",
        username: form.username,
        password: form.password
      };

      const { data } = await axios.post(getTokenURL, body, { headers, params });

      commit("save_token", data);
    },
    async signup(context, form) {
      await axios.post(`${domain}/users`, form);
    },
    async confirm(context, token) {
      await axios.post(`${domain}/users/confirm`, { token });
    }
  },
  mutations: {
    save_token(state, oauth) {
      state.oauth = oauth;
    }
  },
  getters: {}
};
