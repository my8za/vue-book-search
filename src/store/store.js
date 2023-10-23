import { createStore } from "vuex";
import { fetchBook, jsonServer, searchBook } from "@/api/api";

const store = createStore({
  state: {
    books: [],
    jsonBooks: [],
    selectedBook: {},
  },
  mutations: {
    SET_BOOK: (state, payload) => {
      state.books = payload.documents;
    },
    // json-sever db.json
    SET_JSON_SERVER: (state, payload) => {
      state.jsonBooks = payload;
    },
    DELIVER_BOOK: (state, payload) => {
      state.selectedBook = payload;
    },
  },
  actions: {
    GetBooks: async ({ commit }) => {
      const data = await fetchBook();
      commit("SET_BOOK", data, { root: true });
    },
    GetSearchBooks: async ({ commit }, payload) => {
      const data = await searchBook(payload);
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
