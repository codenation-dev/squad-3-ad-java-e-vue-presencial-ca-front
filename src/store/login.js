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

      try {
        const { data } = await axios.post(getTokenURL, body, {
          headers,
          params
        });
        commit("save_token", data);
      } catch (error) {
        return error;
      }
    },
    async signup(context, form) {
      const { status } = await axios.post(`${domain}/users`, form);

      return status;
    },
    async confirm(context, token) {
      await axios.post(`${domain}/users/confirm`, { token });
    },
    async checkAvailability(context, user) {
      try {
        const { data, status } = await axios.get(
          `${domain}/users/validate?userCode=${user}`
        );

        return { data, status };
      } catch (error) {
        alert(error);
      }
    }
  },
  mutations: {
    save_token(state, oauth) {
      state.oauth = oauth;
    }
  },
  getters: {}
};
