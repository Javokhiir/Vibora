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
      <form @submit.prevent="submitForm" class="space-y-4">
        <!-- Ism & Email -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <input
              v-model="formData.name"
              type="text"
              placeholder="Ismingiz"
              class="input-style"
              required
          />
          <input
              v-model="formData.email"
              type="email"
              placeholder="Email manzilingiz"
              class="input-style"
              required
          />
          <input type="number"
          v-model="formData.number"
                 placeholder="Telefon raqamingiz"
                 class="input-style"
                 required
          >
        </div>

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
        <textarea
            v-model="formData.message"
            placeholder="Xabaringiz..."
            rows="5"
            class="input-style resize-none"
            required
        ></textarea>

        <!-- Submit -->
        <button
            type="submit"
            class="relative group w-full h-12 bg-blue-500 text-white font-semibold rounded-xl overflow-hidden shadow-md hover:shadow-blue-glow transition-all disabled:opacity-50"
        >
          <span class="relative z-9">
            {{ isSubmitting ? 'Yuborilmoqda...' : '✉️ Xabarni yuborish' }}
          </span>
          <span class="absolute bg-blue-600 group-hover:scale-110 transition-transform duration-300 blur-sm opacity-40"></span>
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'
import { ChevronDown, Check } from 'lucide-vue-next'
import { useToast } from 'vue-toastification'


const toast = useToast()

const businessOptions = ['Onlayn Do‘kon', 'O\'quv markaz', 'Shaxsiy Brend', 'Startap', 'Boshqa']
const referralOptions = ['Instagram', 'Google', 'Do‘st', 'Telegram', 'Boshqa']

const TELEGRAM_BOT_TOKEN = '7299238574:AAGRXjkNXQfKQVRhWVKx9pVTo5vJyrTd9jE' // bot token
const TELEGRAM_CHAT_ID = '1306798323' // admin id
const TELEGRAM_API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`

const submitForm = async () => {
  try {
    const message = `
Yangi xabar:
Ism: ${formData.value.name}
Email: ${formData.value.email}
Raqami: ${formData.value.number}
Biznes Turi: ${selectedBusiness.value || 'Tanlanmagan'}
Qayerdan eshitgan: ${selectedReferral.value || 'Tanlanmagan'}
Xabar: ${formData.value.message}
    `

    const response = await fetch(TELEGRAM_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'HTML'
      })
    })

    if (response.ok) {
      toast.success('Xabaringiz muvaffaqiyatli yuborildi!', {
        timeout: 5000,
        icon: '💀'})
      formData.value = { name: '', email: '', number:'', businessType: '', referral: '', message: '' }
      selectedBusiness.value = null
      selectedReferral.value = null
    } else {
      toast.error('Xabarni yuborishda xatolik', {
        timeout: 5000,
        icon: '❌'
      })
    }
  } catch (error) {
    console.error('Error:', error)
    this.$toast.error(error.message)
  }
}
const formData = ref({
  name: '',
  email: '',
  number: '',
  businessType: '',
  referral: '',
  message: ''
})

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
