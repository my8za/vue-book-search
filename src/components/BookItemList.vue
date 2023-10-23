<template>
  <ul class="book-list-wrap">
    <li v-for="book in books" :key="book.id">
      <div @click="goToDetail(book)">
        <img :src="book.thumbnail" :alt="book.title" />
        <p>{{ book.title }}</p>
        <p v-for="author in book.authors" :key="author">{{ author }}</p>
      </div>
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

<style scoped>
.book-list-wrap {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  list-style-type: none;
}
</style>
