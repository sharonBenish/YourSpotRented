<script setup lang="ts">
const route = useRoute()
const router = useRouter()

const scrollToSection = () => {
  const section = document.getElementById('contact');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

function goToContact() {
  if (route.path === '/') {
    // User is on the home page, scroll to contact
    scrollToSection()
  } else {
    // User is not on the home page, navigate to home then scroll
    router.push('/#contact')
  }
}
defineProps({
  isOpen: Boolean,
})

const navLink = [
  { head: 'Home', to: '/' },
  { head: 'About Us', to: '/#about' },
  { head: 'Services', to: '/#services' },
  { head: 'Testimonials', to: '/#testimonials' }
]
</script>

<template>
  <Transition name="slide-fade">
    <div v-show="isOpen" class="h-100svh lg:hidden bg-white flex flex-col  text-e-primary">
      <div class="flex justify-between items-center px-6">
        <NuxtLink to="/">
          <img src="/images/Logo.png" class="w35 hauto" />
        </NuxtLink>
        <button class="px6 py2 my3 place-self-end" @click="$emit('closeNav')">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>
      
      <div class="px-6 flex flex-col flex-1 pb14">
        <NuxtLink
          v-for="item of navLink"
          :key="item.head"
          :to="item.to"
          class="border-b border-e-primary p-4 text-center block"
        >
          {{ item.head }}
        </NuxtLink>
        <!-- <div flex-auto  /> -->
        <NuxtLink
          @click="goToContact()"
          class="flex justify-center mt-20 border border-e-primary px-2 py-4"
        >
          Get In Touch
        </NuxtLink>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: transform 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: transform 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from, .slide-fade-leave-to {
  transform: translateX(100%);
}
</style>