<template>
    <Card id="projects" class="flex flex-col m-5 items-center  lg:flex-row">
      <div class="w-full lg:w-1/2 ms-5 rounded-sm">
        <Card class="mr-5 p-2">
          <div class="canvas">
            <TresCanvas>
              <TresPerspectiveCamera :position="[1, 2, 3]"/>
              <OrbitControls/>
              <Suspense>
                <GLTFModel :path="`${modPath}`"/>
              </Suspense>
              <TresDirectionalLight :intensity="2"/>
              <TresAmbientLight/>
            </TresCanvas>
          </div>
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
import {GLTFModel, OrbitControls} from "@tresjs/cientos";
import {TresCanvas} from "@tresjs/core";


defineProps({
  ProjectTitle: {
    type: String,
  },
  ProjectDescription: {
    type: String,
  },
  modPath: {
    type: String,
  },
  downloadLink: {
    type: String,
    default: "https://printables.com/",
  },
  videoLink: {
    type: String,
    default: "https://youtube.com/",
  }
})
</script>

<style scoped>
.canvas {
  border-radius: 10px;
  border: 0px solid #aaa;
  overflow: hidden;
  object-fit: cover;
  width: 100%;
  height: 400px;
  margin: auto;
}
</style>