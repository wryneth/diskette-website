<script setup lang="ts">

</script>

<template>
  <UCard class="vid" id="videos">
    <template #header>
      <h1 class="title">Recent Videos</h1>
    </template>
<div class="card-container">

    <Card style="width: 25rem; overflow: hidden">
      <template #header>
        <img src="/images/thumbnails/d-case.png" alt="Diskette case thumbnail" />
      </template>
      <template #subtitle>I Made a FULLY 3d Printed NAS and you can too</template>
      <template #content>
        <p class="m-0">
        </p>
      </template>
      <template #footer>
        <div class="flex gap-4 mt-1">
          <Button label="Watch" severity="secondary" outlined class="w-full" as="a" href="https://youtu.be/kKrAZ_lCJe4"/>
        </div>
      </template>
    </Card>
    <Card style="width: 25rem; overflow: hidden">
      <template #header>
        <img src="/images/thumbnails/chromebook.png" alt="Chromebook benchmarks thumbnail" />
      </template>
      <template #subtitle>Chromebooks Are Bad for EVERYONE</template>
      <template #content>
        <p class="m-0">
        </p>
      </template>
      <template #footer>
        <div class="flex gap-4 mt-1">
          <Button label="Watch" severity="secondary" outlined class="w-full" as="a" href="https://youtu.be/Jj9wPObPrmA"/>
        </div>
      </template>
    </Card>
    <Card style="width: 25rem; overflow: hidden">
      <template #header>
        <img src="/images/thumbnails/shuffle.png" alt="Framed iPod Shuffle thumbnail" />
      </template>
      <template #subtitle>Transforming a dead iPod into something lovely</template>
      <template #content>
        <p class="m-0">
        </p>
      </template>
      <template #footer>
        <div class="flex gap-4 mt-1">
          <Button label="Watch" severity="secondary" outlined class="w-full" as="a" href="https://youtu.be/pcYXZlmIuOg"/>
        </div>
      </template>
    </Card>
    <Card style="width: 25rem; overflow: hidden">
      <template #header>
        <img src="/images/thumbnails/pridebook-pro.png" alt="Custom retro Apple logo macbook thumbnail" />
      </template>
      <template #subtitle>Making a Custom Glowing Apple Logo MacBook</template>
      <template #content>
        <p class="m-0">
        </p>
      </template>
      <template #footer>
        <div class="flex gap-4 mt-1">
          <Button label="Watch" severity="secondary" outlined class="w-full" as="a" href="https://youtu.be/MmODnbPsxqY"/>
        </div>
      </template>
    </Card>
</div>
    <template #footer>
      <Placeholder class="h-8" />
    </template>
  </UCard>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Imbue:opsz,wght@10..100,441&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&family=Young+Serif&display=swap');
.title {
  text-align: center;
  font-family: 'Imbue', serif;
  font-size: 40px;
}
.p-card {
  display: inline-block;
  margin: 15px;
  font-family: 'Ubuntu', sans-serif;
}
.vid {
  z-index: 5;
}
.card-container {
  text-align: center;
  max-width: fit-content;
  margin-left: auto;
  margin-right: auto;;
}
</style>