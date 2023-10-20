<template>
  <header>
    <h1>merong</h1>
    <gnb-menu></gnb-menu>
  </header>
</template>

<script>
import GnbMenu from "@/components/GnbMenu.vue";
export default {
  components: {
    GnbMenu,
  },
};
</script>

<style>
header {
  position: sticky;
  z-index: 9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #ddd;
  background: #fff;
}
header > ul {
  display: flex;
  list-style-type: none;
}
</style>
