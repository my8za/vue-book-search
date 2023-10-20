import { createStore } from "vuex";
import { fetchBook } from "@/api/api";

const store = createStore({
  state: {
    books: [],
  },
  mutaions: {
    SET_BOOK: (state, payload) => {
      console.log(payload);
    },
  },
  actions: {
    GetBooks: (context) => {
      const data = fetchBook();
      context.commit("SET_BOOK", data);
    },
  },
});

export default store;
