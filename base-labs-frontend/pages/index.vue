<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-3xl font-bold mb-4">Bienvenido a la Tienda de Maíz 🌽</h1>
    <p class="mb-4">Tu ID de usuario es: <strong>{{ userId }}</strong></p>
    <NuxtLink to="/purchase" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
      Ir a Compras
    </NuxtLink>
  </div>
</template>

<script setup>
import { useUserId } from "@/composables/useUserId";
import { ref, onMounted } from "vue";

const { getUserId } = useUserId();
const userId = ref("");

onMounted(() => {
  userId.value = getUserId();
});
</script>
