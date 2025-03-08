<script setup>
import HeroSection from "@/components/ui/HeroSection.vue";
import FeaturesSection from "@/components/ui/FeaturesSection.vue";
import CallToAction from "@/components/ui/CallToAction.vue";
import { useUserId } from "@/composables/useUserId";
import { ref, onMounted } from "vue";

useHead({
  title: "Bob's Corn",
});

const { getUserId } = useUserId();
const userId = ref("");

onMounted(() => {
  userId.value = getUserId();
});
</script>

<template>
  <main>
    <HeroSection />
    <FeaturesSection />
  </main>
</template>
