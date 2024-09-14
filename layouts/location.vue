<script setup lang="ts">
const route = useRoute()
const mobileNavOpen = ref(false)

watch(() => route.path, () => {
  mobileNavOpen.value = false
})
</script>

<template>
  <main class="relative min-h-screen overflow-x-hidden" flex="~ col">
    <section class="">
      <slot />
    </section>
  </main>
</template>