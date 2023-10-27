import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import ExampleView from "@/views/ExampleView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    meta: {
      title: "Home Page",
    },
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/example-route",
    name: "Example",
    meta: {
      title: "Example route", // Change this to set the page title
    },
    component: ExampleView, // Make sure to replace with your actual components
    /** Nested Route */
    // children: [
    //   {
    //     path: "",
    //     component: "",
    //   },
    // ],
    /** Router Middleware  */
    // beforeEnter: (to, from, next) => {
    //   // e.g Check if the user has admin privileges
    // },
  },
  /** Dynamic Route */
  // {
  //   path: "/example-route/:id",
  //   props: true, // Pass route params as props
  //   component: () => import(""),
  // },
  // Add more routes here
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  // scrollBehavior(to, from, savedPosition) {
  //   if (to.hash) {
  //     return {
  //       el: to.hash,
  //       behavior: "smooth",
  //     };
  //   } else if (savedPosition) {
  //     return savedPosition;
  //   } else {
  //     return { left: 0, top: 0 };
  //   }
  // },
});

router.beforeEach((to, _from, next) => {
  document.title = (to.meta.title as string) || "Default Title";
  next();
});

export default router;
