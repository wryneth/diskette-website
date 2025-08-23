<script setup lang="ts">
</script>

<template>
  <Card class="m-5 p-5" id="glowland">
    <Card>
      <h1 class="text-center lg:text-8xl text-6xl font-calistoga">Lanterns</h1>
    </Card>
    <div class="w-full lg:p-20 md:p-30 sm:p-20">
      <div class="object-center mt-20">
        <picture>
          <source srcset="/images/GlowWide.svg" media="(max-width: 200px)">
          <source srcset="/images/GlowStack.svg" media="(max-width: 1200px)">
          <img src="/images/GlowWide.svg" alt="Diskette glow" style="width:auto;">
        </picture>
      </div>
    </div>
    <a href="/glow">
      <ActionButton title="Learn more" class="flex mb-25 me-auto ms-auto absolute "/>
    </a>
  </Card>
</template>
<style scoped>

</style>