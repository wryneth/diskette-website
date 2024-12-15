<script setup lang="ts">

</script>

<template>
  <UCard id="links">
    <template #header>
      <h1 class="title">Find Me</h1>
    </template>
    <UButton class="link-btn" href="https://youtube.com" target="_blank" icon="grommet-icons:youtube" color="primary" variant="soft" />
    <Button class="link-btn" severity="secondary" href="https://youtube.com" target="_blank" label="Instagram" icon="instagram" />
    <Button class="link-btn" severity="secondary" label="Bluesky" icon="instagram" />
    <Button class="link-btn" severity="secondary" label="Printables" icon="instagram" />

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
.link-btn {
  width: 200px;
  height: 150px;
  align-items: center;
  justify-content: center;
  display:inline-block;
  margin: 0 10px;

}
.p-card {
  display: inline-block;
  margin: 15px;
  font-family: 'Ubuntu', sans-serif;
}
</style>