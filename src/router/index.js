import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "index", component: () => import("@/views") },
  {
    path: "/book",
    name: "books",
    component: () => import("@/views/Book"),
  },
  {
    path: "/book/:bookId",
    name: "book",
    component: () => import("@/views/BookDetail"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
