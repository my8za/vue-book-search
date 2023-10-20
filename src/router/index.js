import { createRouter, createWebHistory } from "vue-router";

// const routes = [
// { path: "/test", component: () => import("@/components/TestComp") },
// ];
const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/test", component: () => import("@/components/TestComp") }],
});

export default router;
