import { createWebHistory, createRouter } from "vue-router";
const routes = [
  {
    path: "/",
    component: () => import("@/views/layouts/DefaultLayout.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/views/HomePage.vue"),
      },
      {
        path: "product",
        name: "Product",
        component: () => import("@/views/products/ProductPage.vue"),
      },
      {
        path: "product/:id",
        component: () => import("@/views/products/ProductDetail.vue"),
      },
      {
        path: "order",
        name: "Order",
        component: () => import("@/views/order/OrderPage.vue"),
      },
      {
        path: "about",
        name: "About",
        component: () => import("@/views/about/AboutPage.vue"),
      },
      {
        path: "/detail/album/MercedesMaybach",
        component: () => import("@/views/about/MercedesMaybach.vue"),
      },
      {
        path: "/detail/album/MercedesGClass",
        component: () => import("@/views/about/MercedesGClass.vue"),
      },
      {
        path: "/detail/album/MercedesAMG",
        component: () => import("@/views/about/MercedesAMG.vue"),
      },
      {
        path: "login",
        name: "Login",
        component: () => import("@/views/auth/LoginPage.vue"),
      },
      {
        path: "register",
        name: "Register",
        component: () => import("@/views/auth/RegisterPage.vue"),
      },
    ],
  },
  {
    path: "/admin/",
    component: () => import("@/views/layouts/AdminLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("@/views/admin/ProductManager.vue"),
      },
      
      {
        path: "customer",
        component: () => import("@/views/admin/CustomerManager.vue"),
      },
      {
        path: "request",
        component: () => import("@/views/admin/RequestManager.vue"),
      },
    ],
  },

  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("@/views/NotFound.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
