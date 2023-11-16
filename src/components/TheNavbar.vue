<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <a href="#" class="flex items-center">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          class="h-8 mr-3"
          alt="Flowbite Logo"
        />
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >Flowbite
        </span>
      </a>
      <button
        data-collapse-toggle="navbar-dropdown"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-dropdown"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
        <ul
          class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <router-link
              to="home"
              href="#"
              class="block py-2 pl-3 pr-4 text-black md:text-black-700 md:p-0 md:dark:text-black-500 bg-black-700 rounded md:bg-transparent dark:bg-black-600 md:dark:bg-transparent"
              :class="
                currentRouteName === 'Home'
                  ? 'md:text-blue-700 md:p-0 md:dark:text-blue-500 bg-blue-700 rounded md:bg-transparent dark:bg-blue-600'
                  : ''
              "
              aria-current="page"
              >Home</router-link
            >
          </li>

          <li>
            <router-link
              to="about"
              href="#"
              class="block py-2 pl-3 pr-4 text-black md:text-black-700 md:p-0 md:dark:text-black-500 bg-black-700 rounded md:bg-transparent dark:bg-black-600 md:dark:bg-transparent"
              :class="
                currentRouteName === 'About'
                  ? 'md:text-blue-700 md:p-0 md:dark:text-blue-500 bg-blue-700 rounded md:bg-transparent dark:bg-blue-600'
                  : ''
              "
              >About</router-link
            >
          </li>
          <li>
            Cart {{ totalCarts }}
            <button
              type="button"
              class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="dropdownNavbarCart"
              data-dropdown-placement="bottom"
            >
              <span class="sr-only">Cart</span>
              <img
                class="w-8 h-8 rounded-full"
                src="/docs/images/people/profile-picture-3.jpg"
                alt="Cart"
              />
            </button>
            <div
              id="dropdownNavbarCart"
              class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
            >
              <list-cart></list-cart>
            </div>
          </li>
          <li v-if="user != null">
            <button
              type="button"
              class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="dropdownNavbar"
              data-dropdown-placement="bottom"
            >
              <span class="sr-only">Open user menu</span>
              <img
                class="w-8 h-8 rounded-full"
                src="/docs/images/people/profile-picture-3.jpg"
                alt="user photo"
              />
            </button>
            <div
              id="dropdownNavbar"
              class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
            >
              <div class="px-4 py-3">
                <span class="block text-sm text-gray-900 dark:text-white">{{
                  user?.first_name
                }}</span>
                <span
                  class="block text-sm text-gray-500 truncate dark:text-gray-400"
                  >{{ user?.email }}</span
                >
              </div>
              <ul
                class="py-2 text-sm text-gray-700 dark:text-gray-400"
                aria-labelledby="dropdownLargeButton"
              >
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Profile</a
                  >
                </li>
                <li>
                  <router-link
                    to="carts"
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Cart {{ totalCarts }}</router-link
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Earnings</a
                  >
                </li>
              </ul>
              <div class="py-1">
                <a
                  href="#"
                  @click="logout"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                  >Sign out</a
                >
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
import router from "@/routes";
import { authApi } from "@/api/authApi";
import { useAuthStore } from "@/stores/authStores";
import { useCartStore } from "@/stores/cartStores";
import { computed, onMounted, reactive, ref } from "vue";
import { storeToRefs } from "pinia";
import { initDropdowns, initFlowbite } from "flowbite";
import ListCart from "./pages/carts/ListCart.vue";

const authStore = useAuthStore();
const cartStore = useCartStore();
const { authUser } = storeToRefs(authStore);
const { carts } = storeToRefs(cartStore);
const isAuth = computed(() => (authUser.value != null ? true : false));
const user = computed(() => {
  return authUser.value;
});
const listCart = computed(() => {
  return cartStore.getCarts;
});

const totalCarts = computed(() => {
  return cartStore.totalCarts;
});

const currentRouteName = computed(() => {
  return router.currentRoute.value.name;
});
async function logout(): Promise<void> {
  let response = await authApi.post("/auth-service/logout");
  if (response.status == 200) {
    localStorage.clear();
    router.push("login");
  }
}

async function getUser(): Promise<void> {
  try {
    const response = await authApi.post("/auth-service/user");
    await authStore.setAuthUser(response.data.data);

    // Object.assign(user, response.data.data);
  } catch (error) {
    return Promise.reject(error);
  }
}

onMounted(() => {
  initFlowbite();
  initDropdowns();
  getUser();

  // console.log("router", router.currentRoute.value.name);
});
</script>
