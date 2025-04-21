<template>
  <section id="team" class="relative min-h-screen py-16 overflow-hidden w-full">
    <div class="max-w-[1400px] mx-auto px-4 bg-gray-200 dark:bg-gray-800/60">
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
              <div
                  class="flip-card-front  w-full h-full rounded-2xl shadow-2xl border border-white/20 backdrop-blur-md bg-white/30 dark:bg-gray-800/30 flex flex-col items-center justify-center px-4 py-6 text-center transition-all duration-500"
              >
                <img
                    :src="member.photo"
                    alt="photo"
                    class="w-36 h-36 sm:w-38 sm:h-38 md:w-52 md:h-52 rounded-[20%] object-cover border border-white/40 mb-4"
                />
                <h3 class="bg-white/20 dark:bg-gray-800/20 text-lg md:text-xl font-bold dark:text-white">
                  {{ member.name }}
                </h3>
                <p class="bg-white/20 dark:bg-gray-800/20 text-sm md:text-base dark:text-white">
                  {{ member.role }}
                </p>
                <p
                    class="bg-white/20 dark:bg-gray-800/20 text-xs md:text-sm italic mt-3 max-w-[240px] sm:max-w-[260px] dark:text-white"
                >
                  “{{ member.quote }}”
                </p>
                <div
                    class="relative top-full left-1/2 transform -translate-x-1/2 mt-2 text-xs text-black dark:text-white px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-lg"
                >
                 Bosing
                </div>
              </div>

              <!-- Back Side -->
              <div
                  class="flip-card-back w-full h-full rounded-2xl shadow-2xl border border-white/20 backdrop-blur-md  bg-white/30 dark:bg-gray-800/30 flex flex-col items-center justify-between px-4 py-6 text-center transition-all duration-500"
              >
                <div>
                  <h3 class="text-lg md:text-xl font-bold dark:bg-gray-800/20">Qoʻshimcha</h3>
                  <p class="text-xs md:text-sm mt-3  dark:bg-gray-800/20">
                    Ijtimoiy tarmoqlar, kontaktlar yoki boshqa foydali info bu yerga tushadi.
                  </p>
                  <p class="mt-2">
                    Marketing bo'yicha aniq strategik va analizlar bilan ishlash. PR bo'yicha antikrizis jarayonlarini boshqarish va mijozlar bilan to'g'ri muloqot qilish bo'yicha soft va hard ko'nikmalarim mavjud. Marketing bo'yicha 5 yilga yaqin tajribam, PR bo'yicha 2yil tajribaga egaman. O'z qadriyatlarim va standartlarimdan chekaga chiqmagan xolda ishlayman.
                  </p>
                </div>

                <!-- Footer: Icons -->
                <div class="flex gap-4 justify-center mt-2">
                  <a href="#" target="_blank" class="dark:bg-gray-800/20 hover:text-pink-500 transition">
                    <i class="fab fa-instagram text-2xl"></i>
                  </a>
                  <a href="#" target="_blank" class=" dark:bg-gray-800/20 hover:text-blue-400 transition">
                    <i class="fab fa-telegram text-2xl"></i>
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
    if (newVal !== null) {
      swiperRef.value.autoplay.stop()
    } else {
      swiperRef.value.autoplay.start()
    }
  }
})

const team = [
  {
    name: 'Javohir Qobilov',
    role: 'PR mutaxassis',
    quote: "Xoʻoʻoʻoʻoʻsh??? Nima muammo okya!?",
    photo: 'javohir-pr.jpg',
  },
  {
    name: 'Xursand Amir Temurov',
    role: 'Ambassador',
    quote: "Andig'oid bo'lmiman j**😭",
    photo: 'ambassador.jpg',
  },
  {
    name: 'Javohir Shaxriyorov',
    role: 'Dasturchi',
    quote: "Ha otam👀 Bormi og'riq?!",
    photo: 'javohir2.jpg',
  },
  {
    name: 'Javohir Jumanov',
    role: 'Grafik Dizayner',
    quote: "Potoshop boʻyicha 22 yillik tajribaga ega 20 yoshli dizaynerman🥸",
    photo: 'grafik-dizayner.jpg',
  },
  {
    name: 'Soyibjon Baxtiyorov',
    role: 'Senarist',
    quote: 'Ssenariylarim Oʻzbekfilmdaqamas lekin! Ularni ham tanimayman🎯',
    photo: 'senarist.jpg',
  },
  {
    name: "Shohruh O'razqulov",
    role: 'Mobile Creator',
    quote: 'San’at — bu qat’iyatning eng chiroyli ko‘rinishi',
    photo: 'mobile1.jpg',
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
</style>
