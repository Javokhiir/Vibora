<template>
  <section class="relative w-full h-screen flex items-center justify-center bg-gradient-to-r from-[#1abc9c] to-[#16a085] text-white">
    <div class="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-in-out opacity-50" style="background-image: url('/your-hero-background.jpg');"></div>

    <div class="relative z-10 text-center px-4 md:px-12">
      <h1 class="text-5xl font-bold leading-tight mb-4 animate__animated animate__fadeIn animate__delay-1s">
        Innovatsion Marketing Yechimlari
      </h1>
      <p class="text-lg mb-6 animate__animated animate__fadeIn animate__delay-2s">
        Bizning kreativ yondoshuvimiz bilan brendingizni yangi bosqichga olib chiqing.
      </p>

      <!-- CTA Button -->
      <a href="#contact" class="inline-block bg-[#1abc9c] text-white py-3 px-8 text-xl font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-[#16a085] animate__animated animate__fadeIn animate__delay-3s">
        Biz bilan bog‘laning
      </a>
    </div>

    <!-- Parallax effect for text -->
    <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate__animated animate__fadeIn animate__delay-4s">
      <p class="text-lg opacity-75">
        Bizning maqsadimiz – sizning biznesingizni yanada yuqori cho‘qqilarga olib chiqish.
      </p>
    </div>
  </section>

  <!-- Dark mode toggle button -->
</template>

<script setup>
import { ref, onMounted } from 'vue'
</script>

<style scoped>

.font-poppins {
  font-family: 'Poppins', sans-serif;
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
</style>
