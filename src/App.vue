<template>
  <div class="font-sans text-gray-800 dark:text-white bg-white dark:bg-gray-900 transition-all">
    <Navbar />
    <About />
    <OurTeam />
    <Projects />
    <PriceList/>
    <Contact />
    <Footer />

  </div>
</template>

<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import About from "./components/About.vue";
import Projects from "./components/Projects.vue";
import OurTeam from "./components/OurTeam.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
import PriceList from "./components/PriceList.vue";

</script>