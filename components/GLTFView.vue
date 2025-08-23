<template>
  <div class=" h-75 w-full">
    <TresCanvas>
      <TresPerspectiveCamera :position="[1, 2, 3]"/>
      <OrbitControls/>
      <Suspense>
        <GLTFModel :path="`${modelPath}`"/>
      </Suspense>
      <TresDirectionalLight :intensity="2"/>
      <TresAmbientLight/>
    </TresCanvas>
  </div>
</template>

<script setup>
import {GLTFModel, OrbitControls} from "@tresjs/cientos";
import {TresCanvas} from "@tresjs/core";

defineProps({
  modelPath: {
    type: String,
  }
})
</script>