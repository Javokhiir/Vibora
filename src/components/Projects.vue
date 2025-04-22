<template>
  <section id="projects" class="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 to-white dark:from-[#0f0f0f] dark:to-[#1a1a1a] px-4">
    <div class="text-center max-w-2xl relative">
      <!-- CTA dumaloqcha -->
      <a
          href="#contact"
          class="absolute -top-4 -right-4 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-blue-glow animate-bounce z-10"
          title="Biz bilan bogʻlaning"
      >
        ✉️
      </a>

      <!-- Matnli blok -->
      <div
          class="relative inline-block p-6 rounded-2xl bg-white/80 dark:bg-white/5 backdrop-blur-md border border-gray-300 dark:border-gray-700 shadow-xl hover:scale-105 transition-transform duration-500 ease-in-out"
      >
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white tracking-tight">
          Hmmmmm.......!
        </h2>
        <p class="mt-4 text-gray-600 dark:text-gray-300 text-lg sm:text-xl">
          Bu yerda <span class="text-blue-500 font-semibold">sizni biznesingiz</span> boʻlishi mumkin edi.
        </p>
        <div class="mt-6 animate-pulse text-sm text-gray-500 dark:text-gray-400">
          Hali ham kechmas...
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Script qismida hozircha hech narsa yo‘q
</script>

<style scoped>
.hover\:shadow-blue-glow:hover {
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.6), 0 0 40px rgba(59, 130, 246, 0.4);
}
</style>
