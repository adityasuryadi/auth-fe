<template>
  <div class="flex flex-wrap -mb-4">
    <div v-for="product in products" :key="product.name" class="w-1/3 mb-4">
      <card-with-image v-bind="product"></card-with-image>
    </div>
  </div>
</template>

<script setup lang="ts">
import CardWithImage from "@/components/CardWithImage.vue";
import { getProducts } from "@/api/productApi";
import { onMounted, reactive } from "vue";
onMounted(async () => {
  fetchProducts();
});

interface IProducts {
  id: string;
  name: string;
  description: string;
  qty: number;
  price: number;
}

let products: IProducts[] = reactive([]);

async function fetchProducts(): Promise<void> {
  try {
    const response = await getProducts();
    Object.assign(products, response.data.data);
  } catch (error) {
    console.error(error);
  }
}
</script>

<style>
</style>
