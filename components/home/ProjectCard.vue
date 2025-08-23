<script setup lang="ts">
import {Button} from '@/components/ui/button'
import {Card} from '@/components/ui/card'
import {ArrowDownToLine, Film} from 'lucide-vue-next'

defineProps({
  ProjectTitle: {
    type: String,
  },
  ProjectDescription: {
    type: String,
  },
  Image: {
    type: String,
    default: 'missing',
  },
  downloadLink: {
    type: String,
    default: "https://printables.com/",
  },
  videoLink: {
    type: String,
    default: "https://youtube.com/",
  },

})
</script>

<template>
  <Card class="flex flex-col ms-5 me-5 items-center  lg:flex-row p-5">
    <div class="w-full lg:w-1/2">
      <img class="rounded-lg" :src="`images/projects/${Image}.webp`"/>
    </div>

    <div class="flex w-full flex-col space-y-4 px-12 lg:mt-0">
      <h2 class="font-calistoga lg:text-6xl md:text-5xl text-4xl font-bold text-center  ">{{ ProjectTitle }}</h2>

      <p class="font-ubuntu lg:text-3xl text-xl">{{ ProjectDescription }}</p>

      <div class="flex items-center gap-5 mb-10">
        <a :href="`${videoLink}`">
          <Button variant="outline">
            <Film class="w-5 h-5 mr-2"/>
            Watch
          </Button>
        </a>

        <a :href="`${downloadLink}`">
          <Button variant="outline">
            <ArrowDownToLine class="w-5 h-5 mr-2"/>
            Download
          </Button>
        </a>

      </div>
    </div>
  </Card>
</template>