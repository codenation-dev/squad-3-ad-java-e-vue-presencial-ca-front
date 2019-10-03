import axios from "axios";
import { domain } from "env";

const state = {
  logs: [],
  log: {},
  pageNumber: 0,
  totalPages: 0
};

const actions = {
  readLog({ commit }, id) {
    commit("READ_LOG", id);
  },
  async readAllLogs({ commit, state }, form) {
    const getLogsURL = `${domain}/logs`;
    let params = {};

    if (form) {
      params = {
        companyId: form.company ? form.company : "",
        applicationId: form.application ? form.application : "",
        origin: form.serverOrigin ? form.serverOrigin : "",
        levelLog: form.levelLog ? form.levelLog : "",
        orderBy: form.orderBy ? form.orderBy : "",
        //toFile: !(form.toFile.length > 0),
        details: form.details ? form.details : "",
        page: state.pageNumber
      };
    }

    try {
      const { data } = await axios.get(getLogsURL, { params });
      commit("READ_ALL_LOG", data);
    } catch (error) {
      return error;
    }
  },
  // eslint-disable-next-line no-unused-vars
  async updateLog({ commit }, id) {
    const setFileURL = `${domain}/logs/file/${id}`;

    try {
      await axios.put(setFileURL);
    } catch (error) {
      return error;
    }
  },
  deleteLog({ commit }, id) {
    if (confirm("Confirmar exclusão?")) {
      commit("DELETE_LOG", id);
    }
  },
  updateToNextPage({ commit, dispatch }, form) {
    commit("UPDATE_NUMBER_PAGE", 1);
    dispatch("readAllLogs", form);
  },
  updateToPreviousPage({ commit, dispatch }, form) {
    commit("UPDATE_NUMBER_PAGE", -1);
    dispatch("readAllLogs", form);
  }
};

const mutations = {
  READ_LOG(/*state, id*/) {
    alert("READ_LOG");
  },
  READ_ALL_LOG(state, data) {
    state.logs = data.content;
    state.pageNumber = data.number;
    state.totalPages = data.totalPages;
  },
  UPDATE_NUMBER_PAGE(state, pages) {
    if (
      state.pageNumber + 1 < state.totalPages &&
      (pages > 0 || state.pageNumber)
    ) {
      state.pageNumber = state.pageNumber + pages;
    }
  },
  DELETE_LOG(/*state, id*/) {
    alert("DELETE_LOG");
  }
};

const getters = {
  logs(state) {
    return state.logs;
  },
  log(state) {
    return state.logs;
  },
  pageNumber(state) {
    return state.pageNumber + 1;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
