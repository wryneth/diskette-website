<script setup lang="ts">
import {Card} from "~/components/ui/card";
</script>

<template>
  <div id="light" class="p-10">
    <Card class="mb-5">
      <h1 class="text-center font-calistoga text-6xl">Lighting Options</h1>

    </Card>

    <div class="font-ubuntu text-2xl text-center mb-5 p-5">
      All glow lanterns come with five built in color programs as well as off
    </div>

    <div class="grid xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
      <Card>
        <img src="/images/glow/programs/color.webp" class="ms-5 me-5 rounded-md"
             alt="box glow showing color flow program">
        <h1 class="text-center text-emerald-500 font-calistoga text-3xl">Color flow</h1>
      </Card>

      <Card>
        <img src="/images/glow/programs/fire.webp" class="ms-5 me-5 rounded-md"
             alt="gbox glow showing candle light program">
        <h1 class="text-orange-400 text-center font-calistoga text-3xl">Fire</h1>
      </Card>

      <Card>
        <img src="/images/glow/programs/water.webp" class="ms-5 me-5 rounded-md" alt="box glow showing water program">
        <h1 class="text-blue-500 text-center font-calistoga text-3xl">Water</h1>
      </Card>

      <Card>
        <img src="/images/glow/programs/twink.webp" class="ms-5 me-5 rounded-md" alt="box glow showing twinkle program">
        <h1 class="text-yellow-400 text-center font-calistoga text-3xl">Twinkle</h1>
      </Card>

      <Card>
        <img src="/images/glow/programs/white.webp" class="ms-5 me-5 rounded-md"
             alt="box glow showing color flow program">
        <h1 class="text-white text-shadow-2xs text-shadow-black dark: text-center font-calistoga text-3xl">White</h1>
      </Card>

      <Card>
        <img src="/images/glow/programs/off.webp" class="ms-5 me-5 rounded-md" alt="box glow lantern turned off">
        <h1 class="text-stone-700 text-center font-calistoga text-3xl">Off</h1>
      </Card>

    </div>
  </div>
</template>