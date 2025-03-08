<template>
  <section class="bg-green-600 text-white py-10">
    <div
      class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between"
    >
      <!-- Sección del Desarrollador -->
      <div class="flex items-center gap-4 text-left">
        <img
          src="/assets/images/svg/figure-corn.svg"
          alt="Foto del Desarrollador"
          class="w-20 h-20 rounded-full border-2 border-white shadow-lg"
        />
        <div>
          <h3 class="text-lg font-bold">Desarrollado por</h3>
          <p class="text-gray-200">Yamil Mayta</p>
          <div class="flex gap-3 mt-2">
            <a
              href="https://linkedin.com/in/tuperfil"
              target="_blank"
              class="hover:text-yellow-300 transition"
            >
              <Icon icon="mdi:linkedin" class="text-2xl" />
            </a>
            <a
              href="https://github.com/tuusuario"
              target="_blank"
              class="hover:text-yellow-300 transition"
            >
              <Icon icon="mdi:github" class="text-2xl" />
            </a>
            <a href="tel:+1234567890" class="hover:text-yellow-300 transition">
              <Icon icon="mdi:phone" class="text-2xl" />
            </a>
          </div>
        </div>
      </div>

      <!-- Sección de Call To Action -->
      <div
        class="flex flex-col items-center text-center md:items-end md:text-right"
      >
        <h3 class="text-lg font-extrabold leading-tight">
          🌽 ¡No te quedes sin tu maíz!
        </h3>
        <p class="mt-3 text-gray-200">
          ¡Compra ahora y
          disfruta del mejor maíz fresco!
        </p>
        <NuxtLink
          to="/purchase"
          class="mt-5 inline-flex items-center bg-white text-green-600 px-6 py-3 rounded-lg hover:bg-gray-200 transition"
        >
          <Icon icon="mdi:cart" class="mr-2 text-2xl" />
          Comprar Ahora
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
