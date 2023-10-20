<template>
  <h2>books</h2>
  <book-item-list></book-item-list>
</template>

<script>
import BookItemList from "@/components/BookItemList.vue";

export default {
  components: {
    BookItemList,
  },
  mounted() {
    this.$store.dispatch("getJsonServer");
  },
};
</script>

<style></style>
