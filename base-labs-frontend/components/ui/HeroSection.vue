<template>
  <section class="bg-yellow-50 py-16 mt-10">
    <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center">
      <div class="md:w-1/2 text-center md:text-left">
        <h1 class="text-4xl font-bold text-yellow-700">
          🌽 ¡El Mejor Maiz Directo del Campo!
        </h1>
        <p class="mt-4 text-gray-600">
          Compra maiz fresco y de la mejor calidad, directamente del granjero Bob. ¡Garantía de frescura y sabor!
        </p>
        <NuxtLink to="/purchase" class="mt-6 inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-800">
          <Icon icon="mdi:cart" class="mr-2" />
          Comprar Ahora
        </NuxtLink>
      </div>

      <div class="md:w-1/2 mt-6 md:mt-0 flex justify-center">
        <img src="/assets/images/svg/logo-corn.svg" alt="Maiz fresco" class=" max-w-md rounded-lg" />
      </div>
    </div>
  </section>
</template>
