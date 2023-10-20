<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/book">Book</router-link>
    <router-link to="/">Login</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: ["book", "login"],
    };
  },
};
</script>

<style></style>
