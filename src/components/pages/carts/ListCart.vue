<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3">
            <span class="sr-only">Image</span>
          </th>
          <th scope="col" class="px-6 py-3">Product</th>
          <th scope="col" class="px-6 py-3">Qty</th>
          <th scope="col" class="px-6 py-3">Price</th>
          <th scope="col" class="px-6 py-3">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="cart in carts"
          :key="cart.id"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <td class="w-32 p-4">
            <img
              src="/docs/images/products/apple-watch.png"
              :alt="carts.name"
            />
          </td>
          <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
            {{ cart.name }}
          </td>
          <td class="px-6 py-4">
            <div class="flex items-center space-x-3">
              <button
                @click="decrement(cart.id)"
                class="inline-flex items-center justify-center p-1 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                type="button"
              >
                <span class="sr-only">Quantity button</span>
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 2"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h16"
                  />
                </svg>
              </button>
              <div>
                <input
                  type="number"
                  :value="cart.qty"
                  id="first_product"
                  class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="1"
                  required
                />
              </div>
              <button
                class="inline-flex items-center justify-center h-6 w-6 p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                @click="increment(cart.id)"
                type="button"
              >
                <span class="sr-only">Quantity button</span>
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </button>
            </div>
          </td>
          <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
            {{ cart.product_price }}
          </td>
          <td class="px-6 py-4">
            <a
              href="#"
              @click="deleteCart(cart.id)"
              class="font-medium text-red-600 dark:text-red-500 hover:underline"
              >Remove</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted, reactive } from "vue";
import TheNavbar from "@/components/TheNavbar.vue";
import {
  getCart,
  removeCart,
  incrementQty,
  decrementQty,
} from "../../../api/cartApi";
import { useCartStore } from "@/stores/cartStores";
import { storeToRefs } from "pinia";

interface ICart {
  id: string;
  product_id: string;
  name: string;
  qty: number;
  product_price: number;
}

const cartStore = useCartStore();
const { cart } = storeToRefs(cartStore);

onMounted(() => {
  getUserCart();
});

const carts = computed(() => {
  return cartStore.getCarts;
});

async function getUserCart(): Promise<void> {
  await cartStore.fetchCart();
  await Object.assign(carts, cartStore.getCarts);
}

async function deleteCart(id: string) {
  await cartStore.removeProductFromCart(id);
}

async function increment(id: string) {
  await cartStore.incrementQtyProduct(id);
}

async function decrement(id: string) {
  await cartStore.decrementQtyProduct(id);
}
</script>
