<template>
  <section id="about" class="py-24 transition-colors duration-500 bg-gradient-to-br from-white via-blue-50 to-tiffany-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-4xl font-bold text-tiffany-500 dark:text-tiffany-400 mb-6">Biz Haqimizda</h2>
      <p class="text-lg text-gray-700 dark:text-gray-200 mb-12 max-w-3xl mx-auto">
        Vibora PR marketing va brendni rivojlantirishda innovatsion va yuqori samarali yondashuvlarni taqdim etadi. Bizning
        jamoamiz har bir mijoz uchun individual strategiyalarni ishlab chiqadi.
      </p>

      <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        <Card title="Yaratilish va Innovatsiya" icon="⚡" description="Yangi g'oyalar va kreativ yondashuvlar orqali mijozlarimizga maxsus yechimlar taqdim etamiz." />
        <Card title="Strategiya va Rejalashtirish" icon="🧠" description="Bizning maqsadimiz har bir kompaniya uchun o'ziga xos va muvaffaqiyatga erishadigan strategiyalar yaratishdir." />
        <Card title="Brendni Rivojlantirish" icon="🚀" description="Brendni yaratish va uni bozorda muvaffaqiyatli pozitsiyalash uchun samarali va ijodiy usullarni qo'llaymiz." />
      </div>
    </div>
  </section>
</template>

<script setup>
import Card from './Card.vue'
</script>
