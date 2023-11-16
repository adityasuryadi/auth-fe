<script setup lang="ts">
import router from "./routes";
import { authApi } from "./api/authApi";
import { useAuthStore } from "@/stores/authStores";
import { storeToRefs } from "pinia";
import CardWithImage from "./components/CardWithImage.vue";
import ListProductCard from "./components/pages/products/ListProductCard.vue";
import NavbarSearch from "./components/NavbarSearch.vue";
import "./index.css";
import {
  initAccordions,
  initCarousels,
  initCollapses,
  initDials,
  initDismisses,
  initDrawers,
  initDropdowns,
  initModals,
  initPopovers,
  initTabs,
  initFlowbite,
  initTooltips,
} from "flowbite";
import { computed, onMounted } from "vue";
onMounted(() => {
  initFlowbite();
  initAccordions();
  initCarousels();
  initCollapses();
  initDials();
  initDismisses();
  initDrawers();
  initDropdowns();
  initModals();
  initPopovers();
  initTabs();
  initTooltips();
});
const authStore = useAuthStore();
const { authUser } = storeToRefs(authStore);
const isAuth = computed(() => (authUser.value != null ? true : false));
const user = authUser;
async function logout(): Promise<void> {
  let response = await authApi.post("/auth-service/logout");
  if (response.status == 200) {
    localStorage.clear();
    router.push("login");
  }
}
</script>
<template>
  <main>
    <!-- <navbar-search></navbar-search> -->
    <router-view></router-view>
    <!-- <h1>List Product</h1>
    <list-product-card></list-product-card> -->
  </main>
</template>

