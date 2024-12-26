<script setup lang="ts">

</script>

<template>
  <UCard class="card-contain" id="projects">
    <template #header>
      <h1 class="title">Diskette://Projects</h1>
    </template>

    <div class="card-container">
    <Card style="width: 25rem; overflow: hidden">
      <template #header>
        <img alt="user header" src="/images/diskette-case.png"/>
      </template>
      <template #title>Diskette Case</template>
      <template #subtitle>A fully 3d printable NAS chasis</template>
      <template #content>
        <p class="m-0">
          Stylish design featuring a Voroni lattice for fully passive cooling, fits on most FFF printers, simple to
          print.
        </p>
      </template>
      <template #footer>
        <div class="flex gap-4 mt-1">
          <Button label="Watch Video" class="w-full"/>
          <Button label="Download" severity="secondary" outlined class="w-full"/>
        </div>
      </template>
    </Card>
    <Card style="width: 25rem; overflow: hidden">
      <template #header>
        <img alt="user header" src="/images/ipod.png"/>
      </template>
      <template #title>iPod Shuffle Art</template>
      <template #subtitle>E-waste --> art!</template>
      <template #content>
        <p class="m-0">
          Easily repurpose a broken iPod Shuffle 4th gen to make this cool framed teardown. Simple to print and
          customizable!
        </p>
      </template>
      <template #footer>
        <div class="flex gap-4 mt-1">
          <Button label="Watch Video" class="w-full"/>
          <Button label="Download" severity="secondary" outlined class="w-full"/>
        </div>
      </template>
    </Card>
    <Card style="width: 25rem; overflow: hidden">
      <template #header>
        <img alt="user header" src="/images/soon.png"/>
      </template>
      <template #title>More Coming Soon</template>
      <template #subtitle>Don't worry, I'm still on my bullshit</template>
      <template #content>
        <p class="m-0">
          I've got more interesting, and stupid projects cooking, no promises on quality, but stay tuned anyway
        </p>
      </template>
      <template #footer>
        <div class="flex gap-5 mt-1">
          <Button as="a" href="https://YouTube.com/@diskettekitchen?sub_confirmation=1" label="Subscribe"
                  class="w-full"/>
        </div>
      </template>
    </Card>
    </div>

    <template #footer>
      <Placeholder class="h-8"/>
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
  margin: 10px;
  font-family: 'Ubuntu', sans-serif;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.card-container {
  text-align: center;
  max-width: fit-content;
  margin-left: auto;
  margin-right: auto;
}
</style>