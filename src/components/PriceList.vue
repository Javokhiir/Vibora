<template>
  <div class="relative bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
    <!-- Blur background -->
    <div class="absolute inset-0 z-0 backdrop-blur-3xl bg-white/30 dark:bg-gray-800/30 rounded-[3rem] scale-110"></div>

    <!-- Title & Switch -->
    <div class="relative z-10 text-center mb-12">
      <h2 class="text-4xl font-bold text-gray-900 dark:text-white">Narxlar Rejalari</h2>
      <p class="mt-2 text-lg text-gray-600 dark:text-gray-300">Sizga mos bo‘lgan tarifni tanlang</p>

      <!-- Custom Switch -->
      <div class="mt-6 flex justify-center">
        <div
            class="relative w-36 h-10 rounded-full cursor-pointer transition-all"
            :class="billing === 'monthly' ? 'bg-gray-200 dark:bg-gray-700' : 'dark:bg-gray-700'"
            @click="toggleBilling"
        >
          <!-- Static Labels -->
          <div class="absolute top-1 left-1 w-[70px] h-8 rounded-full text-sm font-medium flex items-center justify-center text-gray-800 dark:text-white z-10">
            Oyiga
          </div>
          <div class="absolute top-1 right-1 w-[70px] h-8 rounded-full text-sm font-medium flex items-center justify-center text-gray-800 dark:text-white z-10">
            Yiliga
          </div>
          <div
              class="absolute top-1 left-1 w-[70px] h-8 rounded-full  transition-all duration-500 z-0"
              :class="billing === 'monthly' ? 'translate-x-0 bg-blue-500' : 'translate-x-full bg-tiffany'"
          ></div>
        </div>
      </div>
    </div>

    <!-- Flip Cards -->
    <div class="relative z-10 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      <div
          v-for="(monthly, index) in plans.monthly"
          :key="index"
          class="flip-card"
      >
        <div class="flip-card-inner" :class="{ flipped: billing === 'yearly' }">
          <!-- Front - Monthly -->
          <FwbCard
              class="flip-card-front p-8 min-h-[550px] shadow-xl border-2 border-white/40 dark:border-gray-700 rounded-3xl backdrop-blur-2xl bg-white/70 dark:bg-gray-800/70 hover:scale-105 transition-all duration-300"
          >
            <h3 class="text-2xl font-semibold text-blue-500 mb-3">{{ monthly.name }}</h3>
            <p class="text-4xl font-bold mb-5">{{ monthly.price }}</p>
            <ul class="mb-6 space-y-3 text-gray-700 dark:text-gray-300 text-base">
              <li v-for="(feature, i) in monthly.features" :key="i">✔️ {{ feature }}</li>
            </ul>
            <a href="#contact" class="block">
              <button class="w-full bg-blue-500 text-white px-6 py-2 rounded-xl hover:bg-tiffany/80 transition text-lg">Tanlash</button>
            </a>
          </FwbCard>

          <!-- Back - Yearly -->
          <FwbCard
              class="flip-card-back absolute top-0 left-0 w-full h-full p-8 min-h-[550px] shadow-xl border-2 border-white/40 dark:border-gray-700 rounded-3xl backdrop-blur-2xl bg-white/80 dark:bg-gray-800/80 hover:scale-105 transition-all duration-300"
          >
            <h3 class="text-2xl font-semibold text-tiffany mb-3">{{ plans.yearly[index].name }}</h3>
            <p class="text-4xl font-bold mb-5">{{ plans.yearly[index].price }}</p>
            <ul class="mb-6 space-y-3 text-gray-700 dark:text-gray-300 text-base">
              <li v-for="(feature, i) in plans.yearly[index].features" :key="i">✔️ {{ feature }}</li>
            </ul>
            <a href="#contact" class="block">
              <button class="w-full bg-tiffany text-white px-6 py-2 rounded-xl hover:bg-tiffany/80 transition text-lg">Tanlash</button>
            </a>
          </FwbCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { FwbCard } from 'flowbite-vue'

const billing = ref('monthly')

const toggleBilling = () => {
  billing.value = billing.value === 'monthly' ? 'yearly' : 'monthly'
}

const plans = {
  monthly: [
    {
      name: 'Basic',
      price: '$29/oy',
      features: ['3 ta post/hafta', 'Asosiy tahlil'],
    },
    {
      name: 'Pro',
      price: '$59/oy',
      features: ['Kunlik postlar', 'To‘liq tahlil', '1 video/oy', '1 reels/oy'],
    },
    {
      name: 'Premium',
      price: '$99/oy',
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
  yearly: [
    {
      name: 'Basic',
      price: '$299/yil',
      features: ['3 ta post/hafta', 'Asosiy tahlil'],
    },
    {
      name: 'Pro',
      price: '$599/yil',
      features: ['Kunlik postlar', 'To‘liq tahlil', '1 video/oy', '1 reels/oy', 'Yillik hisobot'],
    },
    {
      name: 'Premium',
      price: '$999/yil',
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
.text-tiffany {
  color: #40E0D0;
}
.bg-tiffany {
  background-color: #40E0D0;
}

/* Flip styles */
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
</style>
