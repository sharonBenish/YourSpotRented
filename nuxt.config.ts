// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt',
  ],
  plugins: [
    { src: "@/plugins/aos", mode: "client" },
  ],
})
