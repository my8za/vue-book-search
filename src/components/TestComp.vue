<template>
  <div>
    <h2>Test Component</h2>
    Test Page
    <button @click="getJsonServer">click</button>
    {{ jsonBooks }}
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["jsonBooks"]),
  },
  methods: {
    ...mapActions(["getJsonServer"]),
  },
};
</script>

<style></style>
