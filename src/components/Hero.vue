<template>
  <section class="relative w-full min-h-screen bg-[#0f172a] text-white overflow-hidden px-6 md:px-20 py-20">
    <!-- Background Grid -->
    <div class="absolute inset-0 bg-[url('/grid-bg.svg')] opacity-10 z-0"></div>

    <!-- Main content -->
    <div class="relative z-10 flex flex-col items-center text-center space-y-6">
      <!-- Logo or Title -->
      <h1 class="text-4xl md:text-6xl font-black">
        <span class="bg-[#7fffd4] text-black px-4 py-1 rounded-xl">Vibora</span>
        <span class="ml-2 text-white">PR</span>
      </h1>

      <!-- Sub headline -->
      <h2 class="text-2xl md:text-3xl font-light">
        O‘zbekistondagi Kreativ Digital Agentlik
      </h2>

      <!-- Paragraph -->
      <p class="text-gray-300 max-w-2xl text-base md:text-lg">
        Vibora PR — kreativ g‘oyalarni hayotga tatbiq qiluvchi innovatsion dizayn studiyasi. Branding, web dizayn va grafika dizayn yechimlarimiz bilan mijozlarimizga samarali natijalar olib kelamiz.
      </p>

      <!-- CTA button -->
      <button class="bg-[#7fffd4] text-black px-6 py-3 rounded-full hover:bg-[#5eead4] font-semibold transition-all">
        Bog‘lanish
      </button>
    </div>
  </section>
</template>
<script setup lang="ts">
import HeroElasticCards from "./HeroElasticCards.vue";
</script>