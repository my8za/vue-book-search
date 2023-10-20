<template>
  <ul v-for="(book, idx) in books" :key="book.id">
    <li
      @click="
        $router.push({
          name: 'book-detail',
          params: { id: idx, data: book },
        })
      "
    >
      <img :src="book.thumbnail" :alt="book.title" />
      <p>{{ book.title }}</p>
      <p v-for="author in book.authors" :key="author">{{ author }}</p>
    </li>
  </ul>
</template>

<script>
import { mapState } from "vuex";
// import { useRouter } from "vue-router";
// const router = useRouter();

export default {
  computed: {
    ...mapState(["books"]),
  },
  methods: {
    goToDetail: () => {
      // router.push({
      //   name: "book-detail",
      //   state: { book },
      // });
    },
  },
};
</script>

<style></style>
