<template>
  <footer class="bg-white/70 dark:bg-[#0b0b0b]/70 backdrop-blur-xl border-t border-gray-200 dark:border-gray-700 pt-12">
    <!-- Yuqori qism: 3 qismli tartib -->
    <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start gap-10 text-center md:text-left">
      <!-- Logo -->
      <div>
        <h1 class="text-3xl font-bold text-gray-800 dark:text-white hover:text-blue-500 transition cursor-pointer">
          Vibora <span class="text-blue-500">PR</span>
        </h1>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400"> Oʻlimdan boshqa hammasini iloji bor!</p>
      </div>

      <!-- Navigatsiya havolalari -->
      <div>
        <h2 class="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">Sayt bo'limlari</h2>
        <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <li><a href="#" class="hover:text-blue-500 transition">Bosh sahifa</a></li>
          <li><a href="#about" class="hover:text-blue-500 transition">Biz haqimizda</a></li>
          <li><a href="#projects" class="hover:text-blue-500 transition">Loyihalar</a></li>
          <li><a href="#team" class="hover:text-blue-500 transition">Jamoamiz</a></li>
          <li><a href="#contact" class="hover:text-blue-500 transition">Aloqa</a></li>
        </ul>
      </div>

      <!-- Ijtimoiy tarmoqlar -->
      <div>
        <h2 class="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">Ijtimoiy tarmoqlar</h2>
        <div class="flex justify-center md:justify-start space-x-5 text-xl">
          <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition">
            <font-awesome-icon :icon="['fab', 'facebook-f']" />
          </a>
          <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition">
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </a>
          <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition">
            <font-awesome-icon :icon="['fab', 'twitter']" />
          </a>
          <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition">
            <font-awesome-icon :icon="['fab', 'telegram-plane']" />
          </a>
        </div>
      </div>
    </div>

    <!-- Simple Chiziq -->
    <div class="w-full h-[1px] mt-10 bg-gray-300 dark:bg-gray-700"></div>

    <!-- Pastki yozuv -->
    <div class="text-center text-sm text-gray-500 dark:text-gray-400 py-5">
      © 2025 Vibora PR. Barcha huquqlar himoyalangan.
    </div>
  </footer>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faInstagram, faTwitter, faTelegramPlane } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebookF, faInstagram, faTwitter, faTelegramPlane)
</script>
