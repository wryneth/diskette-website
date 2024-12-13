
<template>
  <UCard id="about">
    <template #header>
      <h1 class="title">About</h1>
    </template>
    <div class="container">
      <img class="wren" src="/images/studio.png" alt="Wren">
      <H1 class="text">Add rest of bio later</H1>
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
.container {
  display: inline-block;
}
.wren {
  display: inline-block;
  width:750px;
  border-radius: 50px ;
}
.text {
  margin-top: 50px;
  margin-left: 50px;
  display: inline-block;
  font-size: 40px;
  font-family: 'Young Serif', serif;
}
</style>
