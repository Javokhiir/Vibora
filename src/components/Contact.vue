<template>
  <section id="contact" class="min-h-screen flex items-center justify-center px-4 py-16 bg-gradient-to-b from-white to-gray-100 dark:from-[#0f0f0f] dark:to-[#1a1a1a]">
    <div class="max-w-3xl w-full bg-white/70 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl p-8 md:p-12 space-y-6 transition-all">

      <!-- Title -->
      <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white">
        📡 Aloqa markazi
      </h2>
      <p class="text-center text-gray-600 dark:text-gray-300 text-lg">
        Biz bilan bogʻlanish uchun quyidagi formani toʻldiring.
      </p>

      <!-- Form -->
      <form class="space-y-4">
        <!-- Ism & Email -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input type="text" placeholder="Ismingiz" class="input-style" />
          <input type="email" placeholder="Email manzilingiz" class="input-style" />
        </div>

        <!-- Biznes turi & Qayerdan eshitgan -->
        <!-- Biznes turi -->
        <div>
          <p class="text-gray-600 dark:text-gray-300 mb-1">💼 Biznes turini tanlang</p>
          <Listbox v-model="selectedBusiness">
            <div class="relative w-full">
              <ListboxButton class="select-style">
                {{ selectedBusiness || 'Biznes turini tanlang...' }}
                <ChevronDown class="w-4 h-4 text-gray-400 ml-auto" />
              </ListboxButton>
              <ListboxOptions class="absolute mt-2 w-full bg-white dark:bg-gray-800 shadow-lg rounded-xl z-10 overflow-hidden">
                <ListboxOption :value="null" disabled class="px-4 py-2 text-gray-400 italic">Biznes turini tanlang...</ListboxOption>
                <ListboxOption
                    v-for="option in businessOptions"
                    :key="option"
                    :value="option"
                    class="px-4 py-2 hover:bg-blue-100 dark:hover:bg-gray-700 cursor-pointer flex justify-between"
                >
                  {{ option }}
                  <Check v-if="selectedBusiness === option" class="w-4 h-4 text-blue-500" />
                </ListboxOption>
              </ListboxOptions>
            </div>
          </Listbox>
        </div>

        <!-- Qayerdan eshitgan -->
        <div>
          <p class="text-gray-600 dark:text-gray-300 mb-1">📣 Biz haqimizda qayerdan eshitgansiz?</p>
          <Listbox v-model="selectedReferral">
            <div class="relative w-full">
              <ListboxButton class="select-style">
                {{ selectedReferral || 'Manbani tanlang...' }}
                <ChevronDown class="w-4 h-4 text-gray-400 ml-auto" />
              </ListboxButton>
              <ListboxOptions class="absolute mt-2 w-full bg-white dark:bg-gray-800 shadow-lg rounded-xl z-10 overflow-hidden">
                <ListboxOption :value="null" disabled class="px-4 py-2 text-gray-400 italic">Manbani tanlang...</ListboxOption>
                <ListboxOption
                    v-for="option in referralOptions"
                    :key="option"
                    :value="option"
                    class="px-4 py-2 hover:bg-blue-100 dark:hover:bg-gray-700 cursor-pointer flex justify-between"
                >
                  {{ option }}
                  <Check v-if="selectedReferral === option" class="w-4 h-4 text-blue-500" />
                </ListboxOption>
              </ListboxOptions>
            </div>
          </Listbox>
        </div>


        <!-- Message -->
        <textarea placeholder="Xabaringiz..." rows="5" class="input-style resize-none"></textarea>

        <!-- Submit -->
        <button
            type="submit"
            :disabled="!verified"
            class="relative group w-full h-12 bg-blue-500 text-white font-semibold rounded-xl overflow-hidden shadow-md hover:shadow-blue-glow transition-all"
        >
          <span class="relative z-10">✉️ Xabarni yuborish</span>
          <span class="absolute inset-0 bg-blue-600 group-hover:scale-110 transition-transform duration-300 blur-sm opacity-40"></span>
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'
import { ChevronDown, Check } from 'lucide-vue-next'
import SwipeVerify from './SwipeVerify.vue'

const verified = ref(false)

const businessOptions = ['Onlayn Do‘kon', 'Marketing Agentligi', 'Shaxsiy Brend', 'Startap', 'Boshqa']
const referralOptions = ['Instagram', 'Google', 'Do‘st', 'Reklama', 'Boshqa']

const selectedBusiness = ref(null)
const selectedReferral = ref(null)
</script>

<style scoped>
.input-style {
  @apply w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-white/5 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition;
}

.select-style {
  @apply input-style flex items-center justify-between;
}

.hover\:shadow-blue-glow:hover {
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.6), 0 0 40px rgba(59, 130, 246, 0.4);
}
</style>
