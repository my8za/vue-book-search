<template>
  <v-app-bar extended>
    <div class="v-toolbar__content">
      <v-app-bar-title><a href="/">merong</a></v-app-bar-title>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-btn icon="mdi-dots-vertical"> </v-btn>
      <gnb-menu></gnb-menu>
    </div>
  </v-app-bar>
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
