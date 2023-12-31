import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../components/LoginPage.vue";
import HomePage from "../components/HomePage.vue";
import AboutPage from "../components/AboutPage.vue";
import MainPage from "@/components/MainPage.vue";
import RegisterPage from "@/components/pages/RegisterPage.vue";
import CreateProductPage from "@/components/pages/products/CreateProductPage.vue";
import ListCart from "@/components/pages/carts/ListCart.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: MainPage,
      name: "Main",
      meta: {
        hideForAuth: true,
      },
    },
    {
      path: "/carts",
      component: ListCart,
      name: "Carts",
      meta: {
        hideForAuth: true,
      },
    },
    {
      path: "/login",
      component: LoginPage,
      name: "Login",
      meta: {
        hideForAuth: true,
      },
    },
    {
      path: "/register",
      component: RegisterPage,
      name: "Register",
      meta: {
        hideForAuth: true,
      },
    },
    {
      path: "/about",
      component: AboutPage,
      name: "About",
      meta: {
        hideForAuth: true,
      },
    },
    {
      path: "/home",
      component: HomePage,
      name: "Home",
      meta: { requiresAuth: true },
    },
    {
      path: "/product/create",
      component: CreateProductPage,
      name: "CreateProduct",
      meta: { requiresAuth: true },
    },
    { path: "/:pathMatch(.*)", component: { template: "Not found" } },
  ],
});
router.beforeEach((to, form) => {
  const publicPages: string[] = ["/login", "/about", "/register"];
  const authRequired: boolean = !publicPages.includes(to.path);
  const refreshToken: string | null = localStorage.getItem("refresh_token");
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (authRequired && refreshToken == null) {
      return { name: "Login" };
    } else {
      return true;
    }
  }

  if (to.matched.some((record) => record.meta.hideForAuth)) {
    if (refreshToken != null && to.name == "Login") {
      return { name: "Home" };
    }

    if (refreshToken != null && to.name == "Register") {
      return { name: "Home" };
    }
    return true;
  }
});

export default router;
