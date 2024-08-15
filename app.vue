<script lang="ts" setup>
import '@unocss/reset/tailwind.css'

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  bodyAttrs: {
    class: 'font-sen antialiased text-gray-9',
  },
  link: [
    { rel: 'icon', href: '/images/Logo.png' },
  ],
  script: [
    { src: 'https://unpkg.com/@botpoison/browser', async: true },
  ],
})

useSeoMeta({
  title: 'Your Spot rented',
  titleTemplate: title => (title !== 'Your Spot rented' ? `${title} | Your Spot rented` : title),
  description: 'Your spot rented is a platform that handles your parking needs',
  ogSiteName: 'YourSpotrented',
  ogImage: '',
  ogImageAlt: 'YourSpotrented'
})
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
