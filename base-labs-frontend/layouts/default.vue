<template>
  <div class="flex flex-col min-h-screen">
    <Header />

    <main class="flex-1">
      <slot />
    </main>

    <footer class="w-full">
      <CallToAction />
    </footer>
  </div>
</template>

<script setup>
import Header from "@/components/ui/Header.vue";
import CallToAction from "@/components/ui/CallToAction.vue";
</script>
