<template>
  <v-app id="inspire">
    <app-header></app-header>
    <main>
      <router-view />
    </main>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import AppFooter from "./layout/components/AppFooter.vue";
import AppHeader from "./layout/components/AppHeader.vue";
export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style scoped>
main {
  /* height: calc(100vh - 88px); */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
}
</style>
