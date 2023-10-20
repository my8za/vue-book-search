import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "index", component: () => import("@/views") },
  {
    path: "/book",
    name: "book",
    component: () => import("@/views/Book"),
  },
  {
    path: "/book/:id",
    name: "book-detail",
    component: () => import("@/views/BookDetail"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
