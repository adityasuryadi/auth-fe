<template>
  <the-navbar></the-navbar>
  <div>
    <h1>Home Page</h1>
    <h1>Hello , {{ user?.email }}</h1>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import { authApi } from "../api/authApi";
import { useAuthStore } from "@/stores/authStores";
import { storeToRefs } from "pinia";
import TheNavbar from "@/components/TheNavbar.vue";

const authStore = useAuthStore();
const { authUser } = storeToRefs(authStore);
const user = authUser;
onMounted(() => {
  test();
});

function test() {
  authApi.post("user");
}
</script>
