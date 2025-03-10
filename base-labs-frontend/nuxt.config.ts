export default defineNuxtConfig({
  components: [
    {
      path: "~/components/ui",
      global: true,
    },
  ],
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE_URL || "http://localhost:4000/api",
      cookieExpirationDays: Number(process.env.COOKIE_EXPIRATION_DAYS) || 365,
      cookieSecure: process.env.COOKIE_SECURE === "true",
    },
  },
  typescript: {
    strict: true
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ["@/assets/css/tailwind.css"]
})
