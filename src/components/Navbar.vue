<template>
  <Hero />

  <!-- Overlay for mobile menu -->
  <div
      v-if="isMenuOpen"
      class="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
      @click="isMenuOpen = false"
  ></div>

  <!-- Navbar -->
  <header class="w-full sticky top-0 z-50 bg-white/70 dark:bg-gray-800/60 backdrop-blur-md shadow-md rounded-b-xl">
    <div class="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
      <!-- Animated Logo Switch -->
      <div class="relative w-48 h-12 flex items-center justify-start overflow-hidden">
        <transition name="fade" mode="out-in">
          <template v-if="isLogoImage">
            <img
                key="logo"
                src="/vi-logo.png"
                alt="Vibora PR Logo"
                class="w-14 h-14 object-contain"
            />
          </template>
          <template v-else>
            <transition name="slide-fade">
              <span
                  key="text"
                  class="text-xl font-bold text-blue-500 font-poppins whitespace-nowrap"
              >
                Vibora PR
              </span>
            </transition>
          </template>
        </transition>
      </div>

      <!-- Right section -->
      <div class="flex items-center gap-4">
        <!-- Hamburger icon -->
        <button @click="toggleMenu" class="block lg:hidden text-gray-800 dark:text-white z-50">
          <component :is="isMenuOpen ? XMarkIcon : Bars3Icon" class="w-6 h-6" />
        </button>

        <!-- Desktop Nav -->
        <nav class="hidden lg:flex">
          <ul class="flex flex-wrap justify-center space-x-8 text-gray-800 dark:text-gray-200">
            <li
                v-for="(link) in links"
                :key="link.href"
                class="group font-poppins font-semibold relative"
            >
              <div class="flex items-center gap-2 cursor-pointer">
                <component :is="link.icon" class="w-6 h-6 text-gray-800 dark:text-white " />
              </div>

              <div
                  class="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-xs text-black dark:text-white px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-lg"
              >
                {{ link.text }}
              </div>
            </li>
          </ul>
        </nav>

        <!-- Theme Toggle Button -->
        <div class="relative group">
          <button @click="toggleTheme" class="text-gray-800 dark:text-white flex items-center justify-center">
            <component :is="isDarkMode ? SunIcon : MoonIcon" class="w-6 h-6" />
          </button>
          <div
              class="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-xs text-black dark:text-white px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-lg"
          >
            {{ isDarkMode ? 'Kun' : 'Tun' }}
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <transition name="slide-down">
      <div
          v-if="isMenuOpen"
          class="absolute top-full left-0 w-full bg-white dark:bg-gray-900 p-4 lg:hidden z-50"
      >
        <ul class="space-y-4 font-poppins text-gray-800 dark:text-gray-200">
          <li v-for="link in links" :key="link.href" class="flex items-center gap-2">
            <component :is="link.icon" class="w-5 h-5" />
            <a :href="link.href" @click="closeMenu">{{ link.text }}</a>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon, HomeIcon, InformationCircleIcon, BriefcaseIcon, UsersIcon, PhoneIcon, BanknotesIcon } from "@heroicons/vue/24/outline"
import Hero from "./Hero.vue";


const isMenuOpen = ref(false)
const isLogoImage = ref(true)
const isDarkMode = ref(localStorage.getItem('theme') === 'dark')
const links = [
  { href: "#", text: "Uy", icon: HomeIcon },
  { href: "#about", text: "Biz Haqimizda", icon: InformationCircleIcon },
  { href: "#team", text: "Jamoa", icon: UsersIcon },
  { href: "#projects", text: "Proyektlar", icon: BriefcaseIcon },
  { href: "#price", text: "Narxlar", icon: BanknotesIcon },
  { href: "#contact", text: "Kontakt", icon: PhoneIcon },

]

// Toggle theme
const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}

onMounted(() => {
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  // Toggle the logo image every 4 seconds
  setInterval(() => {
    isLogoImage.value = !isLogoImage.value
  }, 4000)
})

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

.font-poppins {
  font-family: 'Poppins', sans-serif;
}

/* Mobile slide-down menu */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.5s ease;
}
.slide-down-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}
.slide-down-enter-to {
  opacity: 1;
  transform: translateY(0)
}
.slide-down-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Fade for logo */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Slide-Fade for text */
.slide-fade-enter-active {
  animation: slideFadeIn 1s ease forwards;
}
.slide-fade-leave-active {
  animation: fadeOut 1s ease forwards;
}
@keyframes slideFadeIn {
  0% {
    opacity: 0;
    transform: translateX(-30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
