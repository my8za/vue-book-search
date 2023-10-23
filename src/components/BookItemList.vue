<template>
  <ul v-for="book in books" :key="book.id">
    <li @click="goToDetail(book)">
      <img :src="book.thumbnail" :alt="book.title" />
      <p>{{ book.title }}</p>
      <p v-for="author in book.authors" :key="author">{{ author }}</p>
    </li>
  </ul>
</template>

<script>
import { mapState } from "vuex";
import router from "@/router";
import store from "@/store/store";
// 뷰-라우터 내부에는 Vue 인스턴스가 없기때문에 this.$router 접근 불가

export default {
  computed: {
    ...mapState(["books"]),
  },
  methods: {
    goToDetail: (book) => {
      store.commit("DELIVER_BOOK", book);
      router.push({ path: `/book/${book.title}` });
    },
  },
};
</script>

<style></style>
