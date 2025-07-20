<script setup lang="ts">

</script>

<template>
  <Card class="m-5 p-5" id="lanterns">
    <Card>
      <h1 class="text-center lg:text-8xl text-6xl font-calistoga">Lanterns</h1>
    </Card>
    <img src="/images/lanternWide.jpg" class="rounded-lg md:h-120 object-cover h-150" alt="All diskette lanterns in a row">
    <a href="/lanterns" >
      <ActionButton title="Learn more" class="watch-btn"/>
    </a>
  </Card>

</template>

<style scoped>
.watch-btn {
  position: absolute;
  background-color: rebeccapurple;
  left: 50%;
  margin-top: 45px;
  transform: translate(-50%, -300%);

}
</style>