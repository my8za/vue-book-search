<template>
  <div id="app">
    {{ books }}
    <button @click="GetBooks">fetch books</button>
    <ul>
      <li v-for="(book, idx) in books" :key="idx"></li>
    </ul>
    <router-link to=/test>Test</router-link>
    <router-view />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["books"]),
  },
  methods: {
    ...mapActions(["GetBooks"]),
  },
};
</script>
