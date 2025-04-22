```vue
<template>
  <div id="price" class="relative bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
    <!-- Blur background -->
    <div class="absolute inset-0 z-0 backdrop-blur-3xl bg-white/30 dark:bg-gray-800/30 rounded-[3rem] scale-110"></div>

    <!-- Desktop Version -->
    <div v-if="!isMobile">
      <!-- Title & Switch -->
      <div class="relative z-10 text-center mb-12">
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white">Tarif</h2>
        <p class="mt-2 text-lg text-gray-600 dark:text-gray-300">Sizga mos bo‘lgan tarifni tanlang</p>

        <!-- Custom Switch -->
        <div class="mt-6 flex justify-center">
          <div
              class="relative w-36 h-10 rounded-full cursor-pointer transition-all"
              :class="billing === 'oddiy' ? 'bg-gray-200 dark:bg-gray-700' : 'dark:bg-gray-700'"
              @click="toggleBilling"
          >
            <div class="absolute top-1 left-1 w-[70px] h-8 rounded-full text-sm font-medium flex items-center justify-center text-gray-800 dark:text-white z-10">
              Oddiy
            </div>
            <div class="absolute top-1 right-1 w-[70px] h-8 rounded-full text-sm font-medium flex items-center justify-center text-gray-800 dark:text-white z-10">
              Pro
            </div>
            <div
                class="absolute top-1 left-1 w-[70px] h-8 rounded-full transition-all duration-500 z-0"
                :class="billing === 'oddiy' ? 'translate-x-0 bg-blue-500' : 'translate-x-full bg-amber-500'"
            ></div>
          </div>
        </div>
      </div>

      <!-- Flip Cards -->
      <div class="relative z-10 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div
            v-for="(oddiy, index) in plans.oddiy"
            :key="index"
            class="flip-card"
        >
          <div class="flip-card-inner" :class="{ flipped: billing === 'pro' }">
            <!-- Front - Oddiy -->
            <FwbCard
                class="flip-card-front p-8 min-h-[550px] shadow-xl border-2 border-white/40 dark:border-gray-700 rounded-3xl backdrop-blur-2xl bg-white/70 dark:bg-gray-800/70 hover:scale-105 transition-all duration-300"
            >
              <h3 class="text-2xl font-semibold text-blue-500 mb-3">{{ oddiy.name }}</h3>
              <p class="text-4xl font-bold mb-5">{{ oddiy.price }}</p>
              <ul class="mb-6 space-y-3 text-gray-700 dark:text-gray-300 text-base">
                <li v-for="(feature, i) in oddiy.features" :key="i">✔️ {{ feature }}</li>
              </ul>
              <a href="#contact" class="block">
                <button class="w-full bg-blue-500 text-white px-6 py-2 rounded-xl hover:bg-tiffany/80 transition text-lg">Tanlash</button>
              </a>
            </FwbCard>

            <!-- Back - Pro -->
            <FwbCard
                class="flip-card-back absolute top-0 left-0 w-full h-full p-8 min-h-[550px] shadow-xl border-2 border-white/40 dark:border-gray-700 rounded-3xl backdrop-blur-2xl bg-white/80 dark:bg-gray-800/80 hover:scale-105 transition-all duration-300"
            >
              <h3 class="text-2xl font-semibold text-amber-500 mb-3">{{ plans.pro[index].name }}</h3>
              <p class="text-4xl font-bold mb-5">{{ plans.pro[index].price }}</p>
              <ul class="mb-6 space-y-3 text-gray-700 dark:text-gray-300 text-base">
                <li v-for="(feature, i) in plans.pro[index].features" :key="i">✔️ {{ feature }}</li>
              </ul>
              <a href="#contact" class="block">
                <button class="w-full bg-amber-500 text-white px-6 py-2 rounded-xl hover:bg-tiffany/80 transition text-lg">Tanlash</button>
              </a>
            </FwbCard>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Version -->
    <div v-else>
      <!-- Title -->
      <div class="relative z-10 text-center mb-12">
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white">Tarif</h2>
        <p class="mt-2 text-lg text-gray-600 dark:text-gray-300">Sizga mos bo‘lgan tarifni tanlang</p>
      </div>

      <!-- Pricing Cards -->
      <div class="relative z-10 grid gap-6 max-w-6xl mx-auto">
        <div
            v-for="(oddiy, index) in plans.oddiy"
            :key="index"
            class="pricing-card"
        >
          <FwbCard
              class="p-8 min-h-[500px] shadow-xl border-2 border-white/40 dark:border-gray-700 rounded-3xl backdrop-blur-2xl bg-white/70 dark:bg-gray-800/70 hover:scale-105 transition-all duration-300"
          >
            <!-- Switch -->
            <div class="flex justify-center mb-4">
              <div
                  class="relative w-36 h-10 rounded-full cursor-pointer transition-all"
                  :class="mobileBilling[index] === 'oddiy' ? 'bg-gray-200 dark:bg-gray-700' : 'dark:bg-gray-700'"
                  @click="toggleMobileBilling(index)"
              >
                <div class="absolute top-1 left-1 w-[70px] h-8 rounded-full text-sm font-medium flex items-center justify-center text-gray-800 dark:text-white z-10">
                  Oddiy
                </div>
                <div class="absolute top-1 right-1 w-[70px] h-8 rounded-full text-sm font-medium flex items-center justify-center text-gray-800 dark:text-white z-10">
                  Pro
                </div>
                <div
                    class="absolute top-1 left-1 w-[70px] h-8 rounded-full transition-all duration-500 z-0"
                    :class="mobileBilling[index] === 'oddiy' ? 'translate-x-0 bg-blue-500' : 'translate-x-full bg-amber-500'"
                ></div>
              </div>
            </div>

            <!-- Animated Name and Price -->
            <div class="roller-container">
              <h3 class="text-2xl font-semibold mb-3 roller-text" :class="mobileBilling[index] === 'oddiy' ? 'text-blue-500' : 'text-amber-500'">
                <span class="roller" :key="mobileBilling[index] + '-name-' + index">
                  {{ mobileBilling[index] === 'oddiy' ? oddiy.name : plans.pro[index].name }}
                </span>
              </h3>
              <p class="text-4xl font-bold mb-5 roller-text">
                <span class="roller" :key="mobileBilling[index] + '-price-' + index">
                  {{ mobileBilling[index] === 'oddiy' ? oddiy.price : plans.pro[index].price }}
                </span>
              </p>
            </div>

            <!-- Features -->
            <ul class="mb-6 space-y-3 text-gray-700 dark:text-gray-300 text-base">
              <li v-for="(feature, i) in (mobileBilling[index] === 'oddiy' ? oddiy.features : plans.pro[index].features)" :key="i">
                ✔️ {{ feature }}
              </li>
            </ul>
            <a href="#contact" class="block">
              <button
                  class="w-full text-white px-6 py-2 rounded-xl hover:bg-tiffany/80 transition text-lg"
                  :class="mobileBilling[index] === 'oddiy' ? 'bg-blue-500' : 'bg-amber-500'"
              >
                Tanlash
              </button>
            </a>
          </FwbCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { FwbCard } from 'flowbite-vue'

const isMobile = ref(window.innerWidth <= 768)
const billing = ref('oddiy')
const mobileBilling = ref(['oddiy', 'oddiy', 'oddiy'])

const toggleBilling = () => {
  billing.value = billing.value === 'oddiy' ? 'pro' : 'oddiy'
}

const toggleMobileBilling = (index) => {
  mobileBilling.value[index] = mobileBilling.value[index] === 'oddiy' ? 'pro' : 'oddiy'
  mobileBilling.value = [...mobileBilling.value]
}

const handleResize = () => {
  isMobile.value = window.innerWidth <= 768
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

const plans = {
  oddiy: [
    {
      name: '1 oy',
      price: '$800',
      features: ['3 ta post/hafta', 'Asosiy tahlil'],
    },
    {
      name: '3 oy',
      price: '$1500',
      features: ['Kunlik postlar', 'To‘liq tahlil', '1 video/oy', '1 reels/oy'],
    },
    {
      name: 'Yillik',
      price: '$9000',
      features: [
        'Cheksiz postlar',
        'Advanced analytics',
        '3 video/oy',
        '4 reels/oy',
        'Influencer campaign',
        'Target ads boshqaruvi',
      ],
    },
  ],
  pro: [
    {
      name: '1 oy',
      price: '$1000',
      features: ['12 ta post', 'Asosiy tahlil'],
    },
    {
      name: '3 oy',
      price: '$2990',
      features: ['Kunlik postlar', 'To‘liq tahlil', '25 ta post', '30 ta reels', '3 oylik hisobot'],
    },
    {
      name: 'Yillik',
      price: '$12990',
      features: [
        'Cheksiz postlar',
        'Advanced analytics',
        '3 video/oy',
        '4 reels/oy',
        'Influencer campaign',
        'Target ads boshqaruvi',
        'Dedicated account manager',
        'PR strategiya rejasi',
      ],
    },
  ],
}
</script>

<style scoped>


/* Flip styles for Desktop */
.flip-card {
  perspective: 1000px;
  position: relative;
}
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.8s;
}
.flip-card-inner.flipped {
  transform: rotateY(180deg);
}
.flip-card-front,
.flip-card-back {
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
}
.flip-card-back {
  transform: rotateY(180deg);
  position: absolute;
}

/* Roller Animation for Mobile */
.roller-container {
  overflow: hidden;
  position: relative;
}
.roller-text {
  position: relative;
}
.roller {
  display: inline-block;
  animation: roll 0.5s ease-out forwards;
}
@keyframes roll {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Mobile Optimizations */
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
  .pricing-card {
    max-width: 100%;
  }
  .min-h-[500px] {
  min-height: 500px;
}
}
</style>
```