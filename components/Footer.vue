<script setup lang="ts">
const footerLinks = [
  {
    title: 'Navigation',
    links: [
      { head: 'Home', to: '/' },
      { head: 'About Us', to: '/#about' },
      { head: 'Services', to: '/#services' },
      { head: 'Testimonials', to: '/#testimonials' },
    ],
  },
  {
    title: 'Our Contact',
    links: [
      { head: 'customer.support@yourspotrented.com', to: 'mailto:' },
      { head: 'Contact Sales team:', to:''},
      { head: '(708) 475-0760', to: 'tel:' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { head: 'Privacy Policy', to: '/privacy' },
      { head: 'Terms and Conditions', to: '/terms' },
    ],
  }
]

const year = new Date().getFullYear()
</script>

<template>
  <footer class="pt14 bg-white">  
    <div class="w-site lt-sm:px px-6 lg-px-16 pb8 lg:pb15">
      <div class="flex justify-between items-center gap-4">
        <NuxtLink to="/" class="-ml4">
          <img src="/images/Logo.png" class="w35 md:w45 hauto lt-md:ml4" />
        </NuxtLink>
        <button @click="goToContact" class="btn relative flex lt-md:text-3 text-3.5 items-center gap-2 bg-e-primary px8 lt-md:px6 py3 rounded-2 text-white font-600">
          Get In Touch
          <!-- <span class="group-hover:(w-31em h-15em)" /> -->
        </button>
      </div>
      <div class="flex-2/5 flex lt-lg:mt4 flex justify-between flex-wrap gap-y-6 py10">
        <div v-for="item of footerLinks" :key="item.title" class="text-gray-7 lt-lg:w-1/2 ">
          <h4 class="mb6 relative text-e-primary lg:text-4.25 fw500 before:(content-[''] absolute left-0 -bottom-2.5 h0.5 bg-e-primary w10 rounded-full)">
            {{ item.title }}
          </h4>
          <NuxtLink v-if="item.title !== 'Contact'" v-for="list of item.links" :key="list.head" :to="list.to" class="text-3 lg:text-3.75 mb1.5 fw300 block hover:text-e-primary duration-400">
            {{ list.head }}
          </NuxtLink>
          <template v-else v-for="list of item.links" :key="list.to"  >
            <a v-if="list.to !==''" :href="`${list.to}${list.head}`" target="_blank" class="text-3 lg:text-3.75 mb1.5 fw300 block hover:text-e-primary duration-400">{{list.head}}</a>
            <p v-else class="text-4 fw600">{{list.head}}</p>
          </template>
        </div>
      </div>
      <div class="">
        <div class="h0.5 w1/4 bg-[#D9D9D9] mx-auto my5"></div>
        <div class="w-max flex-c text-3 lg:text-3.25 fw500 text-[#757575] tracking-tight lt-lg:mt text-center mx-auto">
          <p mr1>
            Copyright {{ year }}
          </p>
          <!-- <Icon name="ph:copyright" class="h3.5 w3.5 mt0.1" /> -->
          <p ml1>
            Yourspotrented.com. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>