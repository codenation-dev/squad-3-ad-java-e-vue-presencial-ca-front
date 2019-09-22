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

      const { data } = await axios.post(
        `${domain}/oauth/token?grant_type=password` + "&username=" + form.username + "&password=" + form.password,
        { ...form, grant_type: "password" },
        { headers }
      );

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
  getters: {
    user(state) {
      const [, body] = state.oauth.access_token.split(".");
      return JSON.parse(atob(body));
    }
  }
};
