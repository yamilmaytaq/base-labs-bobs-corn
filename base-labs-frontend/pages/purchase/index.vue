<template>
  <button
    @click="handlePurchase"
    class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
  >
    Comprar Maíz 🌽
  </button>
</template>

<script setup>
import { usePurchase } from "@/composables/usePurchase";

const { purchaseCorn } = usePurchase();

const handlePurchase = async () => {
  try {
    await purchaseCorn();
  } catch (error) {
    console.error("Error en la compra:", error);
  }
};
</script>