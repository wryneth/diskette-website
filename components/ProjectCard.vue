<template>
    <Card id="projects" class="flex flex-col m-5 items-center  lg:flex-row">
      <div class="w-full lg:w-1/2 ms-5 rounded-sm">
        <Card class="mr-5 p-2">
          <img :src="`images/projects/${Image}.webp`" />
        </Card>
      </div>

      <div class="flex w-full flex-col space-y-4 px-12 lg:mt-0">
        <h2 class="font-calistoga font-bold text-6xl font-bold text-center">{{ ProjectTitle }}</h2>

        <p class="font-ubuntu text-3xl">{{ ProjectDescription }}</p>

        <div class="flex items-center gap-5 mb-10">
          <a :href="`${videoLink}`">
            <Button variant="outline">
            <Film class="w-5 h-5 mr-2" /> Watch
          </Button>
          </a>

          <a :href="`${downloadLink}`">
            <Button variant="outline">
              <ArrowDownToLine class="w-5 h-5 mr-2" /> Download
            </Button>
          </a>

        </div>
      </div>
    </Card>
</template>

<script setup>
import {Button} from '@/components/ui/button'
import {Card} from '@/components/ui/card'
import { ArrowDownToLine, Film } from 'lucide-vue-next'

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

<style scoped>
img {
  border-radius: 10px;
  border: 0px solid #aaa;
  overflow: hidden;
  object-fit: cover;
  width: 100%;
  height: 350px;
  margin: auto;
}
</style>