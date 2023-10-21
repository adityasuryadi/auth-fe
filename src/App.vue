<script setup lang="ts">
import router from "./routes";
import { authApi } from "./api/authApi";
import { useAuthStore } from "@/stores/authStores";
import { storeToRefs } from "pinia";
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
  let response = await authApi.post("logout");
  if (response.status == 200) {
    localStorage.clear();
    router.push("login");
  }
}
</script>

<template>
  <main>
    <router-view></router-view>
  </main>
</template>

