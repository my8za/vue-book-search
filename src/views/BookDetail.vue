<template>
  <div>
    <div v-if="selectedBook">
      <img
        class="book-img"
        :src="selectedBook.thumbnail"
        :alt="selectedBook.title"
      />
      <div class="book-info">
        <p>{{ selectedBook.status }}</p>
        <h2>{{ selectedBook.title }}</h2>
        <p>정가 {{ selectedBook.price }}</p>
        <p>판매가 {{ selectedBook.sale_price }}</p>
        <p>출판사 {{ selectedBook.publisher }}</p>
        <p>{{ selectedBook.contents ? selectedBook.contents : "" }}</p>
        <p><a :href="selectedBook.url" target="_blank">링크</a></p>
        {{ console.log(selectedBook) }}
      </div>
    </div>
    <div v-else>도서를 선택해주세요</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    bookId: { type: String },
  },
  computed: {
    ...mapState(["selectedBook"]),
  },
};
</script>

<style></style>
