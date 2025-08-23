<script setup lang="ts">
import {Card} from '@/components/ui/card'
import AboutCard from "~/components/glow/AboutCard.vue";
</script>

<template>
  <div id="about" class="p-10">
    <Card class="mb-5">
      <h1 class="text-center font-calistoga text-6xl">Making Glow</h1>
    </Card>

    <div class="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-5">

      <AboutCard title="Inspiration"
                 image="/images/glow/alhambra-tile.webp"
                 label="Inspiration for early Alhambra design"
                 description="Every pattern (with the exception of Alhambra) is inspired by something in the natural world. In turn,
              case
              shapes are modeled after real world objects such as Gothic's vintage radio or Box's Japanese Andon
              inspired
              shape."/>

      <AboutCard title="Design Process"
                 image="/images/glow/alhambra-early.webp"
                 label="An early drawing of Alhambra"
                 description="After concepts were thought of, early designs were made in the app
              iOrnament,
      which makes drawing beautiful tessellating patterns easier. After having these initial designs, we
      refined, simplified, and vectorized patterns to make them cuttable."/>


      <AboutCard title="Making it real"
                 image="/images/glow/cut.webp"
                 label="Cutting a Glow"
                 description="Each lantern is laser cut out of 3.5mm plywood, the perfect balance of sturdy with out clunky. After
          assembling the structure, we then add in a diffuser and the lights which are controlled by a D1 Mini
          microcontroller."/>

    </div>
  </div>

</template>