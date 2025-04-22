<template>
  <section id="team" class="relative min-h-screen py-16 overflow-hidden w-full">
    <div class="max-w-[1500px] max-h-auto mx-auto px-4 bg-gray-200 dark:bg-gray-800/60">
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white">
        O'zuvizani bolla:
      </h2>
      <swiper
          :modules="[Autoplay]"
          :slides-per-view="3"
          :centeredSlides="true"
          :loop="true"
          :spaceBetween="15"
          @swiper="onSwiper"
          :autoplay="{ delay: 10000, disableOnInteraction: true }"
          :breakpoints="{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 3 }
        }"
          class="team-swiper"
      >
        <swiper-slide v-for="(member, i) in team" :key="i">
          <div class="flip-card w-full max-w-[280px] md:max-w-[320px] h-[420px] md:h-[480px]">
            <div
                class="flip-card-inner"
                :class="{ flipped: flippedCard === i }"
                @click="flipCard(i)"
            >
              <!-- Front Side -->
              <div class="flip-card-front w-full h-full rounded-2xl shadow-2xl border border-white/20 backdrop-blur-md bg-white/30 dark:bg-gray-800/30 flex flex-col items-center justify-center px-4 py-6 text-center transition-all duration-500">
                <img :src="member.photo" alt="photo" class="w-36 h-36 md:w-52 md:h-52 rounded-[20%] object-cover border border-white/40 mb-4" />
                <h3 class="bg-white/20 dark:bg-gray-800/20 text-lg md:text-xl font-bold dark:text-white">{{ member.name }}</h3>
                <p class="bg-white/20 dark:bg-gray-800/20 text-sm md:text-base dark:text-white">{{ member.role }}</p>
                <p class="bg-white/20 dark:bg-gray-800/20 text-xs md:text-sm italic mt-3 max-w-[260px] dark:text-white">“{{ member.quote }}”</p>
                <span class="flip-hint mt-8 animate-bounce">Batafsil...</span>
              </div>

              <!-- Back Side -->
              <div class="flip-card-back w-full h-full rounded-2xl shadow-2xl border border-white/20 backdrop-blur-md bg-white/30 dark:bg-gray-800/30 flex flex-col items-center justify-between px-4 py-6 text-center transition-all duration-500">
                <div>
                  <h3 class="text-lg md:text-xl font-bold dark:bg-gray-800/20">Qoʻshimcha</h3>
                  <p class="mt-2 text-xs md:text-sm dark:text-white">{{ member.details }}</p>
                </div>

                <div class="flex gap-4 justify-center mt-2">
                  <a v-for="(icon, idx) in member.socials" :key="idx" :href="icon.link" target="_blank" :class="icon.class">
                    <i :class="icon.icon" class="text-2xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>


<script setup>
import { ref, watch } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'

const swiperRef = ref(null)
const flippedCard = ref(null)

const flipCard = (index) => {
  flippedCard.value = flippedCard.value === index ? null : index
}

const onSwiper = (swiperInstance) => {
  swiperRef.value = swiperInstance
}

watch(flippedCard, (newVal) => {
  if (swiperRef.value) {
    newVal !== null ? swiperRef.value.autoplay.stop() : swiperRef.value.autoplay.start()
  }
})

const team = [
  {
    name: 'Javohir Qobilov',
    role: 'PR mutaxassis',
    quote: "Xoʻoʻoʻoʻoʻsh??? Nima muammo okya!?",
    photo: 'javohir-pr.jpg',
    details: 'Marketing bo\'yicha aniq strategik va analizlar bilan ishlash. PR bo\'yicha antikrizis jarayonlarini boshqarish va mijozlar bilan to\'g\'ri muloqot qilish bo\'yicha soft va hard ko\'nikmalarim mavjud. Marketing bo\'yicha 5 yilga yaqin tajribam, PR bo\'yicha 2yil tajribaga egaman. O\'z qadriyatlarim va standartlarimdan chekaga chiqmagan xolda ishlayman.',
    socials: [
      { icon: 'fab fa-instagram', link: 'https://www.instagram.com/javohir_yaxshilikovich?igsh=MXRqbnY5YjJmd2N5Mw==', class: 'hover:text-pink-500 transition' },
      { icon: 'fab fa-telegram', link: 'https://t.me/bazarolog', class: 'hover:text-blue-400 transition' },
    ],
  },
  {
    name: 'Xursand Amir Temurov',
    role: 'Ambassador',
    quote: "Andig'oid bo'lmiman j**😭",
    photo: 'ambassador.jpg',
    details: 'Brend strategiyalari, ijtimoiy loyiha yuritish, tadbirlar.',
    socials: [
      { icon: 'fab fa-instagram', link: 'https://www.instagram.com/xursanddev?igsh=MW93Z29kaGgzdTZ6MA==', class: 'hover:text-pink-500 transition' },
      { icon: 'fab fa-telegram', link: 'https://t.me/xursand_toga', class: 'hover:text-blue-400 transition' },
    ],
  },
  {
    name: 'Javohir Shaxriyorov',
    role: 'Dasturchi',
    quote: "Ha otam👀 Bormi og'riq?!",
    photo: 'javohir2.jpg',
    details: 'Kreativlikni birinchilikka qo‘ygan Frontend dasturchiman. JavaScript,Tailwind CSS va Vue Js frameworklari asosida funksional, zamonaviy va jozibali interfeyslar ishlab chiqaman. Responsiv dizayn, animatsiyalar, i18n va estetikani uyg‘unlashtirib, har bir loyihada o‘ziga xoslik va sifatni birinchi ko\'rsatib beraman',
    socials: [
      { icon: 'fab fa-instagram', link: 'https://www.instagram.com/javohir_shaxriyorov?igsh=ZG9sd2xweGV5bXg1', class: 'hover:text-pink-500 transition' },
      { icon: 'fab fa-telegram', link: 'https://t.me/shaxriyorov_j', class: 'hover:text-blue-400 transition' },
    ],
  },
  {
    name: 'Javohir Jumanov',
    role: 'Grafik Dizayner',
    quote: "Potoshop boʻyicha 22 yillik tajribaga ega 20 yoshli dizaynerman🥸",
    photo: 'grafik-dizayner.jpg',
    details: 'Adobe Photoshop, Illustrator. Minimalizm va estetika ustuvor.',
    socials: [
      { icon: 'fab fa-instagram', link: 'https://www.instagram.com/javokhiriy?igsh=MXEwZTFub2NyaHdhMg==', class: 'hover:text-pink-500 transition' },
      { icon: 'fab fa-telegram', link: 'https://t.me/javokhirjumanov', class: 'hover:text-blue-400 transition' },
    ],
  },
  {
    name: 'Soyibjon Baxtiyorov',
    role: 'Senarist',
    quote: 'Ssenariylarim Oʻzbekfilmdaqamas lekin! Ularni ham tanimayman🎯',
    photo: 'senarist.jpg',
    details: 'Kreativ ssenariy, dialoglar, qisqa metrajli videolar uchun g‘oyalar beraman.',
    socials: [
      { icon: 'fab fa-instagram', link: 'https://www.instagram.com/soyibjonbakhtiyorov?igsh=aDkzZDFmOW1tcHEx', class: 'hover:text-pink-500 transition' },
      { icon: 'fab fa-telegram', link: 'https://t.me/baxtiyorovsoyibjon', class: 'hover:text-blue-400 transition' },
    ],
  },
  {
    name: "Shohruh O'razqulov",
    role: 'Mobile Creator',
    quote: 'San’at — bu qat’iyatning eng chiroyli ko‘rinishi',
    photo: 'mobile1.jpg',
    details: 'CapCut, VN, InShot’da kreativ videolar yarataman.',
    socials: [
      { icon: 'fab fa-instagram', link: 'https://www.instagram.com/uzuvzan_bola?igsh=MWgzYmtlZ3BweHltaQ==', class: 'hover:text-pink-500 transition' },
      { icon: 'fab fa-telegram', link: 'https://t.me/uzuvzan_bola', class: 'hover:text-blue-400 transition' },
    ],
  },
]
</script>


<style scoped>
.team-swiper {
  padding: 40px 0;
}
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
.flip-card {
  perspective: 1000px;
}
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  cursor: pointer;
}
.flip-card-inner.flipped {
  transform: rotateY(180deg);
}
.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 1rem;
}
.flip-card-back {
  transform: rotateY(180deg);
}
.animate-bounce {
  animation: bounce 2s infinite;
}
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
</style>

