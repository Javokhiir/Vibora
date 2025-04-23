<template>
  <div
      class="relative group p-8 rounded-3xl bg-white/60 dark:bg-gray-800/60 border border-tiffany-200 dark:border-tiffany-700 shadow-lg backdrop-blur-xl hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer perspective-[1000px]"
      ref="cardRef"
      @mousemove="handleMouseMove"
      @mouseleave="resetMouse"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      :style="{
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    }"
  >
    <!-- Mouse or Touch Trail Glow -->
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
import { ref, onMounted } from 'vue'

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

let touchStartX = 0
let touchStartY = 0

// Handle mouse movement (for desktop)
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

// Reset mouse position on mouseleave
function resetMouse() {
  x.value = -9999
  y.value = -9999
  rotateX.value = 0
  rotateY.value = 0
}

// Handle touch start (mobile)
function handleTouchStart(e) {
  const touch = e.touches[0]
  touchStartX = touch.clientX
  touchStartY = touch.clientY
}

// Handle touch move (mobile)
function handleTouchMove(e) {
  const touch = e.touches[0]
  const deltaX = touch.clientX - touchStartX
  const deltaY = touch.clientY - touchStartY
  const card = cardRef.value
  const rect = card.getBoundingClientRect()

  // Update mouse position for touch (mobile)
  x.value = touch.clientX - rect.left
  y.value = touch.clientY - rect.top

  const centerX = rect.width / 2
  const centerY = rect.height / 2

  // Apply tilt effect based on touch movement
  rotateX.value = (-deltaY / centerY) * 10
  rotateY.value = (deltaX / centerX) * 10
}

// Handle touch end (mobile)
function handleTouchEnd() {
  // Reset touch values
  touchStartX = 0
  touchStartY = 0
  resetMouse()
}

// On mounted, add device orientation for tilt effect on mobile
onMounted(() => {
  if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', (e) => {
      const { gamma, beta } = e

      // Update rotation based on device orientation
      rotateX.value = beta / 2
      rotateY.value = gamma / 2
    })
  }
})
</script>

<style scoped>
/* Mobile responsive adjustments */
@media (max-width: 768px) {
  .relative {
    perspective: 500px;
  }

  .group:hover .z-10 {
    transform: scale(1.05);
  }
}
</style>
