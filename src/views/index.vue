<template>
  <div class="wrapper">
    <search-bar></search-bar>
    <section class="slide-container">
      <img v-for="(img, idx) in imgUrls" :key="idx" :src="img" alt="banner" />
    </section>
    <div class="category"></div>
    <section class="bg-slide"></section>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
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
  components: {
    SearchBar,
  },
};
</script>

<style>
@keyframes slide-animation {
  to {
    transform: translateX(-100%);
  }
}
@keyframes background-animation {
  to {
    background-position: -3000px;
  }
}

.wraper {
  display: flex;
  flex-direction: column;
}
.slide-container {
  display: flex;
  width: 1028px;
  height: 420px;
  overflow: hidden;
  /* margin-bottom: 500px; */
}
.slide-container > img {
  animation: slide-animation 4s infinite linear;
}

.category {
  width: 100%;
  height: 35px;
  background: #ffeb60;
}

.bg-slide {
  display: block;
  margin: -180px 0 0;
  height: 500px;
  margin-top: 200px;
  background: skyblue;
  background-image: url("@/assets/images/slide01.png") 0/3000px repeat-x;
  animation: background-animaiton 100s infinite linear;
}
</style>
