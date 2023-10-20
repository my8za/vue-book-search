import { createStore } from "vuex";
import { fetchBook, jsonServer } from "@/api/api";

const store = createStore({
  state: {
    books: [],
    jsonBooks: [],
  },
  mutations: {
    SET_JSON_SERVER: (state, payload) => {
      state.jsonBooks = payload;
    },
  },
  actions: {
    GetBooks: (context) => {
      const data = fetchBook();
      context.commit("SET_BOOK", data);
    },
    getJsonServer: async ({ commit }) => {
      const data = await jsonServer();
      commit("SET_JSON_SERVER", data, { root: true });
    },
  },
});

export default store;
