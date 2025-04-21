<template>
  <Transition name="fade">
    <div
        v-if="show"
        class="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center"
    >
      <div class="bg-white dark:bg-[#1b1b1b] rounded-2xl p-6 w-full max-w-lg relative shadow-xl">
        <button @click="closeModal" class="absolute top-3 right-3 text-gray-500 hover:text-red-500">
          ❌
        </button>
        <h2 class="text-xl font-bold text-center text-gray-800 dark:text-white mb-4">
          Sayt test rejimida ishlamoqda 🚀
        </h2>
        <p class="text-sm text-gray-600 dark:text-gray-400 text-center mb-6">
          Iltimos, o‘z fikrlaringizni biz bilan bo‘lishing. Bu juda muhim.
        </p>

        <form class="space-y-4">
          <select
              v-model="type"
              class="w-full px-4 py-2 rounded-lg border dark:border-gray-600 bg-white dark:bg-[#2b2b2b] text-sm"
          >
            <option>Feedback</option>
            <option>Murojaat</option>
            <option>Shikoyat</option>
          </select>

          <textarea
              v-model="message"
              rows="4"
              placeholder="Xabaringizni yozing..."
              class="w-full px-4 py-2 rounded-lg border dark:border-gray-600 bg-white dark:bg-[#2b2b2b] text-sm resize-none"
          ></textarea>

          <input type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
            file:rounded-lg file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100" />

          <button
              @click.prevent="sendFeedback"
              class="w-full bg-gradient-to-r from-purple-400 to-blue-500 text-white py-2 rounded-lg hover:scale-105 transition"
          >
            Yuborish 🚀 (yubormasangiz kechirasiz lekin pushaymon bo‘lishingiz mumkin 😅)
          </button>
        </form>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const show = ref(false)
const type = ref('Feedback')
const message = ref('')

const closeModal = () => {
  show.value = false
}

const sendFeedback = () => {
  console.log('Yuborildi:', { type: type.value, message: message.value })
  alert('Rahmat! Biz buni super jiddiy ko‘rib chiqamiz 😎')
  closeModal()
}

onMounted(() => {
  setTimeout(() => {
    show.value = true
  }, 1000) // 1 minut
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
