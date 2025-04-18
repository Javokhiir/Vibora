<template>
  <section class="relative w-full min-h-screen bg-[#0f172a] text-white overflow-hidden px-6 md:px-20 py-20">
    <svg class="absolute left-0 w-full h-24 z-10 pointer-events-none mt-40" viewBox="0 0 1000 100" preserveAspectRatio="none">
      <path
          :d="linePath"
          stroke="#7fffd4"
          stroke-width="3"
          fill="none"
          ref="elasticLine"
      />
    </svg>

    <!-- Kartalar -->
    <div class="relative z-20 mt-28 flex justify-center gap-6 md:gap-12">
      <div
          v-for="(angle, i) in angles"
          :key="i"
          class="w-52 h-60 md:w-64 md:h-72 bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl shadow-2xl origin-top"
          :style="{ transform: `rotate(${angle}deg)` }"
          :ref="el => cardRefs[i] = el"
      >
        <div class="w-full h-full flex items-center justify-center text-center p-4">
          <div class="bg-white text-[#0f172a] p-6 rounded-lg shadow-lg w-full h-full flex items-center justify-center">
            <div class="text-lg font-bold">
              <p>{{ services[i].title }}</p>
              <p class="mt-2">{{ services[i].description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const angles = [-12, -5, 5, 12] // Har bir karta osilgan burchakdan buriladi
const cardRefs = ref([]) // Karta referenslari
const linePath = ref('M 0 50 Q 500 60 1000 50') // Ip chizig‘i
const services = ref([
  { title: 'SEO Optimization', description: 'Google’da yuqori o‘rinlar uchun maxsus strategiyalar.' },
  { title: 'Social Media Campaigns', description: 'Ijtimoiy tarmoqlarda brendni mashhur qilish.' },
  { title: 'Branding & Design', description: 'Yangi kompaniya brendingini yaratish.' },
  { title: 'Content Marketing', description: 'Maqolalar va bloglar orqali trafikni oshirish.' },
]) // Xizmatlar ro‘yxati

onMounted(() => {
  gsap.ticker.add(() => {
    const t = Date.now() * 0.003
    const middleY = 60 + Math.sin(t) * 10
    linePath.value = `M 0 50 Q 500 ${middleY} 1000 50`
  })

  // Kartalarni bir chetidan ipga ilingandek tebratish
  cardRefs.value.forEach((card, i) => {
    gsap.to(card, {
      rotation: angles[i],
      y: 5 + i * 2,
      duration: 2 + i * 0.3,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
      transformOrigin: 'top center',
    })
  })
})
</script>
