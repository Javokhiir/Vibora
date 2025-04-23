<template>
  <div
      class="relative group p-8 rounded-3xl bg-white/60 dark:bg-gray-800/60 border border-tiffany-200 dark:border-tiffany-700 shadow-lg backdrop-blur-xl hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer perspective-[1000px]"
      ref="cardRef"
      @mousemove="handleMouseMove"
      @mouseleave="resetMouse"
      :style="{
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    }"
  >
    <!-- Mouse Trail Glow -->
    <div
        class="absolute inset-0 z-0 pointer-events-none transition duration-300"
        :style="{
        background: `radial-gradient(circle at ${x}px ${y}px, rgba(0, 225, 255, 0.2), transparent 60%)`
      }"
    ></div>

    <!-- Icon -->
    <div class="relative z-10 w-16 h-16 mb-6 mx-auto rounded-full bg-tiffany-200 dark:bg-tiffany-700 flex items-center justify-center shadow-md group-hover:scale-110 transition">
      <span class="text-2xl text-tiffany-600 dark:text-white">{{ icon }}</span>
    </div>

    <!-- Title -->
    <h3 class="relative z-10 text-xl font-semibold text-gray-800 dark:text-white mb-2">{{ title }}</h3>

    <!-- Description -->
    <p class="relative z-10 text-gray-600 dark:text-gray-300 text-center">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: String,
  icon: String,
  description: String
})

const x = ref(-9999)
const y = ref(-9999)
const rotateX = ref(0)
const rotateY = ref(0)
const cardRef = ref(null)

function handleMouseMove(e) {
  const card = cardRef.value
  const rect = card.getBoundingClientRect()

  x.value = e.clientX - rect.left
  y.value = e.clientY - rect.top

  const centerX = rect.width / 2
  const centerY = rect.height / 2

  const deltaX = e.clientX - (rect.left + centerX)
  const deltaY = e.clientY - (rect.top + centerY)

  // Rotate limit: max 10 deg
  rotateX.value = (-deltaY / centerY) * 10
  rotateY.value = (deltaX / centerX) * 10
}

function resetMouse() {
  x.value = -9999
  y.value = -9999
  rotateX.value = 0
  rotateY.value = 0
}
</script>
