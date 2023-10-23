<template>
  <div class="books">
    <search-bar></search-bar>
    <book-item-list></book-item-list>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
import BookItemList from "@/components/BookItemList.vue";
export default {
  components: {
    SearchBar,
    BookItemList,
  },
  mounted() {
    this.$store.dispatch("GetBooks");
  },
};
</script>

<style scoped>
.books {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 100vw;
}
</style>
