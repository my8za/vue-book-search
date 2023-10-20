<template>
  <div>
    <h2>Test Component</h2>
    Test Page
    <button @click="getJsonServer">click</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["getJsonServer"]),
  },
};
</script>

<style></style>
