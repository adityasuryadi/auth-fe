import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../components/LoginPage.vue";
import HomePage from "../components/HomePage.vue";
import AboutPage from "../components/AboutPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/login",
      component: LoginPage,
      name: "Login",
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
    { path: "/:pathMatch(.*)", component: { template: "Not found" } },
  ],
});
router.beforeEach((to, form) => {
  const publicPages: string[] = ["/login", "about"];
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
    return true;
  }
});

export default router;
