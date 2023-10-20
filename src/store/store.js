import { createStore } from "vuex";
import { fetchBook, jsonServer } from "@/api/api";

const store = createStore({
  state: {
    books: [],
    jsonBooks: [],
  },
  mutations: {
    SET_BOOK: (state, payload) => {
      state.books = payload.documents;
    },
    // json-sever db.json
    SET_JSON_SERVER: (state, payload) => {
      state.jsonBooks = payload;
    },
  },
  actions: {
    GetBooks: async ({ commit }) => {
      const data = await fetchBook();
      commit("SET_BOOK", data, { root: true });
    },
    // json-sever db.json
    getJsonServer: async ({ commit }) => {
      const data = await jsonServer();
      commit("SET_JSON_SERVER", data, { root: true });
    },
  },
});

export default store;
