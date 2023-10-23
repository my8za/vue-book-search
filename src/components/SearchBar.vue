<template>
  <div>
    <form @submit.prevent="searchBook(keyword)">
      <input
        placeholder="검색어를 입력해주세요"
        v-model="keyword"
        @focus="keyword = ''"
      />
      <button>검색</button>
    </form>
    <!-- <div class="books-options">
      <div className="books-orders">
        <button>최신순</button>
        <button>높은 가격 순</button>
        <button>낮은 가격 순</button>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    searchBook() {
      this.$store.dispatch("GetSearchBooks", this.keyword);
    },
  },
};
</script>

<style></style>
