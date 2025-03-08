<template>
  <div class="w-full mx-auto mt-8">
    <h2 class="text-3xl font-extrabold text-yellow-700 text-center mb-6">
      Historial de Compras
    </h2>

    <div v-if="!purchases || purchases.length === 0" class="text-center text-gray-600">
      No hay compras registradas aún.
    </div>

    <div v-else class="overflow-x-auto border rounded-lg shadow-md">
      <div class=" max-h-full">
        <table class="w-full border-collapse bg-white">
          <thead class="bg-yellow-400 text-gray-900 uppercase text-sm tracking-wide sticky top-0">
            <tr>
              <th class="px-6 py-4 text-left">Usuario</th>
              <th class="px-6 py-4 text-left">Estado</th>
              <th class="px-6 py-4 text-left">Fecha</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(purchase, index) in purchases" :key="index" class="border-b hover:bg-yellow-100">
              <td class="px-6 py-4 font-mono text-gray-700 text-sm">
                {{ purchase.userId }}
              </td>
              <td class="px-6 py-4">
                <span
                  class="px-4 py-2 text-sm font-semibold rounded-full shadow-md"
                  :class="{
                    'bg-green-500 text-white': purchase.status === 'Exito',
                    'bg-red-500 text-white': purchase.status === 'Fallido'
                  }"
                >
                  {{ purchase.status }}
                </span>
              </td>
              <td class="px-6 py-4 text-gray-600 text-sm">{{ purchase.date }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["purchases"]);
</script>
