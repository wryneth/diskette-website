<script setup lang="ts">
defineProps({
  title: {
    type: String,
  },
  image: {
    type: String,
  },
  label: {
    type: String,
  },
  description: {
    type: String,
  },

})
</script>

<template>
  <div>
    <div class="grid xl:grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 md gap-5">
      <div>
        <img class="rounded-t-2xl w-full" :src="image"
             alt="concept image based on Alhambra tile patterns">
        <div class="p-3 border rounded-b-2xl  w-full">
          <h1 class="font-ubuntu text-md text-center">{{ label }}</h1>
        </div>
      </div>

      <div class="p-7 border border-dashed border-sky-900 rounded-2xl w-full">
        <h1 class="mb-3 font-calistoga xl:text-4xl lg:text-3xl md:text-5xl sm:text-3xl">{{ title }}</h1>

        <div class="font-ubuntu xl:text-xl lg:text-base md:text-lg sm:text-2xl">{{ description }}</div>
      </div>

    </div>
  </div>
</template>

<style scoped>

</style>