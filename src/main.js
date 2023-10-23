import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/store";
import router from "./router";
// Vuetify
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

createApp(App).use(store).use(router).use(Vuetify).mount("#app");
