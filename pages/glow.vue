<script setup lang="ts">
import Navbar from '~/components/glow/Navbar.vue'
import About from '~/components/glow/About.vue'
import Options from "~/components/glow/Options.vue";
import DIY from '~/components/glow/DIY.vue'
import Lighting from "~/components/glow/Lighting.vue";
import Mail from "~/components/glow/Mail.vue";
</script>

<template>
  <Navbar/>
  <div class="w-screen lg:p-50 md:p-30 sm:p-20">
    <div class="object-center mt-20">
      <picture>
        <source srcset="/images/GlowWide.svg" media="(max-width: 200px)">
        <source srcset="/images/GlowStack.svg" media="(max-width: 1200px)">
        <img src="/images/GlowWide.svg" alt="Diskette glow" style="width:auto;">
      </picture>

      <h1 class="text-center lg:text-6xl md:text-4xl sm:text-2xl font-ubuntu mt-10">The perfect companion to any
        space</h1>
    </div>
  </div>
  <About/>
  <Separator/>
  <Lighting/>
  <Separator/>
  <Options/>
  <Separator/>
  <DIY/>
  <Separator/>
  <Mail/>
  <Separator/>

  <div class="p-5">
    <Footer/>

  </div>

</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>