<template>
  <div>
    <h1>home</h1>
    <div class="slide-container">
      <img v-for="(img, idx) in imgUrls" :key="idx" :src="img" alt="banner" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgUrls: [
        "https://image.aladin.co.kr/img/bn/book/2023/04/231005_nobel_layer.jpg",
        "https://image.aladin.co.kr/img/bn/book/2023/04/231005_nobel_layer.jpg",
        "https://image.aladin.co.kr/img/bn/book/2023/04/231005_nobel_layer.jpg",
      ],
    };
  },
};
</script>

<style>
@keyframes slide-ani {
  to {
    transform: translateX(-100%);
  }
}
.slide-container {
  display: flex;
  width: 1028px;
  height: 420px;
  overflow: hidden;
  /* animation: slide-ani 1s infinite; */
}
.slide-container > img {
  animation: slide-ani 4s infinite;
}
</style>
