<template>
  <header class="w-full bg-yellow-400 shadow-md fixed">
    <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
      <NuxtLink
        to="/"
        class="flex items-center text-2xl font-bold text-gray-800"
      >
        <Icon icon="mdi:corn" class="text-yellow-700 mr-2 text-4xl" />
        Bob's Corn
      </NuxtLink>

      <nav class="flex gap-6">
        <NuxtLink to="/" class="nav-item">
          <Icon icon="mdi:home" class="mr-2 text-xl" />
          Home
        </NuxtLink>
        <NuxtLink to="/purchase" class="nav-item">
          <Icon icon="mdi:cart" class="mr-2 text-xl" />
          Compras
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.nav-item {
  @apply flex items-center text-gray-800 font-medium relative transition-all;
}

.nav-item::after {
  content: "";
  @apply absolute left-0 bottom-0 w-0 h-[2px] bg-gray-800 transition-all duration-300;
}

.nav-item:hover::after {
  @apply w-full;
}

.nav-item:hover {
  @apply text-yellow-700;
}
</style>
