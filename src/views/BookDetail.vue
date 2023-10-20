<template>
  {{ $route.params.id }}
  {{ book }}
</template>

<script>
export default {
  props: {
    book: { type: Object },
  },
};
</script>

<style></style>
