<template>
  <ul v-for="book in jsonBooks" :key="book.id">
    <li>
      <img :src="book.thumbnail" />
      <p>{{ book.title }}</p>
    </li>
  </ul>
</template>

<script>
import { mapState } from "vuex";
export default {
  created() {},
  computed: {
    ...mapState(["jsonBooks"]),
  },
};
</script>

<style></style>
