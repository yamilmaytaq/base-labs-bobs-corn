<template>
  <div class="max-w-6xl mx-auto p-6 mt-20">
    <div class="relative bg-green-100 rounded-lg shadow-lg overflow-hidden">
      <div class="relative p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="md:w-2/3 text-center md:text-left">
          <h1 class="text-lg font-extrabold text-green-700">🌽 ¡Compra el mejor maiz fresco!</h1>
          <p class="text-gray-700 mt-3 text-lg">
            Disfruta de la calidad premium directamente del granjero Bob.
          </p>
        </div>
        <button
          @click="handlePurchase"
          class="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-800"
        >
          <Icon icon="mdi:cart" class="mr-2 text-2xl" />
          Comprar Ahora
        </button>
      </div>
    </div>

    <PurchaseHistory :purchases="purchaseHistory" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { usePurchase } from "@/composables/usePurchase";
import PurchaseHistory from "@/components/ui/PurchaseHistory.vue";

useHead({
  title: "Bob's Corn - Compra",
});

const { postPurchaseCorn, getPurchaseHistory } = usePurchase();
const purchaseHistory = ref([]);

const fetchPurchaseHistory = async () => {
  try {
    const response = await getPurchaseHistory();
    purchaseHistory.value = response.result;
  } catch (error) {
    console.error("Error al obtener historial de compras:", error);
  }
};

onMounted(fetchPurchaseHistory);

const handlePurchase = async () => {
  try {
    await postPurchaseCorn();
  } catch (error) {
    console.error("Error en la compra:", error);
  } finally {
    await fetchPurchaseHistory();
  }
};
</script>