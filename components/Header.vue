<script setup lang="ts">
const route = useRoute()
const navLink = [
  { head: 'About Us', to: '/#about' },
  { head: 'Services', to: '/#services' },
  { head: 'Testimonials', to: '/#testimonials' }
]
</script>

<template>
  <header class="bg-white rounded text-e-primary shadow">
    <div class="lt-2xl:w-site px4 2xl:px10 flex items-center justify-between h14 lg-h18 relative">
      <div class=" relative">
        <NuxtLink to="/">
          <img src="/images/Logo.png" class="w40 hauto" />
        </NuxtLink>
      </div>
      <nav class="">
        <div>
          <!-- <div class="h2 bg-e-primary lt-lg:hidden" /> -->
          <div class="">
            <div class="flex-c justify-end space-x-4.5">
              <NuxtLink
                v-for="item of navLink" :key="item.head"
                :to="item.to" class="nav-link lt-lg-hidden"
                :class="[route.path === item.to ? 'nav-active text-e-secondary' : '']"
              >
                {{ item.head }}
              </NuxtLink>
              <button @click="goToContact" class="btn relative flex text-3.5 items-center gap-2 bg-e-primary px5 py3 rounded-2 text-white font-600 lt-lg:hidden!">
                  Get In Touch
                  <!-- <span class="group-hover:(w-31em h-15em)" /> -->
              </button>
              <button class="lg:hidden py3.5 pr2 outline-none " @click="$emit('mobileNav')">
                <!-- <Icon name="ic:round-menu-open" class="h7 w7" /> -->
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.66663 11.6667H11.6666M33.3333 11.6667H18.3333M33.3333 28.3333H28.3333M6.66663 28.3333H21.6666M6.66663 20H33.3333" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
</svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<style>
/* .btn {
  color: #fff;
  background-image: linear-gradient(45deg, white 50%, transparent 50%);
  background-position: 100%;
  background-size: 400%;
  transition: background 300ms ease-in-out;
  

}
.btn:hover {
    background-position: 0;
    color:#4DB6AC;
  }

.btn:hover > svg{
    fill: #4DB6AC
} */


.btn {
  display: inline-block;
  color: #fff;
  transition: all .3s;
  overflow: hidden;
  z-index: 1;
}
.btn:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
}
.btn:before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 100%;
  background-color: #CAAEA1;
  transition: all .3s;
  z-index: -1;
}
.btn:hover {
  color: #fff;
  &:before {
    width: 100%;
  }
}
</style>